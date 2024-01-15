import React from "react";
import "./home.scss";
import sideImage from "../../assets/side-image.png";
import Button1 from "../../components/button1/Button1";
import Feature from "../../components/feature/Feature";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import sideImage2 from "../../assets/side-image2.png";
import Navbar from "../../Layout/navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <div className="Wrap1">
        <div className="Intro">
          <h1>
            <span className="Highlight">Empower </span>Your Day,{" "}
            <span className="Highlight">Transform </span> The World
          </h1>
          <h2>Achieve Tasks, Foster Sustainability, and Earn Rewards!</h2>
          <Button1 content={"Get started"} />
        </div>
        <img src={sideImage} alt="logo" className="SideImg" />
      </div>

      <p className="About">
        Welcome to Sustain Focus, where productivity meets purpose. Take control
        of your day by setting tasks, embracing sustainability challenges, and
        witnessing the positive impact of your actions. Start your journey
        towards a more organized and sustainable lifestyle. Every task completed
        brings you closer to unlocking rewards and making a real difference.
        Join us in building a better future—one task at a time.
      </p>

      <section>
        <h3>Our Features</h3>
        <div className="Features">
          <Feature
            img={feature1}
            title={"Task Mastery"}
            content={
              "Effortlessly organize your day with our intuitive task management system. Prioritize, schedule, and achieve your goals with ease"
            }
          />
          <Feature
            img={feature2}
            title={"Sustainability Challenges"}
            content={
              "Daily eco-friendly challenges await! Elevate your impact by seamlessly integrating sustainability into your routine and making a positive difference"
            }
          />
          <Feature
            img={feature3}
            title={"Rewards & Recognition"}
            content={
              "Unlock a world of rewards as you complete tasks and sustainability challenges. Earn virtual currency and redeem it for exciting benefits, fostering motivation and achievement"
            }
          />
        </div>
      </section>

      <div className="Wrap1">
        <img src={sideImage2} alt="logo" className="SideImg2" />
        <div className="Intro">
          <Button1 content={"Get started"} />
          <h2 style={{fontSize:'28px', lineHeight:'35px', fontWeight:500}}>Together, let's create a harmonious balance between productivity and environmental consciousness</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
