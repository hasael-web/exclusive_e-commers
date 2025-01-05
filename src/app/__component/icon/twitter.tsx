import Image from "next/image";
import IconTwitterCustome from "@/asset/app-svg/twiter.svg";

const IconTwitter = () => {
  return (
    <Image src={IconTwitterCustome} alt="icon-twitter" width={24} height={24} />
  );
};

export default IconTwitter;
