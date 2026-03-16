import { useState } from "react";

const Increase = () => {

  const [Number, setNumber] = useState(0)
  // useState no use : variable define karva
  // Number ==> read only value (change na thai)
  // setNumber ==> write only value (Number ni vlaue change karishu)
  console.log(Number);
  function IncreaseNum () {
   setNumber(Number + 1);
    
  }

  function DecreaseNum() {
   if(Number !==0) {
    setNumber(Number - 1)
  };
}
 function IncreaseNum5 () {
   setNumber(Number + 5);
    
  }
   function DecreaseNum5() {
   if(Number >= 5) {
    setNumber(Number - 5)
  };
}
  function Reset () {
   setNumber(0);
    
  }
  // self task
  // jump 5 ==> value increase to 5 number
  // decrease jump 5 ==> decrease value to 5 number
  // Reset vlaue
  return (
    <>
      <section>
        <h1 className="text-4xl text-center mt-10 font-extrabold">Usestate == change value of variable (variable no data change kari shakay)</h1>
        <p className="text-3xl text-center font-bold my-4">Increase and Decrease Counter</p>
        <div className="w-84 h-72 bg-[#222] text-[#555] rounded-xl px-4 py-2 flex items-center mx-auto justify-center text-[10rem] font-bold">{Number}</div>
        <div className="flex item-center justify-center py-6 gap-6">
        <button className="py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition" onClick={IncreaseNum}>Increase</button>
        <button className="py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition"
        onClick={DecreaseNum}>Decrease</button>
       
        <button className="py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition" onClick={IncreaseNum5}>Increase + 5</button>
        <button className="py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition"
        onClick={DecreaseNum5}>Decrease - 5</button>
          <button className="py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition"
        onClick={Reset}>Reset</button>
        </div>
      </section>
    </>
 
  )
} 

export default Increase