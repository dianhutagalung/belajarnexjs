import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-5">
      <ul className="flex justify-end p-4 bg-green-300 font-bold">
        <li className="ml-3 hover:underline underline-offset-4"><Link href="/"><a>Home</a></Link></li>
        <li className="ml-3 hover:underline underline-offset-4"><Link href="/blog"><a>Blog</a></Link></li>
        <li className="ml-3 hover:underline underline-offset-4"><Link href="/users"><a>Users</a></Link></li>
      </ul>
    </header>
  )
}
