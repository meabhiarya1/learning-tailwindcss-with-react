import "./index.css";

function App() {
  return (
    <>
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

        <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg space-x-4 my-3">
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
      </div>
    </>
  );
}

export default App;
