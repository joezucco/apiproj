const Fact = (props) => {
    return (
        <div>
            
            {props.catFacts.map((fact, index) => {
                return <h2>{fact.text}</h2>
            })}
        <button>Grow!</button>
      </div>
    );
}

export default Fact