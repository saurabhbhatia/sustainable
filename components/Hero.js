const imgUrl = "https://res.cloudinary.com/drg9hguhu/image/upload/v1588066071/fogg-coffee-break_iuhchq.png";

export default function Hero() {
  return (
    <div className="flex flex-column w-full border-b-1">
      <img className="w-1/2 sm:w-full sm:h-auto hero-img" src={imgUrl}></img>
      <div className="w-1/2 sm:hidden flex items-center text-center bg-ls-peachpuff">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl">A blog about living life sustainably as an individual.</h1>
      </div>
  <style jsx>{`
    .hero-img {
      height: intrinsic;
    }
  `}</style>
    </div>
  );
}