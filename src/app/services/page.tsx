export default function Services() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-10">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-500 text-white rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">💻 Web Development</h2>
          <p>Responsive, scalable websites using Next.js & React.</p>
        </div>
        <div className="p-6 bg-pink-500 text-white rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">🎨 UI/UX Design</h2>
          <p>Modern, user-friendly interfaces for better engagement.</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">⚡ App Optimization</h2>
          <p>Boosting performance with SSR, SSG, and API integration.</p>
        </div>
      </div>
    </section>
  );
}
