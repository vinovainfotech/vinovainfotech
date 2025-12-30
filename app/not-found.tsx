import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <Link href="/#services">
              <Search className="mr-2 h-4 w-4" />
              Browse services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

