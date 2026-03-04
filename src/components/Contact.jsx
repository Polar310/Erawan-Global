import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send to an API
    const mailtoLink = `mailto:info@erawanglobal.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Website')}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACompany: ${encodeURIComponent(formData.company)}%0APhone: ${encodeURIComponent(formData.phone)}%0A%0AMessage: ${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@erawanglobal.com',
      link: 'mailto:info@erawanglobal.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      link: 'https://wa.me/6594873376',
      isWhatsApp: true
    },
    {
      icon: '🌐',
      title: 'Global Operations',
      content: 'Worldwide Trading Network',
      link: null
    },
    {
      icon: '💼',
      title: 'Business Hours',
      content: 'available 24/7',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">
              Let's <span className="accent-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Ready to explore trading opportunities? Get in touch with us
              and discover how we can facilitate your global trading needs.
            </p>
          </motion.div>

          <div className="contact-wrapper">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Contact Information</h3>
              <p className="contact-intro">
                Whether you're looking for timber products, FMCG trading, or comprehensive
                commodity solutions, we're interested. Reach out to discuss your requirements.
                interested anywhere? let us know!
              </p>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`contact-icon ${item.isWhatsApp ? 'whatsapp-icon' : ''}`}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target={item.isWhatsApp ? '_blank' : '_self'} rel={item.isWhatsApp ? 'noopener noreferrer' : ''}>{item.content}</a>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="contact-note">
                <p>
                  <strong>Container Trading:</strong> We specialize in full container load
                  solutions for efficient and cost-effective shipping across all our focus regions.
                </p>
              </div>
            </motion.div>

            <motion.div className="contact-form-wrapper" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-company">Company</label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+65 1234 5678"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Tell us about your trading needs, container requirements, or any questions you have..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="contact-submit-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Send Message
                  <motion.span
                    className="btn-arrow"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

