

import {  Link, Outlet } from "react-router-dom";
const Mainlayout = () => {
    return (
        <div  style={{ height: '100vh', display: 'flex' }}>
            <div style={{width:"20vw", height:"100%", backgroundColor:'#E5E4E2'}}>
     <Link style={{textDecoration:"none", textAlign:'center', marginTop:"10vh"}} to='/'><h1 >Week One</h1></Link>
     <Link style={{textDecoration:"none", textAlign:'center', marginTop:"5vh"}} to='/weektwo'><h1 >Week Two</h1></Link>
     <Link style={{textDecoration:"none", textAlign:'center', marginTop:"5vh"}} to='/weekthree'><h1 >Week Three</h1></Link>
     <Link style={{textDecoration:"none", textAlign:'center', marginTop:"5vh"}} to='/weekfour'><h1 >Week Four</h1></Link>
     <Link style={{textDecoration:"none", textAlign:'center', marginTop:"5vh"}} to='/weekfive'><h1 >Week Five</h1></Link>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default Mainlayout;