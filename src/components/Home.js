import Fact from "./Fact";
import Footer from "./Footer"
import "./Home.css"

const Home = (props) => {
  console.log(props.catFacts);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <Fact catFacts={props.catFacts} />
          </div>
        </div>
      </div>
      <div id="wrapper">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
