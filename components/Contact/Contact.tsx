import styles from "./Contact.module.scss";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__description}>
        <h1 className={styles.contact__title}>Contact me</h1>
        <span className={styles.contact__emphasis}>
          Need my skills on your next project ?
        </span>
        <p className={styles.contact__detail}>
          I am currently available to help you with your project or to answer
          any questions you may have. You can send me an email by filling out
          this form.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
