import { useEffect, useState } from "react";

function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  useEffect(() => {
    console.log("executar logica de listener online");
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      // destroy
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
}

export default useOnline;
