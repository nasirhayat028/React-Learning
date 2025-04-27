import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.profileSection}>
        <div className={styles.profileImage}>
          <div className={styles.imagePlaceholder}></div>
        </div>
        <div className={styles.profileContent}>
          <h2 className={styles.name}>Nasir Hayat</h2>
          <p className={styles.bio}>
            I am a passionate developer with expertise in web development. I
            love creating beautiful and functional websites that make a
            difference.
          </p>
          <div className={styles.skills}>
            <h3>Skills</h3>
            <ul className={styles.skillsList}>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
