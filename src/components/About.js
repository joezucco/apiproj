import Footer from "./Footer"
import "./About.css"

const About = (props) => {
  return (
    <section class="section is-medium">
      <div
        className="aboutbod"
        style={{
          background: "rgb(255,152,93)",
          background:
            "radial-gradient(circle, rgba(251,129,34,1) 0%, rgba(200,140,170,1) 100%)",
        }}
      >
        <div
          className="box"
          style={{ margin: "auto", padding: "100px", width: "500px" }}
        >
          <h1 className="title is-4" style={{ marginBottom: "35px" }}>
            About
          </h1>
          <p className="subtitle is-6">
            Catfax is a database of (relatively) true information about cats. In
            fact, this entire app was built by an actual cat!
          </p>
        </div>
        <Footer className="foot" />
      </div>
    </section>
  );
};

export default About;
