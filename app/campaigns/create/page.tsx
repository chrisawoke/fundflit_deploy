"use client";

import Alert from "@/components/Alert";
import { useWeb5 } from "@/plugins/web5.client";
import Campaign from "@/types/campaigns.type";
import { createCampaign, savePublicCampaign } from "@/utils/web5.utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";

const CampaignCreate = () => {
  const { web5, myDID } = useWeb5();
  const [campaign, setCampaign] = useState<Campaign>();
  const router = useRouter();

  const [story, setStory] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const isFutureDate = (selectedDate: Date) => {
    const currentDate = new Date();
    const inputDate = new Date(selectedDate);
    return inputDate > currentDate;
  };

  const onSubmit = async (data: any) => {
    data.current_funds = 0;
    data.story = story;
    console.log(data.public);

    try {
      const recordID = await createCampaign(data, web5, myDID);
      if (data.public) {
        savePublicCampaign(myDID, recordID);
      }
      router.push(`/campaigns/detail/${myDID}/${await recordID}`);
      // createCampExamples();
    } catch (error) {
      // Handle error if createCampaign fails
      console.error("Error creating campaign:", error);
    }
  };

//   const createCampExamples = async () => {
//     const camps = [
//       {
//         campaign_name: "GreenHive: Empowering Urban Farming",
//         current_funds: 1900,
//         futureDate: "2044-12-01",
//         goal: 2000,
//         id: "23224176-c045-4007-b325-1aea0a7051d3",
//         imageUrl: "https://i.imgur.com/srLyOiV.jpeg",
//         name: "Franco Aguirre",
//         public: true,
//         story: `Welcome to GreenHive, where we're on a mission to transform urban living into a sustainable, farm-to-table experience. 
          
// ### Project Overview
// GreenHive is dedicated to revolutionizing urban farming by introducing innovative hydroponic systems tailored for households. Our compact, smart, and affordable systems empower individuals to cultivate fresh, organic produce within the confines of their homes, irrespective of space limitations. 
          
// ### How It Works
// Our cutting-edge hydroponic technology ensures that anyone, regardless of their familiarity with farming, can easily grow a variety of crops indoors. Through our user-friendly mobile app, users can remotely monitor, control environmental conditions, and receive guidance for optimal plant growth. 
          
// ### Impact
// By bringing farming closer to home, GreenHive promotes sustainability and self-sufficiency in urban areas. Reduced reliance on long supply chains means fresher produce, lowered carbon footprint, and a stronger connection to nature for city dwellers.
          
// ### Funding Goal
// To kickstart this revolution, we're seeking funding support totaling 2000 ETH. This will cover the research and development costs, production of the initial batch of smart hydroponic systems, app development, and the launch of our marketing campaign.
          
// Join us in reshaping urban living while fostering a greener, healthier future.
          
// *Estimated Delivery:* Our backers can expect the first batch of GreenHive systems and app access within 12 months of the campaign's successful completion.
          
// *Backer Rewards:* Backers will receive exclusive early access to the GreenHive system, personalized tutorials, and ongoing updates on our progress.
          
// Your contribution matters. Let's grow together!`,
//       },
//       {
//         campaign_name:
//           "UpCycleWheels: Transforming Plastic Waste into Bicycles",
//         current_funds: 100,
//         futureDate: "2025-12-01",
//         goal: 500,
//         id: "23233176-c045-4007-b325-1aea0a7051d3",
//         imageUrl: "https://i.imgur.com/2oRVTmv.jpeg",
//         name: "Franco Aguirre",
//         public: true,
//         story: `Welcome to UpCycleWheels, where we're turning the tide on plastic pollution and revolutionizing transportation with a sustainable twist.
        
// ### Project Overview
// UpCycleWheels is dedicated to combating environmental issues by repurposing plastic waste into high-quality bicycles. Our mission is twofold: reduce plastic pollution and offer eco-friendly, durable bikes to conscientious consumers. Through partnerships with recycling facilities, we collect discarded plastic and transform it into sturdy, affordable bicycles.
        
// ### How It Works
// We leverage cutting-edge technology to process and mold recycled plastic into durable bike frames and components. The result? Stylish, reliable bicycles that champion sustainability without compromising on quality or performance.
        
// ### Impact
// By upcycling plastic waste, UpCycleWheels contributes to a cleaner planet while promoting healthier communities through accessible, eco-conscious transportation. Every bike sold represents a step toward reducing plastic in landfills and oceans.
        
// ### Funding Goal
// To initiate this impactful endeavor, we're seeking 500 ETH in funding. This will cover research and development, establishing partnerships with recycling facilities, manufacturing the initial batch of upcycled bicycles, and launching our marketing campaign to raise awareness.
        
// Join us in pedaling towards a greener, cleaner future.
        
// *Estimated Delivery:* Backers can anticipate the delivery of their UpCycleWheels bikes within 10-12 months of successfully reaching our funding goal.
        
// *Backer Rewards:* Backers will receive exclusive early access to purchase the first batch of UpCycleWheels bikes, along with updates on our recycling and production milestones.
        
// Every contribution counts. Let's ride towards sustainability together!`,
//       },
//       {
//         campaign_name:
//           "SolarSprint: Empowering Rural Communities",
//         current_funds: 2100,
//         futureDate: "2045-12-01",
//         goal: 1500,
//         id: "23554176-c045-4007-b325-1aea0a7051d3",
//         imageUrl: "https://i.imgur.com/HSxtHlp.jpeg",
//         name: "Franco Aguirre",
//         public: true,
//         story: `Welcome to SolarSprint, where we're harnessing the power of the sun to transform lives in underserved rural communities.

// ### Project Overview
// SolarSprint is a pioneering initiative aimed at providing renewable energy solutions to areas lacking access to reliable electricity. Our primary focus is the distribution of portable solar-powered kits. These kits are equipped with essential amenities such as lights, phone chargers, and educational devices. By introducing these kits, we aim to bridge the electricity gap and enhance access to learning resources in remote regions.
        
// ### How It Works
// Our solar-powered kits are designed to be user-friendly and durable, ensuring longevity and easy maintenance. They provide immediate access to clean energy, enabling communities to light up their homes and charge essential devices using renewable sources.
        
// ### Impact
// With your support, we'll illuminate lives by bringing light to homes and educational resources to schools. SolarSprint doesn’t just provide power; it empowers communities by fostering educational opportunities and economic growth through sustainable technology.
        
// ### Funding Goal
// To kickstart this transformative journey, we're seeking funding support totaling 1500 ETH. This will cover the production costs of the initial batch of solar-powered kits, distribution logistics, community engagement programs, and the setup of support networks for maintenance and future expansions.
        
// Join us in bringing sustainable power and educational resources to those who need it most.
        
// *Estimated Delivery:* The first batch of SolarSprint kits will be delivered within 9 months of successfully reaching our funding goal.
        
// *Backer Rewards:* Backers will receive updates on the project's impact, recognition on our website, and the opportunity to be involved in community engagement programs.
        
// Make a difference today. Let's light up the world together!`,
//       },
//     ];

//     camps.forEach(async (campaign) => {
//       const recordID = await createCampaign(campaign, web5, myDID);
//       savePublicCampaign(myDID, recordID);
//     });
//   };

  return (
    <>
      <header className="px-10 py-5 bg-gray-10 flex flex-col">
        <div className="flex justify-between flex-col gap-10">
          <section className="flex justify-between">
            <article className="w-full flex items-baseline text-4xl font-bold text-left">
              <h1>Create your own campaign</h1>
            </article>
          </section>
          <Link
            href={"/campaigns"}
            className="bg-green-50 hover:bg-black-100 btn self-start"
          >
            {"< Go back to campaigns"}
          </Link>
        </div>
      </header>
      <section className="h-full mt-4 mx-10">
        <div>
          <form
            id="campaign"
            className="form"
            onSubmit={handleSubmit(onSubmit)}
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

            {/* Campaign name */}
            <div>
              <label>Campaign name*</label>
              <input
                className="w-full"
                type="text"
                placeholder="Write a tilte"
                {...register("campaign_name", {
                  required: "The campaign name field must be filled",
                  minLength: {
                    value: 3,
                    message:
                      "The campaign name should have at least 3 characters",
                  },
                  pattern: {
                    value: /^(?!\d+$).*/,
                    message: "A campaign name cant be only a number",
                  },
                })}
              />
            </div>

            {/* Story */}
            <div data-color-mode="light">
              <label>Campaign story</label>
              <MDEditor
                textareaProps={{ placeholder: "Write your story" }}
                value={story}
                onChange={setStory as MDEditorProps["onChange"]}
              />
            </div>

            {/* Goal */}
            <div>
              <label>
                Goal(
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
                {...register("goal", {
                  required: "The goal field must be filled",
                  pattern: {
                    value: /^\d+(\.\d+)?$/,
                    message: "Please enter a valid goal number",
                  },
                })}
              />
            </div>

            {/* End Date */}
            <div>
              <label>End date*</label>
              <input
                className="w-full"
                type="date"
                {...register("futureDate", {
                  required: "The end date field must be filled",
                  validate: {
                    futureDate: (value) =>
                      isFutureDate(value) || "Please select a future date",
                  },
                })}
              />
            </div>

            {/* Campaign image */}
            <div>
              <label>Campaign image*</label>
              <input
                className="w-full"
                type="url"
                placeholder="Place image URL of your campaign"
                {...register("imageUrl", {
                  required: "The campaign image field must be filled",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i,
                    message:
                      "Please enter a valid image URL (png, jpg, jpeg, gif)",
                  },
                })}
              />
            </div>

            {/* Is the campaign public? */}

            <div className="flex flex-col justify-start items-start gap-1">
              <label>Is this campaign public?</label>
              <input
                className="scale-150 ml-1"
                type="checkbox"
                {...register("public")}
              />
            </div>

            {/* Submit */}
            <button className="bg-green-50 hover:bg-black-100" type="submit">
              Submit new campaign
            </button>
          </form>
        </div>

        {Object.keys(errors).length > 0 && (
          <Alert
            severity="error"
            message={String(Object.values(errors)[0]?.message)}
          />
        )}
      </section>
    </>
  );
};

export default CampaignCreate;
