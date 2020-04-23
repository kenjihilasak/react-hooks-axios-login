import React from 'react';
import useForm from "./useForm";
import validate from "./validateLogin"//funcion
import "./style.scss";
import loginImg from "./login.svg";
import {Redirect} from 'react-router-dom';

//creacion de componente
const Login = () => {
	const {handleSubmit, handleChange, values, errors,isAdmitted}= useForm(submit,validate);//custom hook
   
   function submit (){
      
      console.log("Submitted Succesfully");
      
   }

   return isAdmitted? (
      <Redirect to="/Dashboard" />
      ) : (
      <div className="base-container">
         <div className= "header">Login</div>
         <div className= "content">
            <div className="image">
               <img src={loginImg}/>
            </div>     
            <div className="form"> 
               <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                        <label>Usuario</label>
                        <div>
                           <input 
                           name="usuario" 
                           type = "text" 
                           value = {values.usuario} 
                           onChange={handleChange}
                        />
                        {errors.usuario && <p className="error">{errors.usuario}</p>}
                        </div>
                     </div>
                     <div className="form-group">
                        <label>Contraseña</label>
                        <div>
                           <input 
                              name="password" type = "password" value = {values.password}
                              onChange={handleChange}
                           />
                           {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                     </div>
                     <div className="footer">
                        <button 
                           type="submit">Ingresar
                        </button>
                     </div>
               </form>
               <div className="saludo">
                     <h2>{`Hola ${values.usuario}`}</h2>                  
               </div>
            </div>
         </div>
      </div>
   );
};


//form
//label input usuario
//label input password

// Ingresar button

// handle changes
// handle submit

//show error

export default Login;
