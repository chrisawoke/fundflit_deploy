import Image from "next/image";
import GoalBar from "./GoalBar";
import lock from "@/public/assets/lock.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

export const CampaignCard = ({ campaign, did, record }: any) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const prog = (campaign.current_funds / campaign.goal) * 100;
    setProgress(prog);
  }, [campaign.goal, campaign.current_funds]);

  return (
    <Link
      href={`/campaigns/detail/${did}/${record}`}
      className="flex flex-col gap-2 rounded-md border-2 bg-white transition-transform hover:scale-95"
    >
      {!campaign.public && (
        <div className="absolute m-2 rounded-lg bg-black-100 p-2">
          <Image src={lock} width={24} height={24} alt="private campaign" />
        </div>
      )}

      <div
        className="h-[200px] w-auto rounded-t-md bg-cover bg-center"
        style={{ backgroundImage: `url(${campaign.imageUrl})` }}
      />

      <section className="flex flex-col gap-2 p-3">
        <article className="line-clamp-3 font-semibold">
          {campaign.campaign_name}
        </article>
        <h3>by {campaign.name}</h3>
        <div>
          <GoalBar progress={progress} />
          <h3>{`${campaign.current_funds.toFixed(2)} ETH pledged`}</h3>
          <h3>{`${progress > 100 ? 100 : progress.toFixed(2)}% funded`}</h3>
        </div>
      </section>
    </Link>
  );
};
