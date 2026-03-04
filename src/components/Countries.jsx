import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Countries.css'

const Countries = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const regions = [
        {
            name: 'Australia',
            description: 'Strategic sourcing and distribution hub for premium commodities',
            flag: '🇦🇺',
            focus: 'Export & Import'
        },
        {
            name: 'Africa',
            description: 'Comprehensive coverage across Rwanda, Cameroon, Gabon, East & West Africa, and South Africa',
            flag: '🌍',
            focus: 'Premium plywood + core veneer manufacturing, and commodity trading'
        },
        {
            name: 'South Asia',
            description: 'Major trading partner for diverse commodities and FMCG products',
            flag: '🇮🇳🇧🇩🇱🇰',
            focus: 'Bilateral Trade'
        },
        {
            name: 'South East Asia',
            description: 'Major trading partner for diverse commodities and FMCG products',
            flag: '🇸🇬 🇻🇳 🇹🇭 🇮🇩',
            focus: 'Bilateral Trade'
        },
        {
            name: 'Middle East',
            description: 'Key market for container trading and cross-continental logistics',
            flag: '🌐',
            focus: 'Trade Facilitation'
        },
        {
            name: 'USA',
            description: 'Strategic sourcing and trading of timber',
            flag: '🇺🇸',
            focus: 'Export & Import'
        },
    ]

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
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    return (
        <section id="countries" className="countries" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="section-header" variants={itemVariants}>
                        <span className="section-badge">Global Reach</span>
                        <h2 className="section-title">
                            Connecting <span className="accent-text">Key Markets</span> Worldwide
                        </h2>
                        <p className="section-subtitle">
                            Our strategic focus regions enable seamless trade flows between
                            major markets, facilitating export and import operations across continents.
                        </p>
                    </motion.div>

                    <div className="countries-grid">
                        {regions.map((region, index) => (
                            <motion.div
                                key={index}
                                className="country-card"
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className="country-flag">{region.flag}</div>
                                <h3>{region.name}</h3>
                                <p>{region.description}</p>
                                <div className="country-focus">
                                    <span>{region.focus}</span>
                                </div>
                                <motion.div
                                    className="country-glow"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="worldwide-note"
                        variants={itemVariants}
                    >
                        <div className="worldwide-icon">🗺️</div>
                        <div>
                            <h4>Worldwide Operations</h4>
                            <p>
                                While we focus on key strategic regions, our operations extend globally.
                                We facilitate trade between various markets and are always scouting for any new future ventures.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Countries

