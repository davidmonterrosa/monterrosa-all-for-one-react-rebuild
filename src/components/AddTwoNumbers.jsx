import React, { useState } from "react";
import { addNumbers } from "../services/services";
import { Link } from "react-router-dom";


const AddTwoNumbers = () => {
  const [sum, setSum] = useState('');
  const [firstNumberInput, setFirstNumberInput] = useState('');
  const [secondNumberInput, setSecondNumberInput] = useState('');
  const fetchSum = async () => {
    setSum(await addNumbers(firstNumberInput, secondNumberInput));
  };

  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#F9A159] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12 w-[90vw]">
          <div className="grid grid-cols-1 lg:grid-rows-[auto] lg:grid-cols-[auto] place-items-center">
            <div className="lg:bg-[url(../src/assets/icons/Adding2Numbers.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px]">
              <h1 className="text-center text-white text-xl lg:text-5xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl mb-8">
                Add 2 Numbers
              </h1>
            </div>
            <section className="lg:flex lg:justify-evenly items-center xl:gap-x-10  lg:gap-x-2 lg:row-start-2 lg:mt-8 xl:px-10">
                <input type="text" placeholder="First Number" onChange={(event) => setFirstNumberInput(event.target.value)} className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] w-full h-[50px] bg-[#45569D]"/>
                <h1 className="text-white text-center text-6xl my-4">+</h1>
                <input type="text" placeholder="Second Number" onChange={(event) => setSecondNumberInput(event.target.value)} className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] w-full h-[50px] bg-[#3AB8CB]"/>
                <h1 className="text-white text-center text-6xl my-4">=</h1>
                <div className="bg-[#7C439B] text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[125px] flex justify-center items-center">
                    {
                        sum.length == 0 ? 
                        <p className="text-center text-2xl press-start-2p">Sum</p>
                        :
                        <p className="text-center text-2xl result-sum-text">{sum}</p>
                    }
                </div>
            </section>
            <div className="lg:row-start-3 mt-12 lg:mt-4">
                <button onClick={fetchSum} className="press-start-2p text-2xl text-white border-[3px] border-black rounded-2xl w-[275px] h-[125px] bg-[#D94886]">Submit</button>
            </div>

            <div className="lg:row-start-4 mt-12">
                <Link to={"/"} >
                    <button><img src="../src/assets/icons/Back To Home.png" alt="Back to home button" /></button>
                </Link>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
};

export default AddTwoNumbers;
