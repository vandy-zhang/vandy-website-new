import "./../../globals.css";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="font-sriracha text-4xl">Vandy Zhang</div>
      <nav className="font-stylish text-2xl">
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Fortune</li>
          <li>Music</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Year-end Summaries</li>
        </ul>
      </nav>
    </header>
  );
}
