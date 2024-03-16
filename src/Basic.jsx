import React from "react";
// import "./index.css";

const Basic = () => {
  return (
    <div class="bg-slate-800 grid place-content-center h-screen">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4 ">
        <div>
          <img
            class="h-20 w-22"
            src="https://i.pinimg.com/736x/cd/77/e0/cd77e04d9fe1a4ac66a26693d05e02c4.jpg"
          />
        </div>

        <div class="text-xl font-medium text-black text-end">
          Tailwind CSS
          <p class="text-slate-500 text-end text-sm">Abhishek kumar</p>
        </div>
      </div>

      <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg space-x-4 mt-3">
        <div>
          <img
            class="h-50 w-60 text-center"
            src="https://i.pinimg.com/736x/cd/77/e0/cd77e04d9fe1a4ac66a26693d05e02c4.jpg"
          />
        </div>

        <div class="text-xl font-medium text-black text-center">
          Tailwind CSS
          <p class="text-slate-500 text-center text-sm">Abhishek kumar</p>
        </div>
      </div>
      <button class="bg-sky-500 text-white p-3 rounded-lg mt-3 hover:bg-white hover:text-black">
        Buy Now
      </button>

      {/* <div class="text-center text-white my-2 text-xl">
      <p class="text-white-400 sm:text-green-500 md:text-red-500">
        Lorem ipsum dolor sit
      </p>
    </div> */}

      <div class="my-3">
        <div class="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-lg">
          <div class="md:flex">
            <div class="">
              <img
                class="h-48 w-full object-cover md:h-full md:w-88"
                src="https://images.pexels.com/photos/19820294/pexels-photo-19820294/free-photo-of-a-river-in-the-woods-with-trees-and-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div class="p-5">
              <div class="uppercase text-center text-nowrap font-bold text-[15px] text-sky-600">
                Beautiful Nature
              </div>
              <a
                class="block mt-1 text-lg font-medium text-pretty text-center hover:text-sky-600"
                href="#"
              >
                The nature is very beautiful and it also looks preety.
              </a>
              <p class="mt-1 text-sm text-balance text-center text-slate-500">
                <span class="bg-yellow-200 rounded-lg p-1 font-bold md:bg-yellow-800 md:text-black">
                  Lorem ipsum
                </span>
                dolor sit amet consectetur adipisicing elit. Saepe tempora
                aliquam asperiores tempore harum laborum laboriosam aut
                reiciendis perspiciatis ducimus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
