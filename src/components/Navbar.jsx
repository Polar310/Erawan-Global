import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="nav-container">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('hero')}
                >
                    <span className="logo-text">Erawan Global</span>
                    <span className="logo-subtitle">Pte Ltd</span>
                </motion.div>

                <div className="nav-links">
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('services')}>Services</button>
                    <button onClick={() => scrollToSection('countries')}>Global Reach</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </div>

                <motion.button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                </motion.button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button onClick={() => scrollToSection('about')}>About</button>
                        <button onClick={() => scrollToSection('services')}>Services</button>
                        <button onClick={() => scrollToSection('countries')}>Global Reach</button>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar

