export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We provide high-quality solutions for web development, programming learning, 
          and real-world projects to help you grow faster.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are focused on delivering modern web development solutions using technologies 
            like React, Node.js, and MongoDB. Our goal is to simplify complex concepts and 
            make learning practical and industry-ready.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're a beginner or an experienced developer, our platform provides 
            structured guidance, real-world projects, and continuous updates to keep you ahead.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Build modern and scalable web applications using MERN stack.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Training</h3>
              <p className="text-gray-600">
                Learn HTML, CSS, JavaScript, React, and backend technologies step-by-step.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="text-gray-600">
                Work on real-world projects to gain practical experience and portfolio strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact Info */}
            <div>
              <p className="mb-3"><strong>Email:</strong> support@example.com</p>
              <p className="mb-3"><strong>Phone:</strong> +91 9876543210</p>
              <p className="mb-3"><strong>Address:</strong> Delhi, India</p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border p-2 rounded"
              ></textarea>
              <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}