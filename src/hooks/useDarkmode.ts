
import { useState,useEffect } from "react";

const modeStr = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mode") || "null") : null;

const useDarkmode = () => {
    const [mode,setMode] = useState(modeStr || "light");

    useEffect(() => {
       localStorage.setItem("mode", JSON.stringify(mode));
    }, [mode]);

    return [mode,setMode];
}

export default useDarkmode;