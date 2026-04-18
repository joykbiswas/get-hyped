export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
      
      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
      </div>
      
      {/* Card skeleton */}
      <div className="border rounded-lg p-6 space-y-3">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}