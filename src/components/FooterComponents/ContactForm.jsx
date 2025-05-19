const ContactForm = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        Send Us a Message
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="md:col-span-2 border border-gray-300 px-4 py-2 rounded w-full"
        />
        <div className="md:col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-2 rounded w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
