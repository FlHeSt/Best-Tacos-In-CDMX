import Link from "next/link";

const Orientation = () => {
  return (
    <div className="flex justify-around mt-4">
      <div className="bg-red-500 w-1/3 h-32">Red Div</div>
      <div className="bg-green-500 w-1/3 h-32">Green Div</div>
      <div className="bg-blue-500 w-1/3 h-32">Blue Div</div>
    </div>
  );
};

export default Orientation;
