import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/cozy-bedroom-interior.jpg")',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-md">
        {/* 404 Number */}
        <div className="mb-4">
          <h1 className="text-9xl font-bold text-white drop-shadow-lg">404</h1>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">Oops! Page Not Found</h2>

        {/* Description */}
        <p className="text-lg text-gray-100 mb-8 leading-relaxed drop-shadow-sm">
          It seems the page you&#39;re looking for doesn&#39;t exist or has been moved. Let&#39;s get you back home safely.
        </p>

        {/* Go Home Button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-full transition-colors duration-200 shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
