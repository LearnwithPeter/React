import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//this syntax react dont follow 
// const reactElement={
//     type:'a',
//     props:{
//       href:"https://google.com",
//       target:'_blank',
//     },
//     children:'click me to visit google'
//   }

const Reactelement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click e to visit Google',
)
const element=(
  <a href="https://google.com" target='_blank'>click to open google</a>
)
createRoot(document.getElementById('root')).render(

    <App/>
 
)
