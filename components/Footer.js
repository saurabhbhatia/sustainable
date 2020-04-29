const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <div className="py-4 px-12 sm:px-4 border-t-1 text-center">
      &copy; Copyright {currentYear}
      &nbsp;Sustainable Life
  </div>
  );
}
