import { useDataFetcher } from "../hooks/data/useDataFetcher";
import { uniqueId } from "lodash";
import Link from "next/link";
import { useMemo } from "react";

export function MostReadArticles({}) {
  const { data } = useDataFetcher(
    "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=1d51297178074cc99f3abaad1adcf67f&pageSize=5"
  );
  const assignCorrectImageSize = useMemo(
    () =>
      data?.articles?.map((item) => {
        return {
          sourceUrl: item.urlToImage,
          width: "100%",
          height: "75px",
        };
      }),
    [data?.articles]
  );

  return (
    <div>
      <h1 className="text-2xl font-bold	pl-4">Most read</h1>
      <div key={uniqueId()} className="border-l-2 pl-4 pt-3">
        {data &&
          data.articles.map((item, idx) => {
            return (
              <div key={uniqueId()} className="flex mb-5 border-b-2">
                <div className="flex-col justify-between">
                  <div className="pr-2">
                    <h3 className="text-base font-medium pb-2">{item.title}</h3>
                    <div className="mb-2">
                      <Link href="">
                        <a className="text-sm pb-2 text-blue-600">
                          Continue reading
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <img
                    style={{
                      width: assignCorrectImageSize[idx].width,
                      height: assignCorrectImageSize[idx].height,
                    }}
                    className=""
                    src={assignCorrectImageSize[idx].sourceUrl}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
