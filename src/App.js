import React from "react";
import "./App.css";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import Achievement from "./assets/achievement.svg";
import Team from "./components/Team";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />

        <section id="home" className="home">
          <h1>SnowBlock</h1>
          <p className="homeP">
            We are web3 builders that accelerate the development and adoption of
            decentralized infrastructure, protocols, and applications.
          </p>
          <p className="home2P">
            Our mission is to build the next generation of financial
            infrastructure, culture, and human organization alongside the
            project's founders.
          </p>
        </section>

        <section id="why-us" className="whySection">
          <div className="whySec">
            <div className="whySecWrap">
              <div className="whySecDiv">
                <h1>Why Us?</h1>
                <div className="pWrap">
                  <p>
                    We apply a radical new approach. We are <b>Builders</b> and{" "}
                    <b>Investors</b> contributing engineering and financial
                    capital into carefully selected projects, generating an
                    unprecedented alignment of interests and incentives.
                  </p>
                  <p>
                    Our team has contributed to the most important projects in
                    the ecosystem granting us access to their technoltogy
                    (composability, extensibility, customization), teams,
                    governance, and resources.
                  </p>
                  <img src={Achievement} alt="" />
                </div>
              </div>
            </div>
          </div>
          <svg
            fill="none"
            viewBox="0 0 171 385"
            xmlns="http://www.w3.org/2000/svg"
            className="leftDesign"
          >
            <g opacity="0.4">
              <path
                d="M124.405 123.483C121.535 140.315 108.91 157.91 88.3727 175.344C67.8392 192.774 39.4638 209.982 5.25077 226.007C-63.1702 258.055 -154.825 285.32 -253.486 300.188C-352.148 315.056 -439.094 314.705 -499.908 302.133C-530.317 295.846 -554.167 286.508 -569.683 274.511C-585.203 262.511 -592.336 247.893 -589.466 231.061C-586.597 214.23 -573.972 196.634 -553.434 179.201C-532.901 161.77 -504.525 144.563 -470.312 128.538C-401.891 96.4896 -310.237 69.2242 -211.576 54.3563C-112.914 39.4883 -25.9679 39.8393 34.846 52.412C65.2552 58.6988 89.105 68.0364 104.622 80.034C120.141 92.034 127.274 106.652 124.405 123.483Z"
                stroke="#fff"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M148.674 153.894C145.804 170.725 133.18 188.321 112.642 205.754C92.1084 223.185 63.7329 240.392 29.5199 256.417C-38.9011 288.465 -130.555 315.731 -229.217 330.599C-327.878 345.467 -414.825 345.116 -475.639 332.543C-506.048 326.256 -529.898 316.919 -545.414 304.921C-560.934 292.921 -568.067 278.303 -565.197 261.472C-562.328 244.64 -549.703 227.045 -529.165 209.611C-508.632 192.181 -480.256 174.973 -446.043 158.948C-377.622 126.9 -285.968 99.6346 -187.306 84.7667C-88.6449 69.8987 -1.69871 70.2497 59.1152 82.8224C89.5243 89.1092 113.374 98.4468 128.891 110.444C144.41 122.444 151.543 137.062 148.674 153.894Z"
                stroke="#fff"
                stroke-opacity="0.7"
              ></path>
            </g>
          </svg>
          <svg
            fill="none"
            viewBox="0 0 90 385"
            xmlns="http://www.w3.org/2000/svg"
            className="rightDesign"
          >
            <g opacity="0.4">
              <path
                d="M735.405 123.483C732.535 140.315 719.91 157.91 699.373 175.344C678.839 192.774 650.464 209.982 616.251 226.007C547.83 258.055 456.175 285.32 357.514 300.188C258.852 315.056 171.906 314.705 111.092 302.133C80.6831 295.846 56.8333 286.508 41.3167 274.511C25.7971 262.511 18.6642 247.893 21.5337 231.061C24.4033 214.23 37.0279 196.634 57.5656 179.201C78.0991 161.77 106.475 144.563 140.688 128.538C209.109 96.4896 300.763 69.2242 399.424 54.3563C498.086 39.4883 585.032 39.8393 645.846 52.412C676.255 58.6988 700.105 68.0364 715.622 80.034C731.141 92.034 738.274 106.652 735.405 123.483Z"
                stroke="#fff"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M759.674 153.894C756.804 170.725 744.18 188.321 723.642 205.754C703.108 223.185 674.733 240.392 640.52 256.417C572.099 288.465 480.445 315.731 381.783 330.599C283.122 345.467 196.175 345.116 135.361 332.543C104.952 326.256 81.1025 316.919 65.5859 304.921C50.0662 292.921 42.9334 278.303 45.8029 261.472C48.6724 244.64 61.2971 227.045 81.8348 209.611C102.368 192.181 130.744 174.973 164.957 158.948C233.378 126.9 325.032 99.6346 423.694 84.7667C522.355 69.8987 609.301 70.2497 670.115 82.8224C700.524 89.1092 724.374 98.4468 739.891 110.444C755.41 122.444 762.543 137.062 759.674 153.894Z"
                stroke="#fff"
                stroke-opacity="0.7"
              ></path>
            </g>
          </svg>
        </section>

        <WhatWeDo />
        <Team />
      </div>

      <footer id="siteFooter" class="sc-fujyAs bhdahu">
        <div class="sc-eCApnc sc-pNWdM jwkYt gaZeDl">
          <span class="sc-jrsJWt qQwlX"></span>
          <p class="sc-jSFjdj sc-kEqXSa gFpvDX kkiPcI">
            Copyright © 2022 • SnowBlock.dev • All Rights Reserved
          </p>
          <br />
          <a href="#">
            <FaDiscord size={25} />
          </a>
          <a href="#">
            <FaTwitter size={25} style={{ marginLeft: 25 }} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
