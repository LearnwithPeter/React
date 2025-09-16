import React from 'react'
import Card from './components/Card'

const arr=[1,2,3]
const obj={
  name:"Earnest",
  age:21,
}
const App = () => {
  return (
    
    <> 
    <h1 className='bg-yellow-400 justify-center rounded-xl mb-6 max-w-5xl'>Title Page</h1>
    <Card username="Earnest"/>
    <Card username="Joy" />
    </>
  )
}

export default App
