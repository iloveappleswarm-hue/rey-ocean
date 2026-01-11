import { motion } from "framer-motion";
import "./index.css";

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
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="card"
    >
      <img src={item.src} alt="" />
      <div className="caption">{item.caption}</div>
    </motion.div>
  );

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Hi Rey 💙</h1>
        <p>Sorry for the delay, Here's the website &lt;3</p>
        <motion.img
          src="rey_whale.png"
          className="whale"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* MESSAGE */}
      <section className="message">
        <p>I love you so much</p>
        <p>Thanks for being here</p>
        <p className="sign">— Sid 🐳</p>
      </section>

      {/* MEMORIES */}
      <section>
        <h2>My little princesss — Memories 📸</h2>
        <div className="card-grid">
          {memories.map((m, i) => (
            <Card key={i} item={m} />
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>My girl's achievements 🏆</h2>
        <div className="card-grid">
          {achievements.map((a, i) => (
            <Card key={i} item={a} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Made with love and whale energy 💙🐳
      </footer>
    </div>
  );
}
