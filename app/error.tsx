"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Something went wrong!
          </h1>
          <p className="text-gray-600 mb-6">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

