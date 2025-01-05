"use client";

import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "../__component/typography";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/route";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
      <Heading
        className="font-normal py-6"
        style={{
          fontSize: 100,
        }}
        text=" 404 Not Found"
      />
      <Paragraph
        text="Your visited page not found. You may go home page."
        className="text-gray-700"
      />
      <Button
        variant="destructive"
        className="px-6 py-6"
        style={{
          fontSize: 15,
        }}
        onClick={() => {
          router.push(ROUTES.home);
        }}
      >
        Back to home page
      </Button>
    </div>
  );
};

export default NotFound;
