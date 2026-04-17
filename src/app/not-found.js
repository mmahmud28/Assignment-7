import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-6xl font-bold text-red-500">Something went wrong</h1>
      <p className="text-gray-600">Page not found or invalid request</p>

      <Link href="/" className="px-6 py-2 bg-[#244D3F] text-white rounded">
        Go Home
      </Link>
    </div>
  );
}