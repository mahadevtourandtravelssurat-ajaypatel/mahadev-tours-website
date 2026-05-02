export default function Packages() {
  const data = [
    { title: "Kedarnath Yatra", price: "₹12,999" },
    { title: "Char Dham Yatra", price: "₹29,999" },
    { title: "Somnath Dwarka", price: "₹5,999" },
  ];

  return (
    <section id="packages" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Tour Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((pkg, i) => (
          <div
            key={i}
            className="border border-gray-700 p-6 rounded-xl hover:border-yellow-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>

            <p className="text-yellow-400 font-bold mb-4">
              {pkg.price}
            </p>

            <a
              href="https://wa.me/919999999999"
              className="text-green-400 hover:underline"
            >
              Book Now →
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}