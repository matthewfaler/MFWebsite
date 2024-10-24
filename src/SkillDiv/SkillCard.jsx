import styles from './SkillCard.module.css';

function SkillCard({skill}) {
    return(
        <div className={styles.SkillCard}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
        </div>
    );
}
export default SkillCard