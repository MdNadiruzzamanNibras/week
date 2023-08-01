import { useEffect, useState } from "react";

const WeekFive = () => {
    const [weeks, setWeeks] = useState([])
  
  useEffect(() => {
    fetch('https://week-backend-mdnadiruzzamannibras.vercel.app/weeks')
      .then(res => res.json())
    .then(data=> setWeeks(data))
  }, [])
    const weekData = weeks.filter(item => item.week_number === 5);
    return (
         <div style={{ marginLeft: "20vw", marginTop: "30vh" }}>
            {weekData.length > 0 ? (
                <>
                    <h1>Week Number: {weekData[0].week_number}</h1>
                   
                        <p>ID: {weekData[0].modules[0].id}</p>
                        <p>Name: {weekData[0].modules[0].name}</p>
                    
                </>
            ) : (
                <h1>No data available for Week</h1>
            )}
        </div>
    );
};

export default WeekFive;