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
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input    name="name"    placeholder="Name"    value={form.name}    onChange={handleChange} required />
        <input    name="email"   placeholder="Email"   value={form.email}   onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}