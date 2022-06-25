import { useState, useEffect } from "react";

const usecounter = () => {
  const [counter, setCounter] = useState(0);

  //fetching data, directly updating the DOM, and timers.

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    // cleanUp function
    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default usecounter;
