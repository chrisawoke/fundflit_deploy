"use client";

import { useWeb5 } from "@/plugins/web5.client";
import { readCampaigns, readPublicCampaigns } from "@/utils/web5.utils";
import { CampaignCard } from "@/components/CampaignCard";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { configureProtocol } from "@/utils/web5.utils";
import Campaign from "@/types/campaigns.type";

const MyCampaigns = () => {
  const { web5, myDID } = useWeb5();
  const [campaigns, setCampaigns] = useState<
    { data: Campaign; recordID: string }[] | null
  >(null);
  const [web5Mounted, setWeb5Mounted] = useState(false);

  useEffect(() => {
    if (web5) {
      configureProtocol(web5, myDID);
      setWeb5Mounted(true);
    }
  }, [web5]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (web5Mounted) {
        try {
          const campaigns = await readCampaigns(myDID, web5);
          setCampaigns(campaigns);
        } catch (error) {
          // Handle errors if needed
          console.error("Error fetching campaigns:", error);
        }
      }
    };

    fetchCampaigns();
  }, [web5Mounted]);

  return (
    <>
      <header className="bg-[#FBF8F6] px-10 py-5">
        <div className="flex flex-col justify-between gap-10">
          <section className="flex justify-between">
            <article className="text-4xl flex w-full items-baseline text-left font-bold">
              <h1>My Campaigns</h1>
            </article>
            <Link
              href={"/campaigns/create"}
              className="btn whitespace-nowrap bg-green-50 hover:bg-black-100"
            >
              Create a campaign
            </Link>
          </section>
        </div>
      </header>
      {campaigns !== null ? (
        <div>
          <section className="mt-4 h-full">
            {campaigns.length === 0 ? (
              <section className="text-3xl p-60 text-center font-medium">
                Couldn't find any campaigns
              </section>
            ) : (
              <section className="max-container padding-container flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.data.id}>
                    {
                      <CampaignCard
                        campaign={campaign.data}
                        did={myDID}
                        record={campaign.recordID}
                      />
                    }
                  </div>
                ))}
              </section>
            )}
          </section>
        </div>
      ) : (
        <div className="h-screen">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default MyCampaigns;
