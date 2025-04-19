import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-8">
      <nav className="flex justify-center space-x-6 mb-8 border-b pb-4">
        <Link href="/">
          <span className={path === '/' ? 'font-bold text-blue-700' : 'text-gray-500'}>Home</span>
        </Link>
        <Link href="/buyer">
          <span className={path === '/buyer' ? 'font-bold text-blue-700' : 'text-gray-500'}>Buyer</span>
        </Link>
        <Link href="/seller">
          <span className={path === '/seller' ? 'font-bold text-blue-700' : 'text-gray-500'}>Seller</span>
        </Link>
        <Link href="/admin">
          <span className={path === '/admin' ? 'font-bold text-blue-700' : 'text-gray-500'}>Admin</span>
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Buy and Sell Trading Card Bulk Orders with Transparency</h2>
        <p className="text-gray-600 mb-12">CardPlug.io connects high-volume buyers and bulk sellers of sealed trading card products, with built-in transparency at every step.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">For Buyers</h3>
            <p className="text-sm text-gray-700 mb-4">Input your desired quantity, price, and shipping region to start the process.</p>
            <Link href="/buyer">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Go to Buyer Dashboard</button>
            </Link>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">For Sellers</h3>
            <p className="text-sm text-gray-700 mb-4">Get matched with verified buyer requests and submit invoices via your dashboard.</p>
            <Link href="/seller">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">Go to Seller Dashboard</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}