import React from "react";
import "./App.css";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import Achievement from "./assets/achievement.svg";
import Team from "./components/Team";

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
          <div class="sc-iqAclL jwutLH">
            <a
              href="https://t.me/mgarciap"
              target="_blank"
              class="sc-crzoAE DykGo"
            >
              <svg
                class="sc-dlnjwi dJXsSm telegram undefined"
                fill="none"
                height="28"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  d="M14 28C21.7338 28 28 21.7338 28 14C28 6.26617 21.7338 0 14 0C6.26617 0 0 6.26617 0 14C0 21.7338 6.26617 28 14 28ZM6.40617 13.6967L19.9045 8.49217C20.531 8.26583 21.0782 8.645 20.8752 9.59233L20.8763 9.59117L18.578 20.419C18.4077 21.1867 17.9515 21.3733 17.3133 21.0117L13.8133 18.4322L12.1252 20.0585C11.9385 20.2452 11.781 20.4027 11.4193 20.4027L11.6678 16.8408L18.1545 10.9807C18.4368 10.7322 18.0915 10.5922 17.7193 10.8395L9.70317 15.8865L6.2475 14.8085C5.49733 14.5705 5.481 14.0583 6.40617 13.6967Z"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/BootNodeDev"
              target="_blank"
              class="sc-crzoAE DykGo"
            >
              <svg
                class="sc-bdnxRM jvCTkj github undefined"
                fill="none"
                height="28"
                viewBox="0 0 1024 1024"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  fill-rule="evenodd"
                  transform="scale(64)"
                ></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/bootnodedev"
              target="_blank"
              class="sc-crzoAE DykGo"
            >
              <svg
                class="sc-hKFxyN kksiKu twitter undefined"
                fill="none"
                height="28"
                viewBox="0 0 27 28"
                width="27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  d="M13.5 0C6.0453 0 0 6.2692 0 14C0 21.7308 6.0453 28 13.5 28C20.9547 28 27 21.7308 27 14C27 6.2692 20.9547 0 13.5 0ZM19.6639 10.9157C19.6699 11.0535 19.6728 11.1919 19.6728 11.331C19.6728 15.5772 16.5561 20.4736 10.8565 20.4738H10.8567H10.8565C9.10657 20.4738 7.47819 19.9419 6.10689 19.0304C6.34934 19.0601 6.59612 19.0748 6.84599 19.0748C8.29784 19.0748 9.63391 18.5613 10.6946 17.6993C9.3381 17.6732 8.19443 16.7442 7.79974 15.4674C7.98864 15.505 8.18289 15.5255 8.38209 15.5255C8.66492 15.5255 8.93889 15.486 9.19926 15.4123C7.78141 15.1179 6.71333 13.8184 6.71333 12.2624C6.71333 12.2479 6.71333 12.2348 6.71375 12.2214C7.13129 12.4621 7.60879 12.607 8.11718 12.6232C7.28517 12.0475 6.73826 11.0633 6.73826 9.94843C6.73826 9.35968 6.89172 8.80811 7.15787 8.33322C8.68593 10.2776 10.9696 11.5564 13.5449 11.6907C13.4918 11.4553 13.4644 11.2101 13.4644 10.958C13.4644 9.18408 14.8521 7.7449 16.5633 7.7449C17.4547 7.7449 18.2597 8.13562 18.8251 8.76025C19.5311 8.61584 20.194 8.34839 20.7928 7.98032C20.5611 8.73035 20.07 9.35968 19.4301 9.75766C20.057 9.6799 20.6544 9.50751 21.2095 9.25159C20.7949 9.89609 20.269 10.4622 19.6639 10.9157Z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/bootnode-dev/"
              target="_blank"
              class="sc-crzoAE DykGo"
            >
              <svg
                class="sc-gtsrHT gfuSqG linkedIn undefined"
                fill="none"
                height="28"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill"
                  d="M14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C21.7308 28 28 21.7308 28 14C28 6.2692 21.7308 0 14 0ZM9.93176 21.1641H6.52213V10.9061H9.93176V21.1641ZM8.22705 9.50537H8.20483C7.06067 9.50537 6.32068 8.71774 6.32068 7.73337C6.32068 6.72678 7.08331 5.96094 8.24969 5.96094C9.41608 5.96094 10.1339 6.72678 10.1561 7.73337C10.1561 8.71774 9.41608 9.50537 8.22705 9.50537ZM22.2262 21.1641H18.817V15.6763C18.817 14.2971 18.3233 13.3566 17.0896 13.3566C16.1478 13.3566 15.5868 13.991 15.3403 14.6035C15.2501 14.8227 15.2281 15.129 15.2281 15.4355V21.1641H11.8187C11.8187 21.1641 11.8633 11.8685 11.8187 10.9061H15.2281V12.3585C15.6812 11.6595 16.4919 10.6653 18.3009 10.6653C20.5441 10.6653 22.2262 12.1314 22.2262 15.2822V21.1641Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
