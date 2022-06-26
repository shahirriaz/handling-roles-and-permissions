import { useRouter } from "next/router";
import { useDataFetcher } from "../../hooks/data/useDataFetcher";
import {
  LeftSection,
  RightSection,
} from "../../components/Article/ArticleComponents";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useDataFetcher(
    `https://newsapi.org/v2/everything?q=${slug}&apiKey=1d51297178074cc99f3abaad1adcf67f&pageSize=5`
  );
  return (
    <article className="grid grid-cols-2">
      <LeftSection data={data} />
      <RightSection data={data} />
    </article>
  );
};

export default Category;
