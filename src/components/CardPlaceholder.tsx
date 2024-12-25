export default function CardPlaceholder() {
  return (
    <div className="w-[120px] flex-shrink-0 bg-white/50 rounded-lg shadow-lg animate-pulse">
      <div className="w-full h-[160px] bg-gray-200 rounded-t-lg" />
      <div className="p-2">
        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}
