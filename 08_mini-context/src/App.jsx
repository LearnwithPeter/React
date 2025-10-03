import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'
import Usercontextprovider from './Context/UsercontextProvider'

function App() {


  return (
    <Usercontextprovider>
     <h1>Hi react contextApi</h1>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App
