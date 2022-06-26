import SiteLayout from "../components/SiteLayout";
import { FeaturedNewsArticles } from "../components/FeaturedNewsArticles";
import { LatestNewsArticles } from "../components/LatestNewsArticles";
import { MostReadArticles } from "../components/MostReadArticles";
import PermissionsGate from "../components/PersmissionsGate";

export default function Home() {
  return (
    <>
      <PermissionsGate>
        <FeaturedNewsArticles />
        <LatestNewsArticles />
        <MostReadArticles />
      </PermissionsGate>
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
