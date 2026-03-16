import React, { useState } from 'react'

const AddUser = () => {
    const [Data, setData] = useState([
        {name: "Aarav Patel", email:"aaravpatel@gmail.com"},
        {name: "Riya Sharma", email:"riyasharma@gmail.com"},
        {name: "Vivan Maheta", email:"vivanmaheta@gmail.com"},
    ]);
    function Add() {
        let arr = [...Data];
        arr.push({name: "Ananya Gupta", email:"ananyagupta@gmail.com"});
       
        if(Data[3]?.name === "Ananya Gupta") {
            return;
        }
         setData(arr);
    }
    function Add2() {
        let arr = [...Data];
        arr.push({name: "Ananya Gupta", email:"ananyagupta@gmail.com"});
        arr.push({name: "Kabir Verma", email:"kabirverma@gmail.com"});
        if(Data[5]?.name === "Kabir Verma") {
            return;
        }
         setData(arr);
    }
  return (
   <>
   <section className="flex flex-wrap gap-6 my-10 justify-center items-center">
   
    {Data.map((user) =>{
        return(
    <div className="bg-[#555] rounded-2xl h-auto max-w-sm p-2 text-center w-full text-2xl font-bold flex flex-col gap-2">
        <h1 className="bg-[#222] px-4 py-2 rounded-xl">{user.name}</h1>
        <h1 className="bg-[#222] px-4 py-2 rounded-xl">{user.email}</h1>
        
    </div> 
        )
    })}
   </section>
   <div className="flex items-center justify-center gap-2">
     <button className="bg-orange-400 py-2 px-4 text-center rounded-xl" onClick={Add}>Add One More User</button>
     <button className="bg-orange-400 py-2 px-4 text-center rounded-xl" onClick={Add2}>Add One More User</button>

   </div>
  
   </>
  )
}

export default AddUser;