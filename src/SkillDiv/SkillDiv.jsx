import SkillCard from "./SkillCard";
import skills from "./Skills.json";
import styles from './SkillDiv.module.css';

function SkillDiv() {
    return(
        <div className={styles.SkillDiv}>
            {skills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    );
}
export default SkillDiv