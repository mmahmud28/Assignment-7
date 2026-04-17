"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-5xl font-bold text-red-500">Something went wrong</h1>

      <p className="text-gray-600">
        Unexpected error occurred
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-[#244D3F] text-white rounded"
      >
        Try Again
      </button>

      <Link href="/" className="underline">
        Go Home
      </Link>
    </div>
  );
}