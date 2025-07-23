"use client"

import dynamic from "next/dynamic"

// Now we can use dynamic with ssr: false in a client component
const ClientOnlyComponents = dynamic(() => import("./ClientOnlyComponsnets"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-black min-h-screen flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

export default function ClientWrapper() {
  return <ClientOnlyComponents />
}
