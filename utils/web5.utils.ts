import Campaign from "@/types/campaigns.type";
import { uuid } from "short-uuid";
import { createClient } from "@supabase/supabase-js";

//TODO: change to env variable
export const supabase = createClient(
  "https://afhzvfdehexjwwarwddg.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaHp2ZmRlaGV4and3YXJ3ZGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDc1NTIsImV4cCI6MjAwNzg4MzU1Mn0.i7KPf2UQqd3r164zxA0ElaflaCPPHVB4QL936TiUUik"
);

interface CampaignRecordType {
  data: Campaign;
  recordID: string;
}

export const protocolDefinition = {
  protocol: "http://test3",
  published: true,
  types: {
    campaign: {
      dataFormats: ["application/json"],
    },
  },
  structure: {
    campaign: {
      $actions: [
        {
          who: "anyone",
          can: "read",
        },
        {
          who: "anyone",
          can: "write",
        },
        {
          who: "anyone",
          can: "update",
        },
      ],
    },
  },
};

export const configureProtocol = async (web5: any, did: string | null) => {
  const { protocol, status } = await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
  const response = await protocol.send(did);
  // console.log(response)

  console.log(status);
};

export async function queryProtocol(web5: any) {
  const { protocols } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: "test3",
      },
    },
  });
}

export const createCampaign = async (
  campaign: Campaign,
  web5: any,
  did: string | null
) => {
  const updatedData = { ...campaign, id: uuid(), comments: [] };
  try {
    const { record: initialrecord } = await web5.dwn.records.create({
      data: updatedData,
      message: {
        schema: "blogpost",
        dataFormat: "application/json",
        protocol: "http://test3",
        protocolPath: "campaign",
        published: true,
      },
    });

    const { status: initialstatus } = await initialrecord.send(did);

    const conId = await initialrecord.id;

    return conId;
  } catch (e) {
    console.error("error: ", e);
    return;
  }
};

export const readCampaigns = async (did: any, web5: any) => {
  const { records, status } = await web5.dwn.records.query({
    from: did,
    message: {
      filter: {
        protocol: "http://test3",
        protocolPath: "campaign",
      },
      dateSort: "createdAscending",
    },
  });

  // Handle error
  if (status.code !== 200) {
    console.error("Error querying records", status);
    throw new Error("Error querying records");
  }

  // Handle empty records
  if (records.length === 0) {
    console.log("No matching campaigns found");
    return null;
  }

  const campaignPromises = records.map(async (record: any) => {
    const data = await record.data.json();
    return { data, recordID: record.id } as {
      data: Campaign;
      recordID: string;
    };
  });

  const campaignArray = await Promise.all(campaignPromises);

  return campaignArray as { data: Campaign; recordID: string }[];
};

export const readCampaignDetail = async (
  did: string,
  web5: any,
  recordId: string | string[]
) => {
  console.log(did, recordId);
  try {
    const { records, status } = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          recordId: recordId,
        },
      },
    });

    console.log(records);

    const campaignPromises = records.map(async (record: any) => {
      const data = await record.data.json();
      return data as {
        data: Campaign;
      };
    });

    const campaignArray = await Promise.all(campaignPromises);

    return campaignArray[0];
  } catch (e) {
    console.log("error fetching campaign detail: ", e);
  }
};

export const savePublicCampaign = async (
  did: string | null,
  recordID: string
) => {
  try {
    const { data, error } = await supabase
      .from("did")
      .insert([{ did: did, recordID: recordID }]);
    if (error) {
      throw error;
    }
    console.log("Did inserted:", data);
  } catch (error) {
    console.error("Error inserting did:", error);
  }
};

export const readPublicCampaigns = async (web5: any) => {
  try {
    const { data } = await supabase.from("did").select("*");

    if (!data || data.length === 0) {
      return [];
    }

    const campaignArr = await Promise.all(
      data.map(async (campaign) => {
        return {
          did: campaign.did,
          data: await readCampaignDetail(campaign.did, web5, campaign.recordID),
          recordID: campaign.recordID,
        };
      })
    );

    return campaignArr as { did: string; data: Campaign; recordID: string }[];
  } catch (error) {
    console.error("Error fetching public campaigns:", error);
    return [];
  }
};

export const calcDaysLeft = (date: string) => {
  const targetDate = new Date(date);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the target date and the current date
  const differenceInMs = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysLeft = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  return daysLeft;
};

export const updateCampaignFunds = async (
  web5: any,
  did: string,
  recordID: string | string[],
  addFund: number,
  comment: { name: string; text: string } | null
) => {
  try {
    const { records } = await web5.dwn.records.query({
      from: did,
      message: {
        filter: {
          recordId: recordID,
        },
      },
    });

    const updatedRecords = await Promise.all(
      records?.map(async (record: any) => {
        const prevData = await record.data.json();
        let commentsArr = await prevData.comments;
        if (comment) commentsArr.unshift(comment);
        const newData = {
          ...prevData,
          current_funds: prevData.current_funds + addFund,
          comments: commentsArr,
        };
        await record.update({
          data: newData,
        });
        await record.send(did);
        return newData;
      })
    );

    return updatedRecords;
  } catch (e) {
    console.log("error updating campaign funds: ", e);
    throw e; // Re-throw the error to handle it outside this function
  }
};
