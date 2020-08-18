import React from "react";
import { Link } from "react-router-dom";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.sectionOne}>
        <h1>About Us</h1>
        <p>
          EduTinker is an innovative SaaS-based e-learning, and school
          management software focused towards building a bridge between the
          parents, teachers, and students.{" "}
        </p>
        <p>
          Gone are the days of fragmented school management modules. At
          Edutinker, we provide a simple solution to all your problems in a
          single unified collaborative platform. From admission to alumni,
          student to HR, e-classroom to GPS tracking, we have got you covered at
          all fronts. We are helping educational institutes excel by providing
          them with the most user-friendly Learning Management System,
          streamline and manage student information efficiently, and automate
          the manual work of teachers &amp; school management.
        </p>
      </div>
      <div className={styles.quote}>
        <p>
          Yes! We are everything that you need to
          <br />
          manage your educational institution.
        </p>
      </div>
      <div className={styles.sectionTwo}>
        <h1>Know Your Story</h1>
        <p>
          We know that people are hardwired to love a good story. So here we
          are, narrating you ours. The idea of EduTinker was born in 2019 when
          Akash, a serial entrepreneur, decided to take a deep dive into the
          pain points of the educators, parents, and students around him. On
          digging a little deeper into most common &amp; frequent grievances
          from them, he zeroed down on the lack of connectivity between schools
          and parents. Seeing this, he decided to form a team of other dedicated
          and like-minded entrepreneurs to give it a shape. Finally, in 2020,
          Edutinker was born.
        </p>
      </div>
      <div className={styles.sectionThree}>
        <h1>Our Team</h1>
        <p>
          EduTinker is powered by a team of dedicated and committed
          entrepreneurs who're building a vibrant and collaborative school
          community that fosters teachers and parents engagement. The team is
          working together for the betterment of the students and the society at
          large.{" "}
        </p>
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

export default About;
