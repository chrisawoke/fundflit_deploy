const GoalBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-lg ">
      <div
        className="h-full rounded-md bg-green-50"
        style={{ width: `${progress>100 ? 100 : progress}%` }}
      ></div>
    </div>
  );
};

export default GoalBar;
