import { SendHorizontal } from "lucide-react";
import { Heading } from "../typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Exclusive = () => {
  return (
    <div className="flex flex-col gap-5 py-6 pb-5">
      <Heading type={2} className="mb-3 " text="Exclusive" />
      <Heading type={3} className="text-lg" text="Subscription" />
      <Heading
        type={6}
        text="Get 10% off your first order"
        className="text-sm"
      />
      <div className="flex relative">
        <Input
          placeholder="Enter your email"
          inputMode="search"
          className="w-full"
        />
        <Button variant="ghost" className="absolute right-0 top-0 ">
          <SendHorizontal size={50} />
        </Button>
      </div>
    </div>
  );
};

export default Exclusive;
