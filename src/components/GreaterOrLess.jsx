import { useState } from "react";
import { compareNumbers } from "../services/services";
import { Link } from "react-router-dom";

const GreaterOrLess = () => {
  const [result, setResult] = useState("");
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");
  const fetchComparisonResults = async () => {
    setResult(await compareNumbers(firstNumberInput, secondNumberInput));
  };
  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#E03759] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12">
          <div className="flex justify-center">
            <div className="lg:bg-[url(../src/assets/icons/GuessIt.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px]">
              <h1 className="text-center text-white text-xl lg:text-5xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl mb-8">
                Greater or Less
              </h1>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-y-8 lg:grid-cols-4  lg:gap-x-8 lg:mt-20">
            <div className="flex flex-col items-center ">
              <h1 className="text-white text-center text-xl mb-8">
                Enter two numbers and click submit to compare:
              </h1>
              <input
                type="text"
                placeholder="First Number"
                onChange={(event) => setFirstNumberInput(event.target.value)}
                className="press-start-2p rounded-2xl border-[3px] border-solid border-black max-w-[275px] max-h-[50px] placeholder:text-white text-white bg-[#F0804A] "
              />
            </div>
            <div className="flex flex-col items-center ">
              <input
                type="text"
                placeholder="Second Number"
                onChange={(event) => setSecondNumberInput(event.target.value)}
                className="press-start-2p rounded-2xl border-[3px] border-solid border-black max-w-[275px] max-h-[50px] placeholder:text-white text-white bg-[#3AB8CB]"
              />
            </div>
            <div className="press-start-2p bg-[#7C439B] text-white border-[3px] border-solid  border-black rounded-2xl w-[275px] h-[200px] flex justify-center items-center ml-6.5 lg:ml-0">
              {result.length == 0 ? 
                <p className="text-center"> First Number is greater / less / equal to Second Number </p>
               : 
                <p className="text-center">{result}</p>
              }
            </div>
            <div className="flex flex-col items-center xl:justify-center">
              <button
                onClick={fetchComparisonResults}
                className="press-start-2p text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[125px] text-2xl bg-[#407DBD]"
              >
                Submit
              </button>
            </div>
          </section>

          <div className="flex flex-col items-center mt-12">
            <Link to={"/"}>
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

export default GreaterOrLess;
