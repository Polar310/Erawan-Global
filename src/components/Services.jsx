import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    const services = [
        {
            icon: '🪵',
            title: 'Timber Trading & Manufacturing',
            description: 'Premium timber products sourced from sustainable forests worldwide. Our 30+ years of expertise ensures quality and reliability in every shipment.',
            color: '#1a472a'
        },
        {
            icon: '🛒',
            title: 'FMCG Trading',
            description: 'Comprehensive Fast-Moving Consumer Goods trading solutions. We connect suppliers and buyers across global markets with efficient logistics.',
            color: '#2d5a3d'
        },
        {
            icon: '🌾',
            title: 'Commodity Trading',
            description: 'Diverse commodity trading services including agricultural products, raw materials, and essential goods. Full container load solutions available.',
            color: '#1a472a'
        },
        {
            icon: '📦',
            title: 'Container Logistics',
            description: 'End-to-end container-based trading solutions. We handle everything from sourcing to delivery, ensuring seamless trade operations.',
            color: '#2d5a3d'
        },
        {
            icon: '🌐',
            title: 'Global Sourcing',
            description: 'Extensive network enabling us to source products from key markets worldwide. We specialize in cross-continental trade facilitation.',
            color: '#1a472a'
        },
        {
            icon: '🤝',
            title: 'Trade Facilitation',
            description: 'Connecting exporters and importers across Australia, Africa, India, and the Middle East. We bridge markets and create opportunities.',
            color: '#2d5a3d'
        }
    ]

    return (
        <section id="services" className="services" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="section-header" variants={itemVariants}>
                        <span className="section-badge">Our Services</span>
                        <h2 className="section-title">
                            Comprehensive <span className="accent-text">Trading Solutions</span>
                        </h2>
                        <p className="section-subtitle">
                            From timber to commodities, we provide end-to-end trading services
                            with global reach and local expertise.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">{service.icon}</div>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <motion.div
                                    className="service-hover-effect"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services

