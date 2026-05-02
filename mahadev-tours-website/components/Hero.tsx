export default function Hero() {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
  
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Mahadev <span className="text-yellow-400">Tours</span>
        </h1>
  
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
          Safe Journey • Comfortable Stay • Memorable Yatra
        </p>
  
        <div className="mt-8 flex gap-4">
          <a
            href="https://wa.me/919999999999"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            Book Now
          </a>
  
          <a
            href="#packages"
            className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black"
          >
            View Packages
          </a>
        </div>
  
      </section>
    );
  }