import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        ></link>
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div class="row">
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/inayah.30321d21.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"https://dev.inayah.net/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      Inayah
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Sale Care Services
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/equation.f2542c44.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"https://equ.const-tech.biz/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      Education
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Education Courses membership System
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/Screenshot 2021-04-29 054653.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"http://ycat-y.net/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      Ycat
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Government teacher appointment reservation site
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/Screenshot 2021-04-29 054909.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"http://ahm.pw/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      Coffee
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Coffee and Drinks Sale Services Website
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/Screenshot 2021-04-29 055429.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"http://photoeventsdmm.com/gallery/images"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      photoeventsdmm
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Photo events website
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div class="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/Screenshot 2021-04-29 055957.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"https://roomacake.com/no/public/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      Roomacake
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Cake shop website
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-3">
            <Fade bottom duration={2000} distance="20px">
              <div className="cert-card" style={{ width: "100%" }}>
                <div className="content">
                  <div className="content-overlay"></div>
                  <div
                    className="cert-header"
                    style={{ backgroundColor: "#4a4fb5" }}
                  >
                    <img
                      className="logo_img"
                      src={require(`../../assests/images/Screenshot 2021-05-06 143606.png`)}
                      alt="project"
                      style={{ width: "100%", height: "250px" }}
                    />
                  </div>
                </div>
                <div className="cert-body">
                  <a
                    href={"https://roomacake.com/no/public/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <h2
                      className="cert-body-title"
                      style={{ color: theme.text }}
                    >
                      HorseTraining
                    </h2>
                  </a>
                  <h3
                    className="cert-body-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Horse Training website for sell training services
                  </h3>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <h2 class="text-center col-md-12">And More .. Missing Sources</h2>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
