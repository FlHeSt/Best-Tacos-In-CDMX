import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          CDMX Taco Finder
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/best-tacos" className="text-white hover:text-gray-200">
            Best Tacos
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
