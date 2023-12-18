"use client";

interface commentElProps {
  commentInfo: { name: string; text: string };
}

export const CommentEl = ({ commentInfo }: commentElProps) => {
  if (commentInfo.name) {
    return (
      <div className="bg-white w-full p-4 rounded-lg">
        <p>{commentInfo.text}</p>
        <h3 className="font-semibold text-sm">{commentInfo.name}</h3>
      </div>
    );
  } else return;
};
