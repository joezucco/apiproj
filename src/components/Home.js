import Fact from "./Fact";

const Home = (props) => {
  console.log(props.catFacts);
  return (
    <div>
      <Fact catFacts={props.catFacts} />
    </div>
  );
};

export default Home;
