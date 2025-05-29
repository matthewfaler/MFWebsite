import styles from './TopBttn.module.css'

function TopBttn() {

    function ScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <button className={styles.TopBttn} onclick="ScrollToTop()">Scroll to Top</button>
    );
}