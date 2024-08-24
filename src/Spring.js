import React from "react";
import { useSpring, animated } from "react-spring";

function FadeInOut() {
  const [toggle, setToggle] = React.useState(false);
  const props = useSpring({ opacity: toggle ? 1 : 0 });

  return (
    <div>
      <animated.div style={props}>I will fade in and out</animated.div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default FadeInOut;
