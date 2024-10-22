

function SkillCard({skill}) {
    return(
        <div className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
        </div>
    );
}
export default SkillCard