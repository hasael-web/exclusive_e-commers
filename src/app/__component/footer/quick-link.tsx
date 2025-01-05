import { Heading } from "../typography";

const QuickLink = () => {
  return (
    <div className="flex flex-col gap-5 py-6 pb-5 text-start">
      <Heading type={2} className="text-zinc-50" text="Quick Link" />
      <p className="hover:border-b cursor-pointer border-gray-300 text-sm text-zinc-50  ">
        Privacy Policy
      </p>
      <p className="hover:border-b cursor-pointer border-gray-300 text-sm text-zinc-50  ">
        Terms Of Use
      </p>
      <p className="hover:border-b cursor-pointer border-gray-300 text-sm text-zinc-50  ">
        FAQ
      </p>
      <p className="hover:border-b cursor-pointer border-gray-300 text-sm text-zinc-50  ">
        Contact
      </p>
    </div>
  );
};

export default QuickLink;
