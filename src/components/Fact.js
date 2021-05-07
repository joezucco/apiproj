import { useState } from "react";

const Fact = (props) => {
  console.log(props);
  const [num, setNum] = useState(0);

  const handleClick = () => {
    let newNum = num++;
    setNum(newNum);
  };

  const loaded = () => {
    return (
      <div class="rows">
        <div class="row is-full">
          <div class="card is-fullheight" style={{ maxWidth: "100%" }}>
            <div class="card-content">
              <div class="content">
                <p>{props.catFacts[num].text}</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row is-full">
          <input
            className="button has-background-light "
            onClick={() => setNum(num + 1)}
            type="submit"
            value="/ᐠ｡‸｡ᐟ\"
          />
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <>
        <img className="dancer" src="/dancer.gif" alt="Dance" />
        <h6 style={{ color: "white", fontSize: "14px" }}>...dancing...</h6>
        <h6 style={{ color: "white", fontStyle: "italic", fontSize: "8px" }}>
          (loading)
        </h6>
      </>
    );
  };

  return props.catFacts[num] ? loaded() : loading();
};

export default Fact;
