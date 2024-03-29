import Link from "next/link";

const nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/archives">Archives</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default nav;
