import Container from "../container";
import Account from "./account";
import DowloadApp from "./dowload-app";
import Exclusive from "./exclusive";
import QuickLink from "./quick-link";
import Supports from "./support";

const Footer = () => {
  return (
    <div className="w-full clr-bg-body flex justify-center">
      <div className="w-full max-w-[1500px]   min-h-52 px-16 flex flex-wrap items-start pt-10 pb-8 justify-between  text-white">
        <div>
          <Exclusive />
        </div>
        <div>
          <Supports />
        </div>
        <div>
          <Account />
        </div>
        <div>
          <QuickLink />
        </div>
        <div>
          <DowloadApp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
