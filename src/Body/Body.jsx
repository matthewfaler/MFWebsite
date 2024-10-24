import styles from './Body.module.css';

const Body = ({text}) => {
    return(
        <p className={styles.Body}>{text}</p>
    );
}
export default Body