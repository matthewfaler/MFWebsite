import SkillCard from "./SkillCard";
import skills from "./Skills.json";

const SkillDiv = () => {
    return(
        <div className="card-div">
            {skills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    );
}
export default SkillDiv