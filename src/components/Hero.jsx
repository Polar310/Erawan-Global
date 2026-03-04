import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero" ref={ref}>
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <motion.div
                    className="hero-pattern"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            </div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div className="hero-badge" variants={itemVariants}>
                    <span>30+ Years of Excellence</span>
                </motion.div>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    Global Timber &<br />
                    <span className="highlight">Commodity Trading</span>
                </motion.h1>

                <motion.p className="hero-subtitle" variants={itemVariants}>
                    Connecting markets worldwide with premium timber products and end-to-end
                    trading and distribution solutions.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <motion.button
                        className="btn btn-primary"
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        Get in Touch
                        <motion.span
                            className="btn-arrow"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>

                    <motion.button
                        className="btn btn-secondary"
                        onClick={() => {
                            const element = document.getElementById('services')
                            if (element) element.scrollIntoView({ behavior: 'smooth' })
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        Our Services
                    </motion.button>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    variants={itemVariants}
                >
                    <div className="stat-item">
                        <div className="stat-number">30+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">Worldwide</div>
                        <div className="stat-label">Global Reach</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">Countries Served</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    )
}

export default Hero
