const Fact = (props) => {

    // const test = props[0]

    const handleClick = () => {
        console.log("testing", props[0])
    }

    return (
      <div>
        <input onClick={() => handleClick()} type="submit" value="/ᐠ｡‸｡ᐟ\" />
        {props.catFacts.map((fact, index) => {
          return (
            //   <h1>stuff</h1>
            <p>{fact.text}</p>
          );
        })}
      </div>
    );
}

export default Fact