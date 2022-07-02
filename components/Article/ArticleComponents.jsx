import { useRouter } from "next/router";
import { uniqueId } from "lodash";

export function LeftSection({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>{slug?.charAt(0).toUpperCase() + slug?.slice(1)}</h1>
      {data?.articles.map((item) => (
        <FeaturedArticleItem key={uniqueId()} item={item} />
      ))}
    </div>
  );
}

function FeaturedArticleItem({ item }) {
  return (
    <div className="">
      <h2>{item.title}</h2>
      <img src={item.urlToImage} alt="" />
    </div>
  );
}

export function RightSection({ data }) {
  return (
    <div>
      {data?.articles
        .slice(0)
        .reverse()
        .map((articleItem) => (
          <ArticleList key={uniqueId()} item={articleItem} />
        ))}
    </div>
  );
}

function ArticleList({ item }) {
  return <ArticleListIitem listItem={item} />;
}
function ArticleListIitem({ listItem }) {
  return <div>{listItem.title}</div>;
}
