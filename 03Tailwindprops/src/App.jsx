import React from 'react'
import Card from './components/Card'

const arr=[1,2,3]
const obj={
  name:"Earnest",
  age:21,
}
const App = ({prop}) => {
  return (
    
    <> 
    <h2>{prop}</h2>
    <h1 className='justify-center rounded-xl mb-6 max-w-5xl'>Title Page</h1>
    <Card username="EARNEST"/>
    <Card username="JOY" />
    </>
  )
}

export default App
