"use client";

import { useWeb5 } from "@/plugins/web5.client";
import { readCampaigns, readPublicCampaigns } from "@/utils/web5.utils";
import { CampaignCard } from "@/components/CampaignCard";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@/components/Alert";
import Link from "next/link";
import { configureProtocol } from "@/utils/web5.utils";
import Campaign from "@/types/campaigns.type";
import Spinner from "@/components/Spinner";

const Campaigns = () => {
  const { web5, myDID } = useWeb5();
  const [campaigns, setCampaigns] = useState<
    { did: string; data: Campaign; recordID: string }[] | null
  >(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });
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
          const publicCampaigns = await readPublicCampaigns(web5);
          console.log(publicCampaigns);
          setCampaigns(publicCampaigns);
        } catch (error) {
          // Handle errors if needed
          console.error("Error fetching campaigns:", error);
        }
      }
    };

    fetchCampaigns();
  }, [web5Mounted]);

  // const fetchData = async (did: string) => {
  //   const useDID = did?.search || myDID;
  //   if (did && web5) {
  //     // console.log(useDID);
  //     try {
  //       const campaignArray = await readCampaigns(useDID, web5);

  //       setCampaigns(campaignArray);
  //     } catch (error) {
  //       // Handle errors if any
  //       console.error(error);
  //     }
  //   } else if (web5 && !did) {
  //     try {
  //       const campaignArray = await readCampaigns(myDID, web5);
  //       setCampaigns(campaignArray);
  //       console.log(myDID);
  //     } catch (error) {
  //       // Handle errors if any
  //       console.error(error);
  //     }
  //   }
  // };

  const onSubmit = (data: any) => {
    const filteredCampaigns = campaigns?.filter((campaign) => {
      return campaign.data.campaign_name.includes(data.search);
    });
    setCampaigns(filteredCampaigns || []);
  };

  return (
    <>
      <header className="bg-gray-10 px-10 py-5">
        <div className="flex flex-col justify-between gap-10">
          <section className="flex flex-col justify-between gap-4 md:flex-row">
            <article className="text-4xl flex w-full items-baseline justify-center font-bold md:justify-start">
              <h1>Explore Campaigns</h1>
            </article>
            <div className="flex flex-col gap-2 md:flex-row">
              <Link
                href={"/my-campaigns"}
                className="btn w-full whitespace-nowrap bg-green-50 hover:bg-black-100"
              >
                My Campaigns
              </Link>
              <Link
                href={"/campaigns/create"}
                className="btn w-full whitespace-nowrap bg-green-50 hover:bg-black-100"
              >
                Create a campaign
              </Link>
            </div>
          </section>

          <form className="form" id="search" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Search campaigns by name"
              {...register("search", {
                pattern: {
                  value: /^(?!\d+$).*/,
                  message: "A name cant be only a number",
                },
              })}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-full bg-green-50 hover:bg-black-100"
              >
                Search
              </button>
            </div>

            {!isValid && (
              <Alert
                severity="error"
                message={String(errors?.search?.message)}
              />
            )}
          </form>
        </div>
      </header>
      {campaigns !== null ? (
        <div>
          <section className="mt-4 h-full">
            {campaigns === null ? (
              <section className="text-3xl p-60 text-center font-medium">
                Place a campaign name to start searching
              </section>
            ) : campaigns.length === 0 ? (
              <section className="text-3xl p-60 text-center font-medium">
                Couldn't find any campaign with that name
              </section>
            ) : (
              <section className="max-container padding-container flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.data.id}>
                    {
                      <CampaignCard
                        campaign={campaign.data}
                        did={campaign.did}
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
        <Spinner />
      )}
    </>
  );
};

export default Campaigns;
