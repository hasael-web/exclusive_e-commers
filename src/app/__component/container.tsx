import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-[1300px] lg:px-10">{children}</div>
    </div>
  );
};

export default Container;
