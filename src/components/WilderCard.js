import blank_profile from "../assets/blank_profile.png";
import "./WilderCard.css";

const WilderCard = ({ name, city, skills }) => {
  console.log("skills", skills);

  return (
    <article className="card">
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => {
          return (
            <li key={skill.title}>
              {skill.title}
              <span className="votes">{skill.votes}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default WilderCard;
