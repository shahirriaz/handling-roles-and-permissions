import { uniqueId } from "lodash";
import { useMemo } from "react";
import { useDataFetcher } from "../../hooks/data/useDataFetcher";

export function FeaturedNewsArticles({}) {
  const { data } = useDataFetcher(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=1d51297178074cc99f3abaad1adcf67f"
  );

  const filteredArticleData = useMemo(
    () => data?.articles?.filter((article) => Boolean(article.urlToImage)),
    [data?.articles]
  );

  return (
    <div>
      <h1 className="text-2xl font-bold	">Featured news</h1>
      <div key={uniqueId()} className="border-r-2 pr-2 pt-3">
        {data && (
          <>
            <img src={filteredArticleData[0].urlToImage} alt="" />
            <p className="text-xs py-1 text-gray-500">
              {filteredArticleData[0].publishedAt}
            </p>
            <h2 className="text-xl font-semibold pb-1">
              {filteredArticleData[0].title}
            </h2>
            <p className="text-sm pt-2">{filteredArticleData[0].content}</p>
          </>
        )}
      </div>
    </div>
  );
}
