import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={styles.textarea}
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
