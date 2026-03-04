import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Countries from './components/Countries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="App">
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Countries />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

