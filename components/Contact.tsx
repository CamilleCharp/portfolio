import { ContactProps } from "@/types";
import styles from "./Contact.module.scss";
import { ContactForm } from "./Contact/ContactForm";
import { SectionDetail } from "./Text/SectionDetail";
import { SectionEmphasis } from "./Text/SectionEmphasis";
import { SectionTitle } from "./Text/SectionTitle";

export function Contact({ content }: ContactProps) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__description}>
        <SectionTitle>{content.title}</SectionTitle>
        <SectionEmphasis>{content.emphasis}</SectionEmphasis>
        <SectionDetail>{content.detail}</SectionDetail>
      </div>
      <ContactForm />
    </section>
  );
}
