import "../styles/globals.css";
import SiteLayout from "../components/SiteLayout";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <SiteLayout>{page}</SiteLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
