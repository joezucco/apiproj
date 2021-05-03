import { Link } from "react-router-dom"
import Fact from "./Fact"

const Home = (props) => {

    console.log(props.catFacts)
    return (
    <div>
        <h2>Home</h2>
            <Fact catFacts={props.catFacts}/>
        </div>
    )
}

export default Home