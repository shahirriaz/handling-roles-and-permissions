import { useRouter } from "next/router";
import { useDataFetcher } from "../../hooks/data/useDataFetcher";

const ArticleDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useDataFetcher(
    "https://newsapi.org/v2/everything?q=movies&apiKey=1d51297178074cc99f3abaad1adcf67f&sortBy=popularity&pageSize=5"
  );
  const article = data.articles.find((d) => d.title === slug);

  return (
    <div>
      <div className="mx-auto flex-col justify-center">
        <div className="border flex justify-center">
          <img className="object-cover h-46" src={article.urlToImage} alt="" />
        </div>
        <div className="flex-col border mx-auto items-center max-w-4xl">
          <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
            {article.title}
          </h1>
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
