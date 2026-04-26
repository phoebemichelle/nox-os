import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactApp.css'

function ContactApp() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'name is required'
    if (!form.email.trim()) {
      newErrors.email = 'email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'message is required'
    return newErrors
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
    setLoading(false)
  }

  return (
    <div className="contact-container">
      <h2 className="contact-title">say hello! ૮ ˶ᵔ ᵕ ᵔ˶ ა</h2>
      <p className="contact-subtitle">fill out the form and i'll get back to you ♡</p>

      <div className="contact-field">
        <label>name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="your name"
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="contact-field">
        <label>email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your email"
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="contact-field">
        <label>message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="what's on your mind?"
          rows={4}
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      {status === 'sent' && <p className="contact-success">message sent! i'll reply soon ♡</p>}
      {status === 'error' && <p className="contact-error">something went wrong, try again!</p>}

      <button className="contact-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? 'sending...' : 'send ♡'}
      </button>
    </div>
  )
}

export default ContactApp