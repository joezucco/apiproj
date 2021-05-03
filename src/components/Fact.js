const Fact = (props) => {

    
    
    return (
        <div>
            
            {props.catFacts.map((fact, index) => {
                return <p>{fact.text}</p>
            })}
            {/* <input type='submit' value='meow' /> */}
      </div>
    );
}

export default Fact