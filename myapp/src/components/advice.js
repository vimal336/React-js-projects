

function advice() {
    async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data.slip.id, data.slip.advice);
    }
  
    return (
      <div>
        <h1>Hello world! </h1>
        <button onClick={getAdvice}> Get advice </button>
      </div>
    );
  }

  export default advice