import { Skills } from "./Skills";
import { History } from "./History";
import "./Experience.css";
import classNames from "classnames";
export const Experience = () => {
  return (
    <section className="exp-container" id="experience">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-content">
        <ul className="exp-history">
          {History.map((historyItem, id) => {
            return (
              <li key={id} className="exp-historyItem">
                <img src={historyItem.imageSrc} alt={historyItem.place}></img>
                <div className="exp-historyItemDetails">
                  <h3></h3>
                  <p>{`${historyItem.role},${historyItem.organisation}`}</p>
                  <ul>
                    {historyItem.experience.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="exp-skills">
          <h2 className="exp-title">Skills</h2>
          {Skills.map((skill, id) => {
            const classes = classNames("skills", "glow", skill.title);
            return (
              <div className="exp-skill" key={id} id="Skills">
                <div className="exp-skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title}></img>
                </div>
                <p>{skill.title} </p>
                <div className={classes}>{skill.percentage}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
