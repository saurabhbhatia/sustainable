const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <div className="py-4 px-12 sm:px-4 border-t-1 text-center">
      &copy; Copyright {currentYear}
      <a className="ml-4" href="https://icons8.com/icon/122505/oak-tree">
        Oak Tree icon by Icons8
      </a>
  </div>
  );
}
