import React, {useState} from 'react'
import MyComponent from './MyComponent'
// import MyComponentclass from './MyComponentclass'

// export default class App extends Component {
    
//     render() {
//         return (
//             <div>
//                 {/* <MyComponentclass/> */}
//                 <MyComponent/>
                
//             </div>
//         )
//     }
// }

export default function App() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {/* <MyComponent/> */}
            <div>{show && <MyComponent/>}</div>
            <p>
                <button type="button" onClick={()=>setShow((prevshow)=>!prevshow)}>
                    {show ? 'Hidden Post':"Show Post"}
                </button>
            </p>
        </div>
    )
}
