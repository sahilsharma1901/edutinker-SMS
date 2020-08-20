import React, { useState } from "react";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteIcon from "@material-ui/icons/Favorite";

import styles from "./Blog.module.css";

const Blog = () => {
  const [blog, setBlog] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [allBlogs] = useState([
    {
      title: "Emerging Jobs 2020 - and the skills they require",
      image:
        "https://static.wixstatic.com/media/10b7ce_7a901859e31e473db2b102f806a12387~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01/10b7ce_7a901859e31e473db2b102f806a12387~mv2.webp",
      post:
        "As India leads the way in global tech sector, the business opportunities here are ranked as the highest...",
    },
    {
      title: "The Master Plan - NEP 2020",
      image:
        "https://static.wixstatic.com/media/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.png/v1/fill/w_720,h_480,al_c,lg_1,q_90/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.webp",
      post:
        "A Public-Private partnership would ensure quick implementation of the new education policy provided that the state government too come around...",
    },
    {
      title: "How is education in COVID-19",
      image:
        "https://static.wixstatic.com/media/10b7ce_d2363a445a3d4f48acb127d2007ad22d~mv2.png/v1/fill/w_720,h_480,al_c,lg_1,q_90/10b7ce_d2363a445a3d4f48acb127d2007ad22d~mv2.webp",
      post:
        "Education in COVID has been tough for all the students, especially for those who belong to poor families...",
    },
    {
      title: "Emerging Jobs 2020 - and the skills they require",
      image:
        "https://static.wixstatic.com/media/10b7ce_7a901859e31e473db2b102f806a12387~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01/10b7ce_7a901859e31e473db2b102f806a12387~mv2.webp",
      post:
        "As India leads the way in global tech sector, the business opportunities here are ranked as the highest...",
    },
    {
      title: "The Master Plan - NEP 2020",
      image:
        "https://static.wixstatic.com/media/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.png/v1/fill/w_720,h_480,al_c,lg_1,q_90/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.webp",
      post:
        "A Public-Private partnership would ensure quick implementation of the new education policy provided that the state government too come around...",
    },
  ]);

  const [trendingBlogs] = useState([
    {
      title: "Emerging Jobs 2020 - and the skills they require",
      image:
        "https://static.wixstatic.com/media/10b7ce_7a901859e31e473db2b102f806a12387~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01/10b7ce_7a901859e31e473db2b102f806a12387~mv2.webp",
      post:
        "As India leads the way in global tech sector, the business opportunities here are ranked as the highest...",
    },
  ]);
  const [recentBlogs] = useState([
    {
      title: "Emerging Jobs 2020 - and the skills they require",
      image:
        "https://static.wixstatic.com/media/10b7ce_7a901859e31e473db2b102f806a12387~mv2.png/v1/fill/w_925,h_694,al_c,q_90,usm_0.66_1.00_0.01/10b7ce_7a901859e31e473db2b102f806a12387~mv2.webp",
      post:
        "As India leads the way in global tech sector, the business opportunities here are ranked as the highest...",
    },
    {
      title: "The Master Plan - NEP 2020",
      image:
        "https://static.wixstatic.com/media/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.png/v1/fill/w_720,h_480,al_c,lg_1,q_90/10b7ce_ba9003cd7c444da8889f00c36efd5ee0~mv2.webp",
      post:
        "A Public-Private partnership would ensure quick implementation of the new education policy provided that the state government too come around...",
    },
    {
      title: "How is education in COVID-19",
      image:
        "https://static.wixstatic.com/media/10b7ce_d2363a445a3d4f48acb127d2007ad22d~mv2.png/v1/fill/w_720,h_480,al_c,lg_1,q_90/10b7ce_d2363a445a3d4f48acb127d2007ad22d~mv2.webp",
      post:
        "Education in COVID has been tough for all the students, especially for those who belong to poor families...",
    },
  ]);

  const [blogsToDisplay, setBlogsToDisplay] = useState(allBlogs);

  const blogSearchHandler = (event) => {
    setBlog(event.target.value);
  };

  const blogsDisplayHandler = (blogs) => {
    setBlogsToDisplay(blogs);
  };

  return (
    <div className={styles.blogsContainer}>
      <nav className={styles.blogsNavigation}>
        <div className={styles.navigationButtons}>
          <button
            onClick={blogsDisplayHandler.bind(null, allBlogs)}
            style={{ color: allBlogs === blogsToDisplay && "#313cf5" }}
          >
            All Posts
          </button>
          <button
            onClick={blogsDisplayHandler.bind(null, trendingBlogs)}
            style={{ color: trendingBlogs === blogsToDisplay && "#313cf5" }}
          >
            Trending
          </button>
          <button
            onClick={blogsDisplayHandler.bind(null, recentBlogs)}
            style={{ color: recentBlogs === blogsToDisplay && "#313cf5" }}
          >
            Recent
          </button>
        </div>
        {showSearch ? (
          <div className={styles.searchBox}>
            <SearchIcon
              style={{
                verticalAlign: "middle",
                margin: "0 .5rem",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              name="blog"
              value={blog}
              onChange={blogSearchHandler}
              placeholder="Search Posts"
            />
            <ClearIcon
              onClick={() => setShowSearch(false)}
              style={{
                verticalAlign: "middle",
                margin: "0 .5rem",
                cursor: "pointer",
              }}
            />
          </div>
        ) : (
          <SearchIcon
            onClick={() => setShowSearch(true)}
            style={{
              verticalAlign: "middle",
              margin: "0 .5rem",
              cursor: "pointer",
            }}
          />
        )}
      </nav>
      <div className={styles.blogs}>
        {blogsToDisplay.map((blog, index) => {
          return (
            <div className={styles.blogContainer} key={index}>
              <div className={styles.blogImage}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.blogInfo}>
                <div className={styles.blogInfoHeader}>
                  <p>
                    Author: <strong>EduTinker</strong>
                  </p>
                  <p>3 mins</p>
                </div>
                <div className={styles.blogBody}>
                  <h1>{blog.title}</h1>
                  <p>{blog.post}</p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.blogStatus}>
                  <p>19 views</p>
                  <FavoriteIcon
                    style={{
                      verticalAlign: "middle",
                      margin: "0 .5rem",
                      cursor: "pointer",
                      color: "red"
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
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

export default Blog;
