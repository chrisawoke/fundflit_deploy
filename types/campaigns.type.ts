type Campaign = {
  id: string;
  name: string;
  campaign_name: string;
  story: string;
  goal: number;
  current_funds: number;
  futureDate: string;
  imageUrl: string;
  isPublic: boolean;
  shortURL: string;
  comments: { name: string; text: string }[];
};

export default Campaign;
