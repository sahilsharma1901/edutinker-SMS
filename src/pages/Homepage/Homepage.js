import React, { useState } from 'react';

import styles from "./Homepage.module.css";
import { Link } from 'react-router-dom';

const Homepage = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        school: "",
    });

    const inputChangeHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    return (
        <div className={styles.homepageContainer}>
            <div className={styles.infoSectionOne}>
                <h1 className={styles.heading}>Who We Are!</h1>
                <div className={styles.body}>
                    <img src="https://static.wixstatic.com/media/7ef4a0_202755c8ef6f417d92c7252089b0a439~mv2.png/v1/fill/w_189,h_189,al_c,q_85,usm_0.66_1.00_0.01/Linkdin%20Logo_1%25_noedu-07.webp" alt="Who we are"/>
                    <div className={styles.info}>
                        <h3>eduTinker</h3>
                        <p>At Edutinker, we are building a global ed-tech company targetted towards automating manual work of teachers &amp; school management, and also providing timely updates to parents to keep them updated about their child in this fast-paced environment. We plan to build a career guidance recommendation system for students based on their past behaviour and performance.</p>
                    </div>
                </div>
            </div>
            <div className={styles.infoSectionTwo}>
                <h1 className={styles.heading}>What We Are Doing!</h1>
                <div>
                    <img src="https://static.wixstatic.com/media/7ef4a0_a1844e0efbd94f3fb42ba73efbd761ab~mv2.png/v1/fill/w_1544,h_363,al_c,q_90,usm_0.66_1.00_0.01/Features.webp" alt="What are we doing"/>
                </div>
            </div>
            <div className={styles.getInTouchSection}>
                <h2>Reach out to us and get 3<br/>months of subscription free!!</h2>
                <form className={styles.formContainer}>
                    <input type="text" name="name" value={userData.name} placeholder="Your Name" onChange={inputChangeHandler} autoComplete="off"/>
                    <input type="email" name="email" value={userData.email} placeholder="Email" onChange={inputChangeHandler} autoComplete="off"/>
                    <input type="text" name="phone" value={userData.phone} placeholder="Phone" onChange={inputChangeHandler} autoComplete="off"/>
                    <input type="text" name="country" value={userData.country} placeholder="Country" onChange={inputChangeHandler} autoComplete="off"/>
                    <input type="text" name="school" value={userData.school} placeholder="School" onChange={inputChangeHandler} autoComplete="off"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <Link to="/"><img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp" alt="Linkedin"/></Link>
                    <Link to="/"><img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="Facebook"/></Link>
                    <Link to="/"><img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_48,h_49,al_c,q_85,usm_0.66_1.00_0.01/8d6893330740455c96d218258a458aa4.webp" alt="Instagram"/></Link>
                    {/*Link to be inserted!!*/}
                </div>
                <p>&copy; 2020 by Edutinker</p>
                <p>Singapore</p>
            </div>
        </div>
    );
};

export default Homepage;
