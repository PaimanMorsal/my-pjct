import "./Contact.css";
export const Contact = () => {
  const data = [
    {
      id: 1,
      href: "mailto:morsalpaiman@gmail.com",
      src: require("../../assets/contact/email.png"),
      alt: "Email icon",
    },

    {
      id: 2,
      href: "https://github.com/PaimanMorsal",
      src: require("../../assets/contact/github.png"),
      alt: "Linkedin icon",
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/morsal-paiman-b11a6a217",
      src: require("../../assets/contact/linkedin.png"),
      alt: "Github icon",
    },
  ];

  return (
    <footer id="contact" className="footer">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        {data.map((data) => {
          return (
            <li className="link">
              <a id={data.id} href={data.href}>
                <img src={data.src} alt={data.alt}></img>
              </a>
            </li>
          );
        })}
      </ul>
      <iframe
        src="https://maps.google.com/maps?q=Herat&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>

      <p class="cp-text">© Copyright 2023, All rights reserved.</p>
    </footer>
  );
};
