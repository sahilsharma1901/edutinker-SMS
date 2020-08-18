import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Contact.module.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const inputChangeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactCard}>
        <img
          src="https://static.wixstatic.com/media/7ef4a0_cea9d879c010402d9189e2291e8fe6a4~mv2.jpg/v1/fill/w_1223,h_913,al_c,q_85,usm_0.66_1.00_0.01/Contact%20Us.webp"
          alt="Contact Us"
        />
        <div className={styles.formArea}>
          <p>
            Feeling like contacting us? Write your message/ query here. We'll
            get back to you soon as possible.
          </p>
          <form className={styles.formContainer}>
            <input
              type="text"
              name="fname"
              value={userData.fname}
              placeholder="First Name"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <input
              type="text"
              name="lname"
              value={userData.lname}
              placeholder="Last Name"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder="Email"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <input
              type="text"
              name="phone"
              value={userData.phone}
              placeholder="Phone"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <input
              type="text"
              name="address"
              value={userData.address}
              placeholder="Address"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <input
              type="text"
              name="message"
              value={userData.message}
              placeholder="Message"
              onChange={inputChangeHandler}
              autoComplete="off"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp"
              alt="Linkedin"
            />
          </Link>
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
              alt="Facebook"
            />
          </Link>
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_48,h_49,al_c,q_85,usm_0.66_1.00_0.01/8d6893330740455c96d218258a458aa4.webp"
              alt="Instagram"
            />
          </Link>
          {/*Link to be inserted!!*/}
        </div>
        <p>&copy; 2020 by Edutinker</p>
        <p>Singapore</p>
      </div>
    </div>
  );
};

export default Contact;
