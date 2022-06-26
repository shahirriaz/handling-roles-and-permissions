import Link from "next/link";
import { Login } from "./Login";
import { uniqueId } from "lodash";

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

const SiteLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-8">
        <div className="px-8 py-4 flex justify-between">
          <img className="h-8 w-8" src="/newspaper.png" alt="" />
          <Login />
        </div>
        <div className="mx-auto">
          <nav>
            <div className="py-4 flex justify-between	">
              {menuItems.map((item) => {
                return (
                  <Link key={uniqueId()} href="">
                    <a className="">{item}</a>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
      <div className="px-8 py-4 ">{children}</div>
    </div>
  );
};

export default SiteLayout;
