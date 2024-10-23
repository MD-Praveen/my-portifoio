import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { images } from "../../images";
import styles from "./Home.module.css"; // Adjusted to import CSS module

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const Home = () => {
  const { text: tagText } = useTypewriter({
    words: ["Fullstack Developer", "ReactJS Developer", "MERN STACK"],
    typeSpeed: 100,
    loop: false,
  });

  return (
    <div className={`${styles.header} ${styles.app__flex}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__header_info}
      >
        <div className={styles.app__header_badge}>
          <div className={`${styles.badge_cmp} ${styles.app__flex}`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <p className="head-text">Praveen</p>
            </div>
          </div>
          <div className={`${styles.tag_cmp} ${styles.app__flex}`}>
            <p className="p-text">{tagText}</p>
            <Cursor cursorStyle="|" />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__header_img}
      >
        <motion.img
          src={images.programmerImg}
          alt="profile_bg"
          whileInView={{ y: [-100, 0] }}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.bgCircle}
          alt="profile-circle"
          className={styles.overlay_circle}
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__header_circles}
      >
        {[images.jsImg, images.reactImg, images.nodeImg].map((circle, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1}
            className={`${styles.circle_cmp} ${styles.app__flex}`}
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
