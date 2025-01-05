import Link from "next/link";
import { Heading } from "../typography";

const Account = () => {
  return (
    <div className="flex flex-col gap-5 py-6 pb-5">
      <Heading type={2} className="text-zinc-50" text="Account" />
      <Link href={""} className="text-sm">
        My Account
      </Link>
      <Link href={""} className="text-sm">
        Login / Register
      </Link>
      <Link href={""} className="text-sm">
        Cart
      </Link>
      <Link href={""} className="text-sm">
        Wishlist
      </Link>
      <Link href={""} className="text-sm">
        Shop
      </Link>
    </div>
  );
};

export default Account;
