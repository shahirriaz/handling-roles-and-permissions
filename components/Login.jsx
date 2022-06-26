import { UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
export function Login() {
  return (
    <Link href="/login">
      <div className="border-2 flex items-center px-5 py-1 bg-black hover:cursor-pointer">
        <UserIcon className="h-6 w-6 text-white pr-1" />
        <span className="text-white">Sign in</span>
      </div>
    </Link>
  );
}
