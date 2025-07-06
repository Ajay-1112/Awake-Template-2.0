import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import About from '../components/About'
import Button from '../components/ui/Custom-button'
import Pricing from '../components/Pricing'
import Services from '../components/Services'
import Why_Us from '../components/Why_us'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial';
import Portfolio from '../components/Portfolio';
import { PortfolioProvider } from '@/contexts/PortfolioContext'; // Import the PortfolioProvider

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Home = () => {
  return (
    // Wrap the entire application content with PortfolioProvider
    <PortfolioProvider>
      <div className="w-full font-Geist bg-gray-50">
        <Navbar />

        {/* Hero Section */}
        <motion.section
          id="home"
          className=" min-h-screen rounded-b-2xl flex flex-col items-center justify-center text-center px-4 pt-12  md:pb-0 lg:pt-20 "
          style={{
            background: "linear-gradient(to right, #E2F6FD 20%, #FEF7E6 80%, #FFFFFF 100%)"
          }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h1
            className="text-[55px] md:text-6xl lg:text-8xl font-semibold   mb-6 leading-tight max-w-7xl bg-gradient-to-br from-black to-gray-300 bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Turning Your Numbers into Actionable{" "}
            <span className="text-secondary-text font-medium font-instrument-serif italic ">
              Business Strategies
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl text-secondary-text  mb-8 max-w-3xl"
            variants={fadeUp}
          >
            Our personalized and data-focused approach ensures you gain clarity and confidence without being overwhelmed by the details.   </motion.p>
          <motion.div
            className="text-center md:flex gap-5 items-center"
            variants={fadeUp}
          >
            <Button
              text="Get Started"
              link="#Services"
              className="bg-green-900 hover:bg-green-700 w-40 text-white1"
            />
            <div className="md:flex gap-5 mt-6 md:mt-0 justify-center items-center space-y-3 ">
              <div className="flex mt-2 items-center justify-center">
                <img
                  className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  alt="Client 1"
                />
                <img
                  className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
                  alt="Client 2"
                />
                <img
                  className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                  src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
                  alt="Client 3"
                />
                <img
                  className="h-8 w-8 -mx-1 ring-2 ring-white rounded-full object-cover shadow-md"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80"
                  alt="Client 4"
                />
              </div>
              <div className="flex flex-col justify-center text-center">
                {/* Star Rating */}
                <div className="flex md:justify-start justify-center items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                </div>

                {/* Trust Text */}
                <p className="text-secondary-text text-sm font-medium">
                  Trusted by Hawaii’s local business community </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {[
          { id: "About", Component: About },
          { id: "Services", Component: Services },
          { id: "About_Us", Component: Why_Us },
          // { id: "Process", Component: Process_section },
          { id: "Projects", Component: Portfolio },
          { id: "Testimonial", Component: Testimonial },
          { id: "Pricing", Component: Pricing },
          { id: "Faq", Component: Faq },

          // eslint-disable-next-line no-unused-vars
        ].map(({ id, Component }) => (
          <motion.section
            key={id}
            id={id}
            className="scroll py-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Component />
          </motion.section>
        ))}

      </div>
    </PortfolioProvider>
  );
};

export default Home;
