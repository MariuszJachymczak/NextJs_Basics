//our news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1> NewsPage</h1>;
      <ul>
        <li>
          <Link href="/news/NextJs blah blah">NextJs blah blah</Link>
        </li>
        <li>More blah blah blah </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
