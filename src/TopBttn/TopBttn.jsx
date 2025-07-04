import { useState, useEffect } from 'react';
import styles from './TopBttn.module.css';


function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function TopBttn() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <button className={`${styles.TopBttn} ${isVisible ? styles.visible : styles.hidden}`} onClick={ScrollToTop}>Scroll to Top</button>
    );
}
export default TopBttn