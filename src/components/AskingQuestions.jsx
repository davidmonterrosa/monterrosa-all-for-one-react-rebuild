import { useState } from "react";
import { askQuestions } from "../services/services";
import { Link } from "react-router-dom";

const AskingQuestions = () => {
  const [result, setResult] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const fetchResult = async () => {
    setResult(await askQuestions(nameInput, timeInput));
  };

  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#ED885C] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12 w-[90vw]">
          <div className="flex justify-center">
            <div className="lg:bg-[url(../public/assets/icons/AskingQuestions.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px]">
              <h1 className="text-center text-white text-xl lg:text-5xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl mb-8">
                Asking Questions
              </h1>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4  lg:gap-x-8  lg:mt-20">
            <div className="flex flex-col items-center lg:mt-14">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                What is your Name?
              </h1>

              <input
                type="text"
                placeholder="Name"
                onChange={(event) => setNameInput(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
              />
            </div>

            <div className="flex flex-col items-center lg:mt-14">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                When did ya wake up?
              </h1>
              <input
                type="text"
                placeholder="8:00am"
                onChange={(event) => setTimeInput(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
              />
            </div>
            <div className="place-self-center bg-[#7C439B] text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-full flex justify-center items-center">
              {result.length == 0 ? (
                <p className="text-center text-2xl press-start-2p">
                  Your name is Name and you woke up at 8:00am!!!{" "}
                </p>
              ) : (
                <p className="text-center text-2xl press-start-2p">{result}</p>
              )}
            </div>
            <div className="place-self-center lg:col-start-2 xl:col-start-4">
              <button
                onClick={fetchResult}
                className="press-start-2p text-2xl text-white border-[3px] border-black rounded-2xl w-[275px] h-[125px] bg-[#D94886]"
              >
                Submit
              </button>
            </div>
          </section>

          <div className="flex flex-col items-center mt-12">
            <Link to={"/"}>
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

export default AskingQuestions;
