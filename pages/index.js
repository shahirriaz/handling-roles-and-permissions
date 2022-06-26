import SiteLayout from "../components/SiteLayout";
import { FeaturedNewsArticles } from "../components/FeaturedNewsArticles";
import { LatestNewsArticles } from "../components/LatestNewsArticles";
import { MostReadArticles } from "../components/MostReadArticles";

export default function Home() {
  return (
    <>
      <FeaturedNewsArticles />
      <LatestNewsArticles />
      <MostReadArticles />
    </>
  );
}

function IndexLayout({ children }) {
  return <div className="grid grid-cols-3">{children}</div>;
}

Home.getLayout = (page) => (
  <SiteLayout>
    <IndexLayout>{page}</IndexLayout>
  </SiteLayout>
);
