import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-12">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold text-blue-700">CardPlug.io</h1>
        <div className="space-x-4">
          <button className="text-sm">Log In</button>
          <button className="text-sm">Sign Up</button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Buy and Sell Trading Card Bulk Orders with Transparency</h2>
        <p className="text-gray-600 mb-8">CardPlug.io connects high-volume buyers and bulk sellers of sealed trading card products, with built-in transparency at every step.</p>
        <Link href="/buyer">
          <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">Get Started</button>
        </Link>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">For Buyers</h3>
            <p className="text-sm text-gray-700">Input your desired quantity, price, and shipping region to start the process.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">For Sellers</h3>
            <p className="text-sm text-gray-700">Get matched with verified buyer requests and submit invoices via your dashboard.</p>
          </div>
        </div>
      </main>
    </div>
  );
}