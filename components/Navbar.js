import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white borde-ls-blue-jeans p-6 border-b-1 text-lg">
      <div className="flex items-center flex-no-shrink text-ls-sonic-silver mr-6 font-headings text-2xl tracking-normal">
        <Link href="/">
          <a>Sustainable Life</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="navbar-burger flex items-center px-3 py-2 border rounded text-ls-command-blue border-ls-blue-jeans hover:text-ls-command-blue hover:border-white"
          aria-label="menu"
          aria-expanded="false"
          data-target="toggleNav"
        >
          <svg
            className="fill-current h-3 w-3 sm:w-10 sm:h-10"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div
        id="toggleNav"
        className="navbar-menu w-full ns:block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden md:hidden"
      >
        <div className="lg:flex-grow"></div>
        <div>
          <Link href="/">
            <a className="text-xl block mt-4 lg:inline-block lg:mt-0 text-ls-command-blue font-headings hover:text-ls-dark-sky-blue mr-4 navbar-link">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-xl block mt-4 lg:inline-block lg:mt-0 text-ls-command-blue font-headings hover:text-ls-dark-sky-blue mr-4 navbar-link">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
