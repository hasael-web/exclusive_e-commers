import { Instagram } from "lucide-react";
import {
  IconAppStore,
  IconFacebook,
  IconLinkedin,
  IconPlaystore,
  IconQrSample,
  IconTwitter,
} from "../icon";
import { Heading } from "../typography";

const DowloadApp = () => {
  return (
    <div className="flex flex-col gap-5 py-6 pb-5">
      <Heading type={2} className="mb-3 " text="Dowload App" />
      <Heading
        type={6}
        text="Save $3 with App New User Only"
        className="text-gray-400"
      />
      <div className="flex gap-2">
        <IconQrSample />
        <div className="flex flex-col gap-1">
          <IconPlaystore />
          <IconAppStore />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <IconFacebook />
        <IconTwitter />
        <Instagram />
        <IconLinkedin />
      </div>
    </div>
  );
};

export default DowloadApp;
