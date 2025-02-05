import { useEffect, useState } from "react";
import { addNumbers } from "../services/services";

const AddTwoNumbers = () => {
  const [users, setUsers] = useState([]);

  return (
    <main className="bg-[#303030] flex justify-center">
      <section className="bg-black screen-glow rounded-2xl flex justify-center my-8 mx-4 p-6">
        <section className="bg-[#F9A159] md:bg-[#111828] rounded-2xl px-3 pt-10 pb-12">
            <div className="grid grid-cols-[326px] xl:grid-rows-[auto] xl:grid-cols-[auto] place-items-center">
                <div className="md:bg-[url(../src/assets/icons/Adding2Numbers.png)] md:bg-cover md:bg-center md:rounded-2xl md:aspect-[12/7] md:w-[480px] md:h-[280px]">
                <h1 className="text-center text-white text-xl mb-8"></h1>

                </div>
            </div>
        </section>
      </section>
          <a href="/">
            <h1>Add Two Numbers</h1>
          </a>
    </main>
  );
};

export default AddTwoNumbers;
