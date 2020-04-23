import { useState,useEffect } from 'react';


const useForm = (submit,validate) => {

    //declaracion de estado "values.usuario y values.password"
    const [values, updateValues] = useState({usuario:'', password:''});
    const [errors, updateErrors] = useState({});
    const [isSubmitting, updateSubmitting] = useState(false); 
    const [isAdmitted,updateAdmitted]  = useState(false);

	//funcion cada vez que hay cambios
	const handleChange = event => {
      //const { name, value}=event.target;
      const {name, value}=event.target;
      
      //actualizo el estado values con el event targe t
		updateValues({
         ...values,
			[name]:value//agrego el prop name al estado values
      });
   };
   
	const handleSubmit = event => {
		event.preventDefault();//rpevenir refresco
      updateErrors(validate(values));
      updateSubmitting(true);
   };
   
   useEffect(() => {
         if (Object.keys(errors).length === 0 && isSubmitting) {
         submit();
         updateAdmitted(true);
         }
      }, [errors]
   );

   //if (isAdmitted) return redirectTo();

   return{
      handleChange,
      handleSubmit,
      values,
      errors,
      isAdmitted
   };
}
export default useForm;