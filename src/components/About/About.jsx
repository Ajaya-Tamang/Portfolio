import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 mb-6">
            I'm a passionate developer with a keen eye for design and a love for creating 
            seamless user experiences. With expertise in modern web technologies, 
            I transform ideas into reality through clean and efficient code.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-primary font-bold">Frontend</h3>
              <ul className="text-gray-300">
                <li>React</li>
                <li>Three.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-primary font-bold">Backend</h3>
              <ul className="text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/path-to-your-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
