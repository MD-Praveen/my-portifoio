import React from 'react';
import styles from './Home.module.css';

// import SocialLinks from '../../Components/Socail-Links/SocialLinks';

import programmerImg from '../../Assets/Images/programmer.svg';
import jsImg from '../../Assets/Images/js.webp';
import reactImg from '../../Assets/Images/react.png';
import nodeImg from '../../Assets/Images/node.png';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
    const skillsArr = ["REACTJS developer", "MERN stack developer", "freelancer", "designer", "engineer"];
return (
    <div className={styles.homeContainer}>
      <div className={styles.socialIcons}>
        {/* <SocialLinks /> */}
      </div>
      <div className={styles.home}>
        <div>
          <section className={styles.nameBox}>
            <span className={styles.hi}>👋</span>
            <p className={styles.name}>
              <span>Hello, I am</span>
              <h2>Sri Hari Jagan</h2>
            </p>
          </section>

          <section className={styles.flooatingName}>
            <span style={{ direction: 'rtl', textAlign: 'right' }}>
                <ReactTypingEffect
                    text={skillsArr}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={1500}
                    typingDelay={500}
                    cursor= " "
                />
                <span className={styles.typingCursor}  />
            </span>
          </section>
        </div>

        <div className={styles.programmer}>
          <img src={programmerImg} alt="programmer" />
        </div>

        <div className={styles.iconsContainer}>
          <div className={styles.icons}>
            <span className={styles.js}>
              <img src={jsImg} alt="JavaScript" className={styles.iconImage} />
            </span>
            <span className={styles.react}>
              <img src={reactImg} alt="React" className={styles.iconImage} />
            </span>
            <span className={styles.node}>
              <img src={nodeImg} alt="Node.js" className={styles.iconImage} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
