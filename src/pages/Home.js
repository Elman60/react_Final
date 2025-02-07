import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Welcome to Probank</h1>
      <p>Your digital banking solution for the modern era.</p>
      <div className="hero">
        <img src="https://placehold.co/600x300?text=Probank&font=roboto" alt="Probank" />
      </div>
    </motion.div>
  );
}

export default Home;
