import { useEffect, useState } from "react";


const WeekTwo = () => {
    const [weeks, setWeeks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/weeks')
      .then(res => res.json())
    .then(data=> setWeeks(data))
  }, [])
    const weekData = weeks.filter(item => item.week_number === 2);
    return (
        <div style={{ marginLeft: "20vw", marginTop: "30vh" }}>
            {weekData.length > 0 ? (
                <>
                    <h1>Week Number: {weekData[0].week_number}</h1>
                   
                        <p>ID: {weekData[0].modules[0].id}</p>
                        <p>Name: {weekData[0].modules[0].name}</p>
                    
                </>
            ) : (
                <h1>No data available for Week 1</h1>
            )}
        </div>
    );
};

export default WeekTwo;