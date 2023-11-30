import "./Introduction.css";
import myPicture from "../../assets/Introduction/1.png";
export default function Introduction() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="myName">Hi! I'm Morsal</h1>
        <p className="description">
          Passionate Full Stack student! multilingual English-Persian and
          Persian-English translator, ESL teacher.
        </p>
      </div>
      <img className="myImage" src={myPicture} alt="My picture" />
      <div className="topBlur" />
      <div className="bottomBlur"></div>
    </section>
  );
}
