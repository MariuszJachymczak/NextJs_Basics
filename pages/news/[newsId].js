//our-domain.com/news/something-important

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1> NewsPage</h1>;
}
export default DetailPage;
