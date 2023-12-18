"use client";
import {
  calcDaysLeft,
  readCampaignDetail,
  updateCampaignFunds,
} from "@/utils/web5.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWeb5 } from "@/plugins/web5.client";
import Spinner from "@/components/Spinner";
import GoalBar from "@/components/GoalBar";
import Campaign from "@/types/campaigns.type";
import MDEditor from "@uiw/react-md-editor";
import { set, useForm } from "react-hook-form";
import Image from "next/image";
import close from "@/public/assets/close.svg";
import { CommentEl } from "@/components/CommentEl";

const CampaignDetails = () => {
  const { web5 } = useWeb5();

  const { did, campaignRecord } = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  //Ensure did is string
  const stringDid = Array.isArray(did) ? did[0] : did;

  const decodedDid = decodeURIComponent(stringDid);
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [comments, setComments] = useState<{ name: string; text: string }[]>();

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (web5) {
        const camp = await readCampaignDetail(decodedDid, web5, campaignRecord);
        console.log(camp)
        setCampaign(camp);
      }
    };

    fetchCampaigns();
  }, [web5, decodedDid]);

  useEffect(() => {
    if (campaign) {
      const prog = (campaign.current_funds / campaign.goal) * 100;
      setProgress(prog > 100 ? 100 : prog);
      setDaysLeft(calcDaysLeft(campaign.futureDate));
    }
  }, [campaign]);

  useEffect(() => {
    setComments(campaign?.comments);
  }, [campaign]);

  const Donate = () => {
    const [isDonateOpen, setIsDonateOpen] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({ mode: "onSubmit" });

    const onSubmit = async (data: any) => {
      const comment = { name: data.name, text: data.comment };
      const donation = Number(data.donation);
      try {
        const updatedCampaign = await updateCampaignFunds(
          web5,
          decodedDid,
          campaignRecord,
          donation,
          data.comment ? comment : null
        );
        setCampaign(updatedCampaign[0]);
      } catch (error) {
        // Handle error if createCampaign fails
        console.error("Error donating to campaign:", error);
      }
    };

    return (
      <>
        <div
          onClick={() => {
            setIsDonateOpen(true);
          }}
        >
          <button className="w-full rounded-lg bg-green-50 py-4 text-xl font-medium text-white transition-all hover:scale-95 hover:bg-black-100">
            Back this project
          </button>
        </div>

        {isDonateOpen && (
          <dialog
            open={isDonateOpen}
            className="fixed top-0 z-50 flex h-full w-full animate-fade-in items-center justify-center bg-slate-700 bg-opacity-60 backdrop-blur-sm"
          >
            <div
              className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-300`}
            >
              <div className="m-2 flex items-center justify-between">
                <article className="relative left-5 z-0 flex w-full items-center justify-center">
                  <h2 className="text-lg font-bold">
                    <p>Back this project</p>
                  </h2>
                </article>

                <button
                  className="z-10 rounded-md p-2 hover:scale-95 transition-transform"
                  onClick={() => {
                    setIsDonateOpen(false);
                  }}
                >
                  <Image src={close} alt="close" width={24} height={24} />
                </button>
              </div>

              <section className="p-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form"
                  id="donate"
                >
                  {/* Name */}
                  <div>
                    <label>Name*</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "The name field must be filled",
                        minLength: {
                          value: 3,
                          message: "The name should have at least 3 characters",
                        },
                        pattern: {
                          value: /^(?!\d+$).*/,
                          message: "A name cant be only a number",
                        },
                      })}
                    />
                  </div>

                  {/* Donation */}
                  <div>
                    <label>
                      How much would you like to donate? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hyper underline"
                        href="https://coinmarketcap.com/currencies/ethereum/"
                      >
                        ETH
                      </a>
                      )*
                    </label>
                    <input
                      className="w-full"
                      inputMode="numeric"
                      placeholder="0.50"
                      {...register("donation", {
                        required: "The donation field must be filled",
                        pattern: {
                          value: /^\d+(\.\d+)?$/,
                          message: "Please enter a valid donation number",
                        },
                      })}
                    />
                  </div>

                  {/* Comment*/}
                  <div className="w-full">
                    <label>Leave a comment to the entrepeneur</label>
                    <textarea
                      className="w-full"
                      rows={5}
                      {...register("comment", {
                        minLength: {
                          value: 3,
                          message:
                            "The comment should have at least 3 characters",
                        },
                        pattern: {
                          value: /^(?!\d+$).*/,
                          message: "A comment cant be only a number",
                        },
                      })}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    className="bg-green-50 hover:bg-black-100"
                    type="submit"
                  >
                    Donate
                  </button>
                </form>
              </section>
            </div>
          </dialog>
        )}
      </>
    );
  };

  return (
    <>
      {campaign !== null ? (
        <div className="flex flex-col gap-4 bg-gray-10 py-10 px-5 md:px-10 ">
          {/* Title */}
          <header className="w-full text-center">
            <article>
              <h1 className="text-2xl font-semibold">
                {campaign?.campaign_name}
              </h1>
            </article>
          </header>

          {/* Body */}
          <section className="flex w-full flex-col gap-2">
            <section className="flex flex-col md:flex-row gap-5">
              <div
                className="h-[300px] md:h-[400px] w-auto min-w-[65%] rounded-t-md bg-cover bg-center"
                style={{ backgroundImage: `url(${campaign?.imageUrl})` }}
              />

              <div className="flex w-full flex-col justify-between">
                <GoalBar progress={progress} />

                {/* Raised numbers */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-green-50">
                    {campaign?.current_funds} ETH
                  </h2>
                  <p className="text-gray-500">
                    raised of {campaign?.goal} ETH goal
                  </p>
                </div>

                {/* Raised percentage */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-black-100">
                    {progress.toFixed(2)}%
                  </h2>
                  <p className="text-gray-500">founded</p>
                </div>

                {/* Days left */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-2xl font-semibold text-black-100">
                    {daysLeft}
                  </h2>
                  <p className="text-gray-500">days to go</p>
                </div>

                {/* Back this project button */}
                {web5 && <Donate />}
              </div>
            </section>
            <div className="flex gap-1 pl-4">
              <h2 className="font-semibold">{campaign?.name} </h2>
              <p className="text-gray-500">is organizing this fundraiser</p>
            </div>

            {/* Story */}
            <div
              className="flex flex-col gap-2 rounded-lg bg-white p-4 lg:px-60"
              data-color-mode="light"
            >
              <MDEditor.Markdown
                source={campaign?.story}
                style={{ whiteSpace: "pre-wrap" }}
              />
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Comments</h2>
              {comments ? (
                <div className="flex flex-col gap-4">
                  {comments.map((comment) => {
                    return <CommentEl commentInfo={comment} />;
                  })}
                </div>
              ) : (
                <p>This campaign has no comments</p>
              )}
            </div>
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

export default CampaignDetails;
