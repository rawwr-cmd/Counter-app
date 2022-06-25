import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  //fetching data, directly updating the DOM, and timers.

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    // cleanUp function
    return () => {
      clearInterval(interval);
    };
  }, [forwards]);

  return counter;
};

export default useCounter;
