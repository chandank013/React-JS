import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(

        <div>
            <h1>Code With Coffee</h1>
            <p>Welcome, Chandan Ku!</p>
        </div>
    )
}

/* // This is a custom React element that do not matching the rendering logic in React.js
const ReactElement = {
    type: 'a',
    props: {
        href: 'https:google.com',
        target: '_blanck'
    },
    children: 'Click me to visit google'
}*/


const anotherElement = (
    <a href="https://google.com" target="_blank">
        Click me to visit google
    </a>
)

const anotheruser = ' Code With React'

// This is a custom React element that is compatible with React's rendering logic
const reactElement = React.createElement(
    'a',
    {
        href: 'https:google.com',
        target: '_blank'
    },
    'Click me to visit google',
    anotheruser
)

createRoot(document.getElementById('root')).render(

    // <App />

    //  MyApp()  
    // ReactElement  //  This is a custom React element that do not matching the rendering logic in React.js
    // anotherElement  // ReactElement is a custom React element that mimics the structure of a React element

    reactElement  // This is a custom React element that is compatible with React's rendering logic
)
