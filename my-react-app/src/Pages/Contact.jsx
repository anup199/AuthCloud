import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/contact', form)
      setStatus('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Error. Try again.')
    }
  }

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side (Info Section) */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 text-sm leading-relaxed">
            Have any questions or need help? Fill out the form and our team will
            get back to you shortly.
          </p>

          <div className="space-y-3 text-sm">
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Location:</strong> Delhi, India</p>
          </div>
        </div>

        {/* Right Side (Form Section) */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-center text-green-600 mt-2">
                {status}
              </p>
            )}

          </form>
        </div>

      </div>

    </div>
  )
}