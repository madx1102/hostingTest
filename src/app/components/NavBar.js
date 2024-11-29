import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">github.io - Home : /(root)</Link>
      <Link href="about"></Link>
      <Link href="/foo">foo</Link>
    </nav>
  );
}
