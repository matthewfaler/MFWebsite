import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.Footer}>
            <hr />
            <p>Author: Matthew Faler</p>
            <small>
                <p>Computer Scientist and Mathematician</p>
                <p><a href="https://linkedin.com/in/matthew-faler">LinkedIn</a></p>
                <p><a href="Https://github.com/matthewfaler">GitHub</a></p>
            </small>
            <br />
        </footer>
    );   
}
export default Footer