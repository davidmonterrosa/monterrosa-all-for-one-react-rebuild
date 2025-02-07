import { useState } from "react";
import { getReverseNumber } from "../services/services";
import { Link } from "react-router-dom";

const ReverseItNumbers = () => {
  const [result, setResult] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const fetchResult = async () => {
    setResult(await getReverseNumber(numberInput));
  };
  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#3395AB] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12 w-[90vw]">
          <div className="flex justify-center">
            <div className="lg:bg-[url(../src/assets/icons/ReverseItNumbers.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px] ">
              <h1 className="text-center text-white text-xl lg:text-4xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl  mb-8">
                Reverse It <br /> Numbers
              </h1>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-20 lg:items-center lg:mt-20 lg:mx-20 place-items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-center text-xl mb-6">
                Enter a number below:
              </h1>
              <input
                onChange={(event) => setNumberInput(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#E2397B]"
                type="text"
                placeholder="Number"
              />
            </div>

            <div className="flex flex-col items-center justify-center press-start-2p bg-[#F9914B] text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[200px] ml-6.5 lg:ml-0">
              {
                result.length == 0 ?
                <p id="resultText" className="text-center">
                  Results Go Here
                </p>
                :
                <p id="resultText" className="text-center">
                  {result}
                </p>
              }
            </div>


            <div className="flex flex-col items-center">
              <button
                onClick={fetchResult}
                className="press-start-2p text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[125px] text-2xl bg-[#7C439B]"              >
                Submit
              </button>
            </div>
          </section>

          <div className="flex flex-col items-center mt-12">
            <Link to="/">
              <button>
                <img
                  src="../src/assets/icons/Back To Home.png"
                  alt="Back to home button"
                />
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ReverseItNumbers;
