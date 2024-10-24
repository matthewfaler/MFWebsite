import styles from './Header.module.css';

const Header = ({text}) => {
    return(
        <h1 className={styles.Header}>{text}</h1>
    );
}
export default Header