export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto opacity-50" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  )
}

