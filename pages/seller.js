export default function Seller() {
  return (
    <div className="min-h-screen p-8 text-gray-900 bg-white">
      <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
      <p className="mb-4">Submit your invoice for matched buyer requests.</p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Match ID" className="w-full p-2 border rounded" />
        <input type="url" placeholder="Invoice Link" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Tracking Info" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Fulfillment</button>
      </form>
    </div>
  );
}