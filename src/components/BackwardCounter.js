import { useEffect, useState } from "react";
import Card from "./Card";

const BackwardCounter = () => {
  const [counter, setCounter] = useState(0);

  //fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // console.log("Backward runniing");
    // cleanUp function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
