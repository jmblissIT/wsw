import React from "react";
import Abtimg from "../../Assets/image/abtimag.png";
import blue from "../../Assets/image/bcricle.png";
import Bar from "../../Assets/image/bar.png";
import Bar3 from "../../Assets/image/bar3.png";
import TypeWriterEffect from "react-typewriter-effect";
import { Parallax, Background } from "react-parallax";

const AboutUs = () => {
  const myRef = document.querySelector(".about");
  return (
    <>
      <div id="about-us">
        <div className="about pb-4">
          <div className="scroll-img">
            <div className="bar-scroll">
              <img src={Bar3} alt="bar" className="img-fluid bar" />
            </div>
            <div className="bar-scroll">
              <img src={Bar3} alt="bar" className="img-fluid bar" />
            </div>
          </div>
          <div className="container-wrap">
            <div className="row row-abt">
              <div className="col-lg-6 col-12 abt-rgt px-0 py-md-5 py-4">
                <div className="abt-textone text-start">
                  <h2 className="htwo">ABOUt</h2>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "CourierStd",
                      fontSize: "18px",
                      letterSpacing: "2px",
                      color: "#000",
                      marginTop: "1.5rem"
                    }}
                    startDelay={100}
                    cursorColor="black"
                    text="Wall Street Wolves is a project that hunts and invests into
            opportunities and projects for a community vault that you
            can earn shares in!"
                    typeSpeed={120}
                    scrollArea={myRef}
                    hideCursorAfterText={true}
                  />
                </div>
                <div className="abt-texttwo pt-md-4">
                  <h2 className="htwo pt-5">MANIFEStO</h2>
                  <p className="mt-md-4">
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "CourierStd",
                        fontSize: "18px",
                        letterSpacing: "2px",
                        color: "#000",
                        textAlign:"right"
                      }}
                      startDelay={100}
                      cursorColor="black"
                      text="Well versed in all markets,our pack dedicates their time to not only finding the right prey,but teaching you to hunt along the way"       
              
                      typeSpeed={120}
                      scrollArea={myRef}
                      hideCursorAfterText={true}
                      
                    />
                  </p>
                  <p>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "CourierStd",
                        fontSize: "18px",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        color: "#000",
                      }}
                      startDelay={15000}
                      cursorColor="black"
                      text="Join our ranks, leave the comfort of the den, and earn your rise to the top as an Alpha Wolf."
                      typeSpeed={120}
                      scrollArea={myRef}
                      hideCursorAfterText={true}
                    />
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 abt-left  p-md-0">
              <Parallax
                bgImage={blue}
                strength={400}  
            renderLayer={percentage => (
      <div
          style={{
              // position: 'absolute',
              // height:'600px',
              // width:'600px',
              // left:"52%",
              // top: "50%",
              // transform: `translateX(-50%, -50%) scale(${percentage})`,
          }}
      />
  )}
  >
              
                <div className="abt-animg">
                <img src={Abtimg} alt="aboutleftimage" className="img-fluid" />
                </div>
               
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-img px-3 bottom-scroll">
          <div className="bar-scroll">
            <img src={Bar} alt="" className="img-fluid" />
          </div>
          <div className="bar-scroll">
            <img src={Bar} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
