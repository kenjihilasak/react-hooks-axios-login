//usuario 
//verificar si esta en un array

//password
//verificar si esta en una array

const usuarios =[
   {
      "usuario": "kenji",
      "password": "playtec"
   },
   {
      "usuario": "andree",
      "password": "playtec"
   },
   {
      "usuario": "ayrton",
      "password": "playtec"
   }
]

export default function validateLogin(values){
   let errors = {};

   if(values.usuario && usuarios.find(u => u.usuario === values.usuario)){
     
   }else {
      errors.usuario = "Es necesario un usuario auntentificado"
   }

   if(values.usuario && usuarios.find(u => u.password === values.password)){
      
   }else {
      errors.password = "Ingresar contraseña correcta"
   }

   return errors;
}
