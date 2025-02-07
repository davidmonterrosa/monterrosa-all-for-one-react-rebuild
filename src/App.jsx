import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black screen-glow rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#111828] rounded-2xl px-6 pt-6 pb-6 w-[90vw]">
          <h1 className="text-center text-white text-[2.813rem]">
            All For <br /> One
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 place-content-center mt-12">
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/AddTwoNumbers">
              <div className="bg-[url(./public/assets/icons/Adding2Numbers.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Adding Two Numbers
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/AskingQuestions">
              <div className="bg-[url(./public/assets/icons/AskingQuestions.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Asking Questions
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/GreaterOrLess">
              <div className="bg-[url(./public/assets/icons/GuessIt.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Greater Or Less
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/HelloWorld">
              <div className="bg-[url(./public/assets/icons/HelloWorld.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Hello World
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/MadLib">
              <div className="bg-[url(./public/assets/icons/MadLib.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Mad Lib
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/Magic8Ball">
              <div className="bg-[url(./public/assets/icons/Magic8Ball.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Magic 8 Ball
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/OddOrEven">
              <div className="bg-[url(./public/assets/icons/OddOrEven.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Odd Or Even
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/RestaurantPicker">
              <div className="bg-[url(./public/assets/icons/RestaurantPicker.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Restaurant Picker
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white xl:col-start-2" >
              <Link to="/ReverseItAlphanumeric">
              <div className="bg-[url(./public/assets/icons/ReverseItAlphaNumeric.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Reverse It Alphanumeric
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white lg:col-start-2 xl:col-start-3" >
              <Link to="/ReverseItNumbers">
              <div className="bg-[url(./public/assets/icons/ReverseItNumbers.png)] bg-cover rounded-2xl aspect-[12/7] w-[100%] bg-center">
              <p className="press-start-2p text-center rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Reverse It Numbers
              </p>
              </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
