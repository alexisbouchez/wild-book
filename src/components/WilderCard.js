import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";
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
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </ul>
    </article>
  );
};

export default WilderCard;
