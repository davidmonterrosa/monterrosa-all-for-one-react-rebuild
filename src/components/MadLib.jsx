import { useState } from "react";
import { generateStory } from "../services/services";
import { Link } from "react-router-dom";

const MadLib = () => {
    const [storyResult, setStoryResult] = useState("");
    const  [victimNameField, setVictimNameField] = useState("");
    const  [taskNameField, setTaskNameField] = useState("");
    const  [rivalNameField, setRivalNameField] = useState("");
    const  [animalCountField, setAnimalCountField] = useState("");
    const  [adjectiveField, setAdjectiveField] = useState("");
    const  [animalField, setAnimalField] = useState("");
    const  [itemField, setItemField] = useState("");
    const  [specialMoveField, setSpecialMoveField] = useState("");
    const  [numberField, setNumberField] = useState("");
    const  [distanceField, setDistanceField] = useState("");
    const fetchStoryResult = async () => {
        setStoryResult(await generateStory(victimNameField,  animalField,  taskNameField,  itemField,  rivalNameField,  specialMoveField,  animalCountField,  numberField,  adjectiveField,  distanceField));
    };

  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black shadow-[0_0_20px_#00FFFF32] rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#E64279] lg:bg-[#111828] rounded-2xl px-3 pt-10 pb-12 w-[90vw]">
          <div className="flex justify-center">
            <div className="lg:bg-[url(../public/assets/icons/MadLib.png)] lg:bg-cover lg:bg-center lg:rounded-2xl lg:aspect-[12/7] lg:w-[480px] lg:h-[280px]">
              <h1 className="text-center text-white text-xl lg:text-5xl lg:flex lg:items-center lg:justify-center lg:px-15 lg:min-h-full lg:backdrop-brightness-[0.25] lg:rounded-2xl  mb-8">
                Mad Lib
              </h1>
            </div>
          </div>
          <section className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 lg:grid-rows-5 lg:gap-x-7 lg:mt-20 lg:mx-4 place-items-center">
            {/* Victim Name */}
            <div className="flex flex-col items-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Victim Name
              </h1>
              <input
                onChange={(event) => setVictimNameField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
                type="text"
                placeholder="Name"
              />
            </div>

            {/* Task Name */}
            <div className="flex flex-col items-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Task Name
              </h1>
              <input
                onChange={(event) => setTaskNameField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
                type="text"
                placeholder="Task Name"
              />
            </div>

            {/* Rival Name */}
            <div className="flex flex-col items-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Rival Name
              </h1>
              <input
                onChange={(event) => setRivalNameField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
                type="text"
                placeholder="Rival"
              />
            </div>

            {/* Animal Count */}
            <div className="flex flex-col items-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Animal Count
              </h1>
              <input
                onChange={(event) => setAnimalCountField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
                type="text"
                placeholder="###"
              />
            </div>

            {/* Adjective */}
            <div className="flex flex-col items-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Adjective
              </h1>
              <input
                onChange={(event) => setAdjectiveField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
                type="text"
                placeholder="Adjective"
              />
            </div>

            {/* Animal */}
            <div className="flex flex-col items-center my-5 lg:col-start-2 lg:row-start-1">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Animal
              </h1>
              <input
                onChange={(event) => setAnimalField(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
                type="text"
                placeholder="Animal"
              />
            </div>

            {/* Item */}
            <div className="flex flex-col items-center my-5 lg:col-start-2 lg:row-start-2">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Item
              </h1>
              <input
                onChange={(event) => setItemField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
                type="text"
                placeholder="Item"
              />
            </div>

            {/* Special Move */}
            <div className="flex flex-col items-center my-5 lg:col-start-2 lg:row-start-3">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Special Move Name
              </h1>
              <input
                onChange={(event) => setSpecialMoveField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
                type="text"
                placeholder="Special Move"
              />
            </div>

            {/* Number */}
            <div className="flex flex-col items-center my-5 lg:col-start-2 lg:row-start-4">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Number
              </h1>
              <input
                onChange={(event) =>  setNumberField(event.target.value)}
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#A96AAD]"
                type="text"
                placeholder="###"
              />
            </div>

            {/* Unit of Distance */}
            <div className="flex flex-col items-center justify-center my-5">
              <h1 className="text-black text-center bg-[url(/assets/icons/pixelatedTxtBubbleTemplate-removebg-preview.png)] bg-no-repeat bg-cover w-[275px] max-h-[95px] pb-[3.5rem] pt-[0.35rem] leading-6 text-xl">
                Unit of Distance
              </h1>
              <input
                onChange={(event) => setDistanceField(event.target.value) }
                className="text-center text-white placeholder:text-white  press-start-2p rounded-2xl border-[3px] border-black border-solid max-w-[275px] h-[50px] bg-[#8B3972]"
                type="text"
                placeholder="Distance"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-center my-5 lg:col-start-3 lg:col-end-5">
              <button
                onClick={fetchStoryResult}
                className="press-start-2p text-white border-[3px] border-solid border-black rounded-2xl w-[275px] h-[125px] text-2xl bg-[#407DBD]"
              >
                Submit
              </button>
            </div>

            {/* Story Text */}
            <div className="flex flex-col items-center press-start-2p bg-[#7C439B] text-white border-[3px] border-solid border-black rounded-2xl max-w-[275px] md:max-w-xl overflow-x-scroll w-full h-full lg:row-start-1 lg:col-start-3 lg:col-end-5 lg:row-span-4  mt-5 ml-6.5 lg:ml-0 lg:mt-0">
                {
                    storyResult.length == 0 ?
                    <p id="storyText" className="text-sm mx-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                        saepe vitae ex molestiae nisi possimus ut dolorem architecto qui
                        totam iste reiciendis voluptate, in et tempora quam incidunt
                        magni veritatis. Impedit porro odio numquam officia magni non
                        provident sunt illum repellendus exercitationem sed, vel minima,
                        libero quam soluta? Enim, error esse deserunt maxime reiciendis
                        ab necessitatibus exercitationem? Animi, maxime sit.
                    </p>
                    :
                    <p id="storyText" className="text-sm mx-2 break-words m-2">
                        {storyResult}
                    </p>


                }
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="flex flex-col items-center mt-12">
            <Link to="/">
              <button>
                <img src="/assets/icons/Back To Home.png" alt="Back to home button" />
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MadLib;
