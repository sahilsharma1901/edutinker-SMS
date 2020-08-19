import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Careers.module.css";

const Careers = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    position: "",
    country: "",
  });

  const [hover, setHover] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const hoverEnterHandler = (arg) => {
    setHover({ ...hover, [arg]: true });
  };

  const hoverExitHandler = (arg) => {
    setHover({ ...hover, [arg]: false });
  };


  const inputChangeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.careerContainer}>
      <div className={styles.mainImage}>
        <img
          src="https://static.wixstatic.com/media/7ef4a0_fc293f99977e466d8d7f05e2b4d4a1bc~mv2.jpg/v1/fill/w_1226,h_696,al_c,q_85,usm_0.66_1.00_0.01/careers-02.webp"
          alt="Join our team"
        />
        <p>
          Looking to work with an upcoming global brand? Salary &amp; equity
          plus chance to work with a team of founders with a decade of
          experience in building products &amp; brands.
        </p>
      </div>
      <p className={styles.rolesHeading}>Current Openings</p>
      <div className={styles.roles}>
        <div
          className={styles.role}
          onMouseEnter={hoverEnterHandler.bind(null, "first")}
          onMouseLeave={hoverExitHandler.bind(null, "first")}
        >
          {hover.first ? (
            <div className={styles.rear}>
                <ul>
                    <li>Building a React Web Application and a React Native Application with a shared codebase.</li>
                    <li>Understanding of good UI/UX design principles.</li>
                    <li>Commitment to developing a well documented and maintainable code project.</li>
                    <li>Remotely coordinating with the backend developers and other team members.</li>
                </ul>
            </div>
          ) : (
            <div className={styles.front}>
              <img
                src="https://img.icons8.com/dusk/64/000000/source-code.png"
                alt="Frontend Development"
              />
              <p>Front End React / React Native Developer</p>
              <p className={styles.details}>Hover for details</p>
            </div>
          )}
        </div>
        <div
          className={styles.role}
          onMouseEnter={hoverEnterHandler.bind(null, "second")}
          onMouseLeave={hoverExitHandler.bind(null, "second")}
        >
          {hover.second ? (
            <div className={styles.rear}>
                <ul>
                    <li>Building a React Web Application and a React Native Application with a shared codebase.</li>
                    <li>Remotely coordinating with the backend developers and other team members to organize deliverable deadlines.</li>
                    <li>Ensuring the performance, quality and responsiveness of the applications.</li>
                    <li>Working on identifying/correcting bottlenecks and fixing bugs.</li>
                </ul>
            </div>
          ) : (
            <div className={styles.front}>
              <img
                src="https://img.icons8.com/dusk/64/000000/google-mobile.png"
                alt="Mobile Development"
              />
              <p>Mobile App Development Intern</p>
              <p className={styles.details}>Hover for details</p>
            </div>
          )}
        </div>
        <div
          className={styles.role}
          onMouseEnter={hoverEnterHandler.bind(null, "third")}
          onMouseLeave={hoverExitHandler.bind(null, "third")}
        >
          {hover.third ? (
            <div className={styles.rear}>
                <ul>
                    <li>Development of all server side logic, ensuring high performance and responsiveness to requests from the frontend.</li>
                    <li>Integrating the front-end elements built by your co-workers into the application.</li>
                    <li>Design and implementation of low-latency, high-availability and performant applications.</li>
                    <li>Integration of user-facing elements built by the front-end developers with the server side logic.</li>
                    <li>Implementation of security and data protection, Integration of data storage solutions like Redis, MySQL/MariaDB</li>
                </ul>
            </div>
          ) : (
            <div className={styles.front}>
              <img
                src="https://img.icons8.com/dusk/64/000000/web.png"
                alt="Web Development"
              />
              <p>Python Web Developer</p>
              <p className={styles.details}>Hover for details</p>
            </div>
          )}
        </div>
        <div
          className={styles.role}
          onMouseEnter={hoverEnterHandler.bind(null, "fourth")}
          onMouseLeave={hoverExitHandler.bind(null, "fourth")}
        >
          {hover.fourth ? (
            <div className={styles.rear}>
                <ul>
                    <li>Integrating the front-end elements built by your co-workers into the application.</li>
                    <li>Design and implementation of low-latency, high-availability and performant applications.</li>
                    <li>Integration of user-facing elements built by the front-end developers with the server side logic.</li>
                    <li>Implementation of security and data protection, Integration of data storage solutions like Redis, MySQL/MariaDB</li>
                </ul>
            </div>
          ) : (
            <div className={styles.front}>
              <img
                src="https://img.icons8.com/dusk/64/000000/web.png"
                alt="Web Development"
              />
              <p>Python Web Developer Intern</p>
              <p className={styles.details}>Hover for details</p>
            </div>
          )}
        </div>
        <div
          className={styles.role}
          onMouseEnter={hoverEnterHandler.bind(null, "fifth")}
          onMouseLeave={hoverExitHandler.bind(null, "fifth")}
        >
          {hover.fifth ? (
            <div className={styles.rear}>
                <ul>
                    <li>Work on strategizing, planning and executing social media content.</li>
                    <li>Collaborate closely with designers to create attention-grabbing designs that are aligned with brand-identity.</li>
                    <li>Help with data analysis and provide recommendations on channel improvements.</li>
                    <li>Schedule posts and come up with social media schedules and creative ideas for images, caption and engaging copy.</li>
                    <li>Engage with other relevant social media accounts and influencers in order to grow the following.</li>
                </ul>
            </div>
          ) : (
            <div className={styles.front}>
              <img src="https://img.icons8.com/dusk/64/000000/marketing.png" alt="Digital Marketing"/>
              <p>Digital Marketing Intern</p>
              <p className={styles.details}>Hover for details</p>
            </div>
          )}
        </div>
      </div>
      <p className={styles.formHeading}>Apply Now!</p>
      <form className={styles.applicationForm}>
        <input
          type="text"
          name="fname"
          value={userData.fname}
          placeholder="First Name"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="lname"
          value={userData.lname}
          placeholder="Last Name"
          onChange={inputChangeHandler}
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="Email"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="phone"
          value={userData.phone}
          placeholder="Phone"
          onChange={inputChangeHandler}
        />
        <select value={userData.position} onChange={inputChangeHandler}>
          <option value="" selected data-default>
            Select Position
          </option>
          <option value="Front End React / React Native Developer">
            Front End React / React Native Developer
          </option>
          <option value="Python Web Developer">Python Web Developer</option>
          <option value="Social Media / Digital Marketing Intern">
            Social Media / Digital Marketing Intern
          </option>
          <option value="Mobile App Development Intern">
            Mobile App Development Intern
          </option>
          <option value="Python Web Development Intern">
            Python Web Development Intern
          </option>
        </select>
        <input
          type="text"
          name="country"
          value={userData.country}
          placeholder="Country"
        />
        <button type="submit">Submit</button>
      </form>
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

export default Careers;
