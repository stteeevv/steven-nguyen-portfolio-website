import styles from '@/components/styles/Contact.module.css';


export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.textTitle}>Contact</h1>
            <div className={styles.textContainer}>
                <span className={styles.text}>You can contact me the quickest through email at </span><a className={styles.link} href="mailto:khoastevennguyen@gmail.com">khoastevennguyen@gmail.com<br></br></a>
                <span className={styles.text}>LinkedIn: </span><a className={styles.link} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stevenknguyen/">https://www.linkedin.com/in/stevenknguyen/<br/></a>
                <span className={styles.text}>Github: </span><a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/stteeevv">https://github.com/stteeevv</a>
            </div>
        </div>

    );
}