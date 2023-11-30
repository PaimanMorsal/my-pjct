import myPicture from "../../assets/about/mee.png";
import teacherIcon from "../../assets/about/teacher.png";
import translatorIcon from "../../assets/about/translator.png";
import windowIcon from "../../assets/about/windowIcon.png";
import "./About.css";
export const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img className="about-img" src={myPicture} alt="Me"></img>
        <ul className="about-items ">
          <li className="about-item">
            <img src={windowIcon} alt="Window Icon"></img>
            <div className="about-items-text">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={teacherIcon} alt="Server Icon" className="shad"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="about-items-text">
              <h3>ESL Teacher</h3>
              <p>
                I have 5 years of experience in teaching English languase as a
                second language to the ESL students.
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={translatorIcon} alt="Server Icon" className="shad"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="about-items-text">
              <h3>English/Persian translator</h3>
              <p>
                I have experience of translating English-Persian and
                Persian-English documents and websites for more than 2 years.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
