import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.description}>
        This is the home page of my amazing website!
      </p>
    </div>
  );
};

export default Home;
