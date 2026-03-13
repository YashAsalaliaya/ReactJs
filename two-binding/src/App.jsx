import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function SubmitForm () {
    console.log("Login Successfully !");
    const data = {username, password};
    console.log(data);
    setUsername("");
    setPassword("");
  }
  return (
    <>
     <h1 className="text-center mt-10 font-bold text-5xl">Two Way Binding : Login, SingUP { " "} </h1>
     <h1 className="text-5xl text-shadow-orange-200 font-bold text-center mt-5 text-shadow">Log IN Form</h1>
   <section className="flex items-center justify-center mt-5">

    <form autoComplete="off" onSubmit={(e) => {
      e.preventDefault();
      SubmitForm();
    }}>
      <input className="bg-[#555] text-white outline-none my-2 px-4 focus:ring-2 ring-amber-400 py-2 block rounded-xl" type="text"placeholder="Username" value={username}  onChange={(e) => {
        setUsername(e.target.value);
      }}/>
      <input className="bg-[#555] text-white outline-none px-4 focus:ring-2 ring-amber-400 py-2 block rounded-xl" type="password" placeholder="Password" value={password} onChange={(e) => {
        setPassword(e.target.value);
      }}/>
      <input type="submit" value="Login" className ="w-full px-4 py-1 mt-2 active:scale-95 active:text-orange-500 bg-orange-500 active:bg-orange-100 rounded-xl"/>
    </form>
   </section>
    </> 
  
  )
}

export default App