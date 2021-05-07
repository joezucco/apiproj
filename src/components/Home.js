import Fact from "./Fact";
import Footer from "./Footer"
import "./Home.css"

const Home = (props) => {
  console.log(props.catFacts);
  return (
    <>
      <div
        id="bod"
        style={{
          background: "rgb(255,152,93)",
          background:
            "radial-gradient(circle, rgba(251,129,34,1) 0%, rgba(200,140,170,1) 100%)",
        }}
      >
        <section className="section">
          <div id="factbod" style={{ margin: "auto" }}>
            <Fact catFacts={props.catFacts} />
          </div>
        </section>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
