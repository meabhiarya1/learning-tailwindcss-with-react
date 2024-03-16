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
      <header class="w-full h-auto ">
        <img
          class="w-full hidden md:block"
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
        />
        <img
          class="w-full md:hidden"
          src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </header>
      {/* image section ends here */}

        

    </div>
  );
};

export default Page;
