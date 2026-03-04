import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="section-header" variants={itemVariants}>
                        <span className="section-badge">About Us</span>
                        <h2 className="section-title">
                            Three Decades of <span className="accent-text">Global Excellence</span>
                        </h2>
                    </motion.div>

                    <div className="about-grid">
                        <motion.div className="about-text" variants={itemVariants}>
                            <p className="lead-text">
                                Erawan Global Pte Ltd stands as a premier leader in timber trading and
                                manufacturing, with over 30 years of unwavering commitment to excellence.
                                Our journey began with a vision to bridge global markets with premium
                                timber products, and today, we've evolved into a comprehensive trading
                                powerhouse.
                            </p>
                            <p>
                                From our roots in timber trading and manufacturing, we've expanded our
                                expertise to encompass general trading of FMCG (Fast-Moving Consumer Goods)
                                and diverse commodity trading. Our extensive network spans continents,
                                enabling us to facilitate seamless trade flows between key markets
                                worldwide.
                            </p>
                            <p>
                                We specialize in container-based trading and plywood manufacturing, ensuring efficient
                                logistics and reliable delivery across our global network. Our commitment
                                to quality, integrity, and customer satisfaction has made us a trusted
                                partner for businesses seeking reliable trading solutions.
                            </p>
                        </motion.div>

                        <motion.div className="about-features" variants={itemVariants}>
                            <div className="feature-card">
                                <div className="feature-icon">🌳</div>
                                <h3>Timber Expertise</h3>
                                <p>30+ years of specialized knowledge in timber trading and manufacturing</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🗺️</div>
                                <h3>Global Network</h3>
                                <p>Worldwide operations connecting key markets across continents</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📦</div>
                                <h3>Container Solutions</h3>
                                <p>Efficient container-based trading with reliable logistics</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🤝</div>
                                <h3>Trusted Partner</h3>
                                <p>Proven track record of integrity and customer satisfaction</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About

