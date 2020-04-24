import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./styles/stylesEdTeam.scss"
import Curso from "./Curso.jsx"

const Dashboard = () => {
   
   const [data, setData] = useState([]);
   
   useEffect(() => {
      const fetchData = async () => {
         const result = await axios(
            'https://jsonplaceholder.typicode.com/users',
         );
         setData(result.data);
      };
      fetchData();
   }, []);
 
   return (
      <>
      <div className="main-banner img-container l-section" id="main-banner">
         <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
               <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
               <div className="main-banner__data s-center">
                  <p className="t2 s-mb-0">Cursos de eduJob</p>
                  <p> Tu futuro te está esperando</p>
                  <a href="" className="button">Suscribirse</a>
               </div>
            </div>
         </div>
      </div>
            <div className="ed-grid m-grid-3">{
               data.map(item => < Curso title = "Excel Avanzado" price={20} profesor = {item.name}/> )
            }  
      </div>
      </>
   );
};
export default Dashboard;