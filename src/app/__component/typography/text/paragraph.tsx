import { cn } from "@/lib/utils";

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
}

const Paragraph: React.FC<IProps> = ({
  text = "",
  children,
  className = "",
  ...props
}) => {
  if (children) {
    return (
      <p
        className={cn(
          " sm:truncate text-sm   sm:tracking-tight text-gray-600",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }

  return (
    <p className={cn(" sm:truncate  sm:tracking-tight", className)} {...props}>
      {text}
    </p>
  );
};

export default Paragraph;
