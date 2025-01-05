import { cn } from "@/lib/utils";
import { JSX } from "react";

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
  type?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<IProps> = ({
  text = "",
  children,
  className = "clr-title-active",
  type = 1,
  ...props
}) => {
  const typeStyles = {
    1: "text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight",
    2: "text-xl/6 font-semibold sm:truncate sm:text-2xl",
    3: "text-lg/5 font-medium sm:truncate sm:text-xl",
    4: "text-base/4 font-medium sm:truncate sm:text-lg",
    5: "text-sm/4 font-semibold sm:truncate sm:text-base",
    6: "text-xs/3 font-semibold sm:truncate sm:text-sm",
  };
  const headingClass = cn(typeStyles[type], className);

  return (
    <h1 className={headingClass} {...props}>
      {children || text}
    </h1>
  );
};

export default Heading;
