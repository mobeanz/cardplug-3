export default function Buyer() {
  return (
    <div className="min-h-screen p-8 text-gray-900 bg-white">
      <h1 className="text-3xl font-bold mb-4">Buyer Dashboard</h1>
      <p className="mb-4">Request sealed product in bulk.</p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Product Type" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Quantity" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Target Price" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Region" className="w-full p-2 border rounded" />
        <textarea placeholder="Notes" className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Request</button>
      </form>
    </div>
  );
}