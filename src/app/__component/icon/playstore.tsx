import Image from "next/image";
import Playstore from "@/asset/app-svg/playstore.svg";

const IconPlaystore = () => {
  return (
    <Image src={Playstore} alt="icon-playstore" width={140} height={120} />
  );
};

export default IconPlaystore;
