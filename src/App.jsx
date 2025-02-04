import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black screen-glow rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#111828] rounded-2xl px-6 pt-6 pb-6">
          <h1 className="text-center text-white font-title font-size-title">
            All For <br /> One
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 place-content-center mt-12">
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/AddTwoNumbers">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                AddTwoNumbers
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/AskingQuestions">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                AskingQuestions
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/GreaterOrLess">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                GreaterOrLess
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/HelloWorld">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                HelloWorld
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/MadLib">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                MadLib
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/Magic8Ball">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                Magic8Ball
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/OddOrEven">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                OddOrEven
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/RestaurantPicker">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                RestaurantPicker
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/ReverseItAlphanumeric">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                ReverseItAlphanumeric
              </p>
              </div>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:text-white" >
              <Link to="/ReverseItNumbers">
              <div className="bg-[url()] bg-cover rounded-2xl aspect-[12/7] w-[100%] h-[175px] bg-center">
              <p className="rounded-2xl text-xl min-h-full text-transparent pt-16 hover:text-white hover:backdrop-filter hover:backdrop-brightness-[0.25]">
                ReverseItNumbers
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
