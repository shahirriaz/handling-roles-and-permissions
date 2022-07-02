import Link from "next/link";
import { Login } from "./Login";
import { uniqueId } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const menuItems = [
  "World",
  "Politics",
  "Business",
  "Opinion",
  "Tech",
  "Science",
  "Sports",
  "Arts",
  "Books",
  "Style",
  "Food",
  "Travel",
  "Magazine",
];

function Navbar({ callbackfn }) {
  return (
    <div className="mx-auto">
      <nav>
        <div className="py-4 flex justify-between	">
          {menuItems.map(callbackfn)}
        </div>
      </nav>
    </div>
  );
}

const SiteLayout = ({ children }) => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    if (router.route === "/login") setNavbar(false);
    else setNavbar(true);
  }, [router.route]);

  return (
    <div className="bg-white">
      <div className="mx-auto px-8">
        <div className="py-4 flex justify-between">
          <div className="flex items-center bg-black p-2 pr-3">
            <img className="h-8 w-8" src="/newspaper.png" alt="" />
            <Link href="/">
              <span className="hover:cursor-pointer pl-3 pt-1 font-mono text-white">
                News app
              </span>
            </Link>
          </div>
          <Login />
        </div>
        {navbar && (
          <Navbar
            callbackfn={(item) => {
              return (
                <Link key={uniqueId()} href={`/category/${item.toLowerCase()}`}>
                  <a className="">{item}</a>
                </Link>
              );
            }}
          />
        )}
      </div>
      <div className="px-8 py-4 ">{children}</div>
    </div>
  );
};

export default SiteLayout;
