import { useState } from "react";
import { ask8Ball } from "../services/services";
import { Link } from "react-router-dom";

const Magic8Ball = () => {
  const [result, setResult] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const fetchResult = async () => {
    setResult(await ask8Ball(questionInput));
  };
  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#DC3570] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12 w-[90vw]">
          <div className="flex justify-center">
            <div className="lg:bg-[url(../public/assets/icons/Magic8Ball.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px]">
              <h1 className="text-center text-white text-xl lg:text-5xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl  mb-8">Magic 8 Ball</h1>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-y-8 lg:grid-cols-3  lg:gap-x-10 xl:gap-x-20 lg:items-center lg:mt-20 lg:mx-12 place-items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl mx-2">Ask a question!</h1>
              <input
                onChange={(event) => setQuestionInput(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#45569D]"
                type="text"
                placeholder="Question"
              />
            </div>

            <div className="flex flex-col justify-center items-center press-start-2p text-white bg-black border-[3px] border-solid border-[#346BAF] rounded-full aspect-square w-full max-w-[330px]">
              {
                result.length == 0 ?
                <p className="text-center text-xl mt-4">The Magic 8 Ball Says:</p>
                :
                <p className="text-center text-xl mt-4">{result}</p>
              }
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
              <button
                onClick={fetchResult}
                className="press-start-2p text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[125px] text-2xl bg-[#407DBD]"
              >
                Submit
              </button>
            </div>
          </section>

          <div className="flex flex-col justify-center items-center mt-12">
            <Link to="/">
              <button>
                <img
                  src="/assets/icons/Back To Home.png"
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

export default Magic8Ball;
