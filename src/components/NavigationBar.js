import styles from './styles/NavigationBar.module.css';
import Link from 'next/link';

export default function NavigationBar() {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <div className={styles.container}>
            <a className={styles.button} onClick={handleClick} href='#canvas'>Home</a> 
            <a className={styles.button} onClick={handleClick} href='#canvas'>About</a> 
            <a className={styles.button} onClick={handleClick} href='#canvas'>Portfolio</a> 
            <a className={styles.button} onClick={handleClick} href='#canvas'>Contact</a> 
        </div>
    );
}
