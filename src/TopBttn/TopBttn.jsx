import styles from './TopBttn.module.css'


function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function TopBttn() {
    return (
        <button className={styles.TopBttn} onClick={ScrollToTop}>Scroll to Top</button>
    );
}
export default TopBttn