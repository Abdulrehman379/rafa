export default function Contact() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Contact Me</h1>
      <p className="mb-6">Let’s collaborate and build something amazing!</p>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-md px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-md px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-md px-4 py-2"
          rows={5}
        ></textarea>
        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
