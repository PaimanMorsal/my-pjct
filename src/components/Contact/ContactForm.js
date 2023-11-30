import "./ContactForm.css";
export const ContactForm = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>In case you have any question..</h1>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="email"></input>
        <textarea rows={3} cols={30} placeholder="Your Message..."></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};
