// import { useState } from "react";
// function MyForm(){
//     const [name,setName]=useState("");

//     function handleSubmit(e){
//         e.preventDefault();
//         console.log("Form submited");
//         console.log("Current State",name);
//     }
                                                                                            
// return <form onSubmit={handleSubmit}>
//     <label> Enter Your Name :  
//     <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
//     </label>
//     <input type="submit" value="Submit"/> 
// </form>     
// }

// export default MyForm;

// // // // //Handling multyiple input fields

// import { useState } from "react";
// function MyForm(){
//       // 
//     const [inputs,setInputs]=useState({})
    
//     function handleSubmit(e){
//         e.preventDefault();
//         console.log("Form submited");
//         console.log("current state",inputs);
      
//     }
                                                                                            
// return <form onSubmit={handleSubmit}>
//     <label> Enter Your Name : 
//          <input type="text" onChange={(e)=>{setInputs((previousState)=>{return {...previousState,name:e.target.value}})}}/>
//          </label> <br/>
//     <label> Enter Your Age : 
//          <input type="text" onChange={(e)=>{setInputs((previousState)=>{return {...previousState,age:e.target.value}})}}/>
//          </label> <br/> 
//     <label> Enter Your Password : 
//          <input type="password" onChange={(e)=>{setInputs((previousState)=>{return {...previousState,password:e.target.value}})}}/>
//          </label> <br/>
//     <label> Enter Your Email: 
//          <input type="email" onChange={(e)=>{setInputs((previousState)=>{return {...previousState,email:e.target.value}})}}/>
//          </label> <br/>
//     <input type="submit" value="Submit"/> 
// </form>     
// }

// export default MyForm;






// // // // // // Simplifying onchange Handler


// import { useState } from "react";
  
// function MyForm(){
//       // 
//     const [inputs,setInputs]=useState({})
    
//     function handleSubmit(e){
//         e.preventDefault();
//         console.log("Form submited");
//         console.log("current state",inputs);
//     }
//     function handleChange(e){
//         const name=e.target.name
//         const value=e.target.value
//         setInputs((previousState)=>{return {...previousState,[name]: value }})
//     }
                                                                                            
// return <form onSubmit={handleSubmit}>
//     <label> Enter Your Name :<input type="text" name="name" onChange={handleChange}/></label><br/>
//     <label> Enter Your Age :<input type="text" name="age" onChange={handleChange}/></label><br/> 
//     <label> Enter Your Password :<input type="password" name="password" onChange={handleChange}/></label><br/>
//     <label> Enter Your Email :<input type="email" name="email" onChange={handleChange}/></label><br/>
//     <input type="submit" value="Submit"/> 
// </form>     
// }



// export default MyForm;





// // // // // // // Setting initial form values,

import { useState } from "react";
    
function MyForm(){
      // 
    const [inputs,setInputs]=useState({phone:"+91  ",email:"@gmail.com",country:"",textarea:"I'm a student"})
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submited");
        console.log("current state",inputs);
    }
    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setInputs((previousState)=>{return {...previousState,[name]: value }})
    }
                                                                                            
return <form onSubmit={handleSubmit}>
    <label> Enter Your Name :<input type="text" name="name" onChange={handleChange}/></label><br/>
    <label> Enter Your Age :<input type="text" name="age" onChange={handleChange}/></label><br/> 
    <label> Enter Your Password :<input type="password" name="password" onChange={handleChange}/></label><br/>
    <label> Enter Your Email :<input type="email" name="email" onChange={handleChange} value={inputs.email}/></label><br/>
    <label> Enter Your Phone:<input type="phone" name="phone" onChange={handleChange} value={inputs.phone}/></label><br/>
    
    {/* select */}
    <label> Enter Your Country:<select  name="country" onChange={handleChange} value={inputs.country}>
        <option value="">Select</option>
        <option value="Malashiya">Malashiya</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="India">India</option> </select>
    </label><br/>


    {/* TextArea */}
    <label>Enter About You
        <textarea rows={3} cols={15} name="textarea" onChange={handleChange} value={inputs.textarea}></textarea>
        </label> <br/>
    <input type="submit" value="Submit"/> 
</form>     
}



export default MyForm;