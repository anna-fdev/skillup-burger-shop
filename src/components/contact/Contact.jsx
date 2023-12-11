import React from "react";
import burger2 from "../../assets/burger2.png";
import Popup from "reactjs-popup";

const Contact = () => {
  return (
    <div className="contact">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Feedback"
        ></textarea>
        <Popup trigger={<button>Send</button>}>
          <div
            style={{
              color: "red",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Thank you for contacting us! We will get back to you shortly!
          </div>
        </Popup>
      </form>
      <div className="formBorder">
        <div>
          <img src={burger2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
