import Link from "next/link";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a title="testsetf">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a   title="About Page">about</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
