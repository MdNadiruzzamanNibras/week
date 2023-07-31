import { useEffect, useState } from "react"


function App() {
  const [weeks, setWeeks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/weeks')
      .then(res => res.json())
    .then(data=> setWeeks(data))
  },[])
     console.log(weeks);
  return (
    <>
      
    </>
  )
}

export default App
