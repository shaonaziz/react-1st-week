import React, { useRef,useEffect } from "react";
import { gsap } from "gsap";



const GsapSection = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=300" });
  });
  return (
    <div ref={boxRef}>
        <h1>Hello Dcastalia</h1>
    </div>

  );
};

export default GsapSection;
