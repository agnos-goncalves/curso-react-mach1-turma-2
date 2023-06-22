import { useEffect, useState } from "react";

function useResize() {
  const [windowResize, setWindowResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // criou component
  useEffect(() => {
    const handlerResize = () => {
      setWindowResize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handlerResize);
    // destruir component
    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  return windowResize;
}

export default useResize;
