import React,{useState} from "react";
import Dark_fream from "./From_dark"

function App2(){
    const [DarkMode, setDarkMode] = useState(false)
    return (
        <div>
            <Dark_fream title="Enter text" />
        </div>
    );
}
export default App2;