import React from "react";
// import "./index.css";

const Page = () => {
  return (
    <div class="bg-slate-950 h-screen">
      {/* navbar starts here*/}
      <div class="w-full h-20 bg-indigo-300 flex justify-between px-4 md:px-4 items-center">
        <div class="text-indigo-800 font-bold text-2xl font-serif ">
          Welcome
        </div>
        <ul class="md:flex hidden font-semibold">
          <li class="mx-[10px] cursor-pointer">Home</li>
          <li class="mx-[10px] cursor-pointer">About Us</li>
          <li class="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div class="bg-indigo-700 p-2 rounded-2xl font-semibold text-white cursor-pointer text-sm hidden md:block">
          Login/Signup
        </div>
        <div class="p-1 font-bold text-indigo-700 cursor-pointer text-4xl md:hidden">
          <a href="#">&#8801;</a>
        </div>
      </div>
      {/* navbar ends here */}

      {/* image section starts here  */}
      <header class="w-full h-auto">
        <img
          class="w-full hidden md:block"
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
        />
        <img
          class="w-full h-screen md:hidden"
          src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </header>
      {/* image section ends here */}

      {/* student section */}
      <div class=" bg-slate-950 h-100 w-full flex flex-wrap flex-col items-center text center p-5">
        <div class="h-full w-full flex flex-wrap flex-col items-center">
          <p class="text-indigo-800 font-semibold items-center text-center text-2xl md:text-3xl">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div class="w-64 bg-yellow-600 h-1 m-3 rounded-sm md:w-96"></div>
        </div>
      </div>
      <div class="bg-slate-950 flex flex-wrap  justify-evenly ">
        <div class="w-24 flex flex-col items-center mx-4 my-2">
          <img
            class="w-34 h-10"
            src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/ee478abe-a66b-4529-a264-16b61ffb6c51.webp"
          />
          <p class="text-white font-bold text-xl m-1">600+</p>
          <p class="text-white text-sm text-nowrap text-center font-semibold">
            Different Courses
          </p>
        </div>

        <div class="w-24 flex flex-col items-center mx-4 my-2">
          <img
            class="w-34 h-10"
            src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/b75e0c1a-6893-4b31-8d79-f37a1c72115a.webp"
          />
          <p class="text-white font-bold text-xl m-1">24 x 7</p>
          <p class="text-white text-sm text-nowrap text-center font-semibold">
            Doubt solving sessions
          </p>
        </div>

        <div class="w-24 flex flex-col items-center mx-4 my-2">
          <img
            class="w-34 h-10"
            src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/65d1e4cb-abf8-4bda-9f2c-49f37a714b7a.webp"
          />
          <p class="text-white font-bold text-xl m-1">100 +</p>
          <p class="text-white text-sm text-wrap text-center font-semibold">
            Offline centres
          </p>
        </div>
      </div>
      {/* student section ended here */}

      
    </div>
  );
};

export default Page;
