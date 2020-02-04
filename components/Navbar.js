import Link from 'next/link';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
}
