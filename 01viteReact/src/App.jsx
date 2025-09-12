import Hello from "./hello"

function App() {
  //using {} we give variables this is called evaluated expression we cannot do any evaluation inside it it takes only evaluated outcomes
  const username='Earnest'
  // use Fragments | <></> or <div></div>
  return (
  <>
   <h1>Hello {username}</h1>
   <p>rendering multipe tags using </p>
   <h3>Fragments</h3>
   </>
  )
}
export default App
