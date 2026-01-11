
import { motion } from "framer-motion";

export default function App() {
  const memories = [
    { src: "photo1.jpg", caption: "My favorite picture💙" },
    { src: "photo2.jpg", caption: "First picture you sent me" },
    { src: "photo3.jpg", caption: "Kuchu kuchu" },
    { src: "photo4.jpg", caption: "Mommy" },
    { src: "photo5.jpg", caption: "I love you" }
  ];

  const achievements = [
    { src: "achievement1.png", caption: "My baby won 3rd place" },
    { src: "achievement2.png", caption: "My baby won the 3rd place" },
    { src: "achievement3.png", caption: "My little champion" },
    { src: "achievement4.png", caption: "Always my #1" },
    { src: "achievement5.png", caption: "So proud of you" }
  ];

  const Card = ({ item }) => (
    <motion.div
      whileHover={{ scale: 1.12 }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
    >
      <img src={item.src} className="w-full h-full object-cover" />
      <motion.div
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-800/90 via-blue-700/70 to-transparent text-white p-5 text-sm"
      >
        {item.caption}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-cyan-200 to-blue-300 text-blue-900">


      <section className="py-24 text-center">
        <h1 className="text-6xl mb-4">Hi Rey 💙</h1>
        <p>Sorry for the delay, Here's the website &lt;3</p>
      </section>
    </div>
  );
}
