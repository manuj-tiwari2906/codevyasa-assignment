import React from "react";
import "../App.css";
import Navbar from "../common/navbar";
import dots from "../icons/dots.png";
import furniture1 from "../images/furniture.jpeg";
import furniture2 from "../images/furniture-2.jpeg";
import furniture3 from "../images/furniture-3.jpeg";
import furniture4 from "../images/furniture-4.jpeg";
import downArrow from "../icons/down-white-arrow.svg";
import company1 from "../images/company1.svg";
import company2 from "../images/company2.svg";
import company3 from "../images/company3.svg";
import company4 from "../images/company4.svg";
import company5 from "../images/company5.svg";
import fireIcon from "../images/fire-icon.png";
import AboutUs1 from "../images/about-us-1.jpg";
import AboutUs2 from "../images/about-us-2.jpg";
import AboutUs3 from "../images/about-us-3.jpg";
import AboutUs4 from "../images/about-us-4.webp";
import Footer from "../common/footer";
import FavIcon from "../images/fav-icon.svg";
import ManThinking from "../images/manthinking.png";
import Chair1 from '../images/chair-1.png'
import Chair2 from '../images/chair2.png'
import Sofa1 from '../images/sofa-1.png'
import Sofa2 from '../images/sofa-2.png'
import Sofa3 from '../images/sofa-3.png'
import Bed1 from '../images/bed-1.png'
import Bed2 from '../images/bed-2.png'
import Lamp1 from '../images/lamp-1.png'

const Home = () => {
  return (
    <div className="home-box">
      <Navbar />
      <div className="home-container">
        <div className="upper-section">
          <div className="blur-section">
            <img className="dots-image" src={dots} />
            <div className="glass-box">
              <h1>We Help You Make Modern Interior</h1>
              <div className="heading-info">
                We will help you ton make an elegant and luxurious interior
                designer by professional interior designer
              </div>
            </div>
          </div>
          <div className="carousel-container">
            <div
              id="carouselExampleControlsNoTouching"
              class="vertical carousel slide"
              data-bs-touch="true"
              data-bs-interval="3000"
              data-bs-pause="hover"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={furniture1}
                    class="d-block w-100 carousel-images"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={furniture2}
                    class="d-block w-100 carousel-images"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={furniture3}
                    class="d-block w-100 carousel-images"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={furniture4}
                    class="d-block w-100 carousel-images"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
              <div className="down-arrow-box">
                <img src={downArrow} />
              </div>
            </div>
          </div>
          <div className="arrow-container"></div>
        </div>
        <div className="parteners-container">
          <div className="company-heading">TRUSTED BY OVER 1K + COMPANIES</div>
          <div className="companies-container">
            <img className="company-logo" src={company1} />
            <img className="company-logo" src={company2} />
            <img className="company-logo" src={company3} />
            <img className="company-logo" src={company4} />
            <img className="company-logo" src={company5} />
          </div>
        </div>
        <div className="hot-deals-container">
          <div className="hot-deals-box">
            <div className="hot-and-fire">
              <h1>Hot</h1>
              <img src={fireIcon} />
            </div>
            <h1 className="deals">deals for you</h1>
            <div className="small-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <img className="container-icon" />
            <div className="bold-heading">1.5% Cashback</div>
            <div className="small-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <img className="container-icon" />
            <div className="bold-heading">30 day terms</div>
            <div className="small-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <img className="container-icon" />
            <div className="bold-heading">Save Money</div>
            <div className="small-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
        </div>
        <div className="about-us-section">
          <div className="heading-and-button">
            <div className="heading-and-info">
              <h1 className="heading">About Us</h1>
              <div className="small-text">
                <div>At bensik consultancy, we take pride in our values</div>
                <div>- service, integrity and existence.</div>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="about-info-section">
            <div className="left-section">
              <div className="info-box">
                <div className="serial-no">1.</div>
                <div className="heading-bold">Who We Are</div>
                <div className="small-text">
                  You get a 2-week free trial to kick the smarty time. We want
                  you to
                </div>
              </div>
              <div className="info-box">
                <div className="serial-no">2.</div>
                <div className="heading-bold">What Do We Do</div>
                <div className="small-text">
                  We give you a free course that guides you through the process
                </div>
              </div>
              <div className="info-box">
                <div className="serial-no">3.</div>
                <div className="heading-bold">How Do We Help</div>
                <div className="small-text">
                  Use our multimedia lectures, videos and coaching assistance.
                </div>
              </div>
              <div className="info-box">
                <div className="serial-no">4.</div>
                <div className="heading-bold">Create Success Story</div>
                <div className="small-text">
                  With access to online learning resources anyone can transform
                </div>
              </div>
            </div>
            <div className="right-section">
              <img className="furniture-broad" src={AboutUs2} />
              <img className="furniture-long" src={AboutUs1} />
              <img className="furniture-long" src={AboutUs3} />
              <img className="furniture-broad" src={AboutUs4} />
            </div>
          </div>
        </div>
        <div className="products-section">
          <div className="heading-container">
            <h1 className="section-heading">Products</h1>
            <div className="text-and-btn">
              <div>See All</div>
              <img />
            </div>
          </div>
          <div className="products-toggle">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="bed-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bed"
                  type="button"
                  role="tab"
                  aria-controls="bed"
                  aria-selected="false"
                >
                  Bed
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="sofa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sofa"
                  type="button"
                  role="tab"
                  aria-controls="sofa"
                  aria-selected="false"
                >
                  Sofa
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="chair-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#chair"
                  type="button"
                  role="tab"
                  aria-controls="chair"
                  aria-selected="false"
                >
                  Chair
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="light-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#light"
                  type="button"
                  role="tab"
                  aria-controls="light"
                  aria-selected="false"
                >
                  Light
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <img src={Chair1} />
              <img src={Chair2} />
              <img src={Sofa1} />
              <img src={Sofa2} />
              <img src={Sofa3} />
              <img src={Bed1} />
              <img src={Bed2} />
              <img src={Lamp1} />
            </div>
            <div
              class="tab-pane fade show active"
              id="bed"
              role="tabpanel"
              aria-labelledby="bed-tab"
            >
              <img src={Bed1} />
              <img src={Bed2} />
            </div>
            <div
              class="tab-pane fade show active"
              id="sofa"
              role="tabpanel"
              aria-labelledby="sofa-tab"
            >
              <img src={Sofa1} />
              <img src={Sofa2} />
              <img src={Sofa3} />
            </div>
            <div
              class="tab-pane fade show active"
              id="chair"
              role="tabpanel"
              aria-labelledby="chair-tab"
            >
               <img src={Chair1} />
              <img src={Chair2} />
            </div>
            <div
              class="tab-pane fade show active"
              id="light"
              role="tabpanel"
              aria-labelledby="light-tab"
            >
              <img src={Lamp1} />
            </div>
          </div>
          <div className="lower-box">
            <div className="upper-container">
              <div className="circles">
                <div className="half-circle"></div>
                <div className="half-circle"></div>
              </div>
              <div className="clients-heading">
                <h1 className="bold-heading">What our happy clients Say</h1>
                <div className="small-text">
                  File storage made easy - including powerful features you won't
                  find anywhere else. Wherever you are.
                </div>
              </div>
              <div className="icon-box">
                <img className="shopping-icon" />
              </div>
            </div>
            <div className="lower-container">
              <div className="left-section">
                <div className="lower-images">
                  <img className="fav-icon" src={FavIcon} />
                </div>
                <img className="thinking-man" src={ManThinking} />
              </div>
              <div className="right-section">
                <div className="logo">furni.shop</div>
                <div className="cursive-text">
                  Files storage made easy - Including powerful features you
                  won't find anywhere else. Whether you're
                </div>
                <div className="credits">
                  <div className="bold-name">Larry Diamond</div>
                  <div className="designation">Chief Executive Officer</div>
                </div>
                <div className="arrow-icons">
                  <div className="left-arrow">
                    <img />
                  </div>
                  <div className="right-arrow">
                    <img />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
