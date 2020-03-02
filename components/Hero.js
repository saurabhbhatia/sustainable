const imgUrl = "https://res.cloudinary.com/drg9hguhu/image/upload/v1583056687/electric-car_oquvpr.png";

export default function Hero() {
  return (
    <div className="flex flex-column">
      <img className="w-1/2" src={imgUrl}></img>
      <div className="w-1/2 flex items-center text-center">
        <h1 className="text-5xl">A blog about living life sustainably as an individual.</h1>
      </div>
    </div>
  );
}
