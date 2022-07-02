import { useDataFetcher } from "../../hooks/data/useDataFetcher";
import { uniqueId } from "lodash";
import Link from "next/link";

export function LatestNewsArticles({}) {
  const { data } = useDataFetcher(
    "https://newsapi.org/v2/everything?q=movies&apiKey=1d51297178074cc99f3abaad1adcf67f&sortBy=popularity&pageSize=5"
  );

  return (
    <div>
      <h2 className="font-bold text-2xl pl-4">Latest news</h2>
      <div className="pt-3 pl-4 pr-4">
        {data &&
          data?.articles.map((item, idx) => {
            return (
              <div className="border-b-2 mb-2" key={uniqueId()}>
                <h2 className="text-xl font-semibold pb-1">{item.title}</h2>
                <p className="text-sm pb-2">{item.description.slice(0, 80)}</p>
                <div className="mb-2">
                  <Link href={`/article/${item.title}`}>
                    <a className="text-sm pb-2 text-blue-600">
                      Continue Reading
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
