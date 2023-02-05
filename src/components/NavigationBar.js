import styles from './styles/NavigationBar.module.css';
import Link from 'next/link';

export default function NavigationBar(props) {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      };
    const toggleableStyles = {
        dark: {
            'background-color': 'black',
            color: 'blue',
        },
        light: {
            'background-color': '#f2f2f2',
            color: 'yellow',
        }
    }

    return (
        <div style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles.container}>
            hello
            <button onClick={props.callBackHandleToggleDarkMode}>hello</button>
        </div>
    );
}
