function MovieSkeleton() {
  return (
    <div className="bg-gray-700 shadow-lg text-gray-200 p-2 rounded-md font-['Montserrat'] flex flex-col justify-between gap-1 animate-pulse">
      <div>
        <div className="size-60 bg-gray-600 rounded"></div>
        <div className="h-5 bg-gray-600 rounded mt-3 w-48"></div>
        <div className="h-4 bg-gray-600 rounded mt-2 w-24"></div>
      </div>
      <div className="mt-4">
        <div className="h-8 bg-gray-600 rounded w-60"></div>
      </div>
    </div>
  );
}
export default MovieSkeleton;
