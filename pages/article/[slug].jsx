import { useRouter } from "next/router";
import { useDataFetcher } from "../../hooks/data/useDataFetcher";
import PermissionsGate from "../../components/PersmissionsGate";
import { SCOPES } from "../../utils/permission-map";

const ArticleDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useDataFetcher(
    "https://newsapi.org/v2/everything?q=movies&apiKey=1d51297178074cc99f3abaad1adcf67f&sortBy=popularity&pageSize=5"
  );
  const article = data.articles.find((d) => d.title === slug);

  const isRegisteredUser = false;

  return (
    <div>
      <div className="mx-auto flex-col justify-center">
        <div className="flex justify-center">
          <img className="object-cover h-80" src={article.urlToImage} alt="" />
        </div>
        <div className="flex-col mx-auto items-center max-w-4xl">
          <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
            {article.title}
          </h1>
          <PermissionsGate
            scopes={isRegisteredUser ? [SCOPES.canView] : []}
            RenderError={() => (
              <p className="text-center font-medium">
                You must be a registered user to see the content
              </p>
            )}
          >
            <p>{article.content}</p>
          </PermissionsGate>
          {!isRegisteredUser && (
            <div className="relative">
              <p className="pb-8 pt-8">{article.content}</p>
              <div
                style={{ height: "80px", opacity: "0.9" }}
                className="absolute bottom-0 w-full left-0 z-10 bg-white "
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
