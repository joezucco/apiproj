import { useState } from "react";
import "bulma"
import { Button } from "react-bulma-components";

const Fact = (props) => {
  console.log(props);
  const [num, setNum] = useState(0);

  const handleClick = () => {
    let newNum = num++;
    setNum(newNum);
  };

  const loaded = () => {
    return (
      <div>
        <input className="button is-normal is-dark" onClick={() => setNum(num + 1)} type="submit" value="/ᐠ｡‸｡ᐟ\" />
        <p>{props.catFacts[num].text}</p>
      </div>
    );
  };

  const loading = () => {
    return (
      <>
        <img className="dancer" src="/dancer.gif" alt="Dance" />
        <h5>dancing...</h5>
      </>
    );
  };

  return props.catFacts[num] ? loaded() : loading();
};

export default Fact;
