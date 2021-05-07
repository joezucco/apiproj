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
      <section class="section is-medium">
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
      </section>
    );
  };

  const loading = () => {
    return (
      <>
        <img className="dancer" src="/dancer.gif" alt="Dance" />
        <h6 style={{color:"darkgrey", fontSize:"14px"}}>...dancing...</h6>
        <h6 style={{fontStyle:"italic", fontSize:"7px"}}>(loading)</h6>
      </>
    );
  };

  return props.catFacts[num] ? loaded() : loading();
};

export default Fact;
