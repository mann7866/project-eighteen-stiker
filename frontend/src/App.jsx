import Navbar from "./components/Navbar";
import "./App.css";
import logo from "../public/assets/images/logo/logo.png";
import CustomButton from "./components/ComponentsUi";

function App() {
  return (
    <>
      <Navbar />
      <div className="home-header h-[1080px] sm:h-[1050px] md:h-[900px] lg:h-[700px] pt-[150px]">
        <div className="home text-black flex ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center px-5 sm:px-7 md:px-6 lg:px-15">
            <div>
              <h1 className="text-5xl/tight md:text-6xl/tight font-bold mb-4">
                Stiker Custom{" "}
                <span className="bg-red-500 p-1 text-4xl md:text-5xl">Berkualitas</span>{" "}
                untuk Segala Kebutuhan
              </h1>
              <p className="text-base/loose opacity-50 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus explicabo exercitationem ducimus modi dolor sunt, earum dicta quidem distinctio mollitia!</p>
            <div className="flex items-center sm:gap-4 gap-2">
              <CustomButton/>
             <CustomButton/>
            </div>
            </div>
            <div>
            <img
              loading="lazy"
              src={logo}
              alt="Hero Image"
              className="w-[450px] md:ml-auto rounded-lg mt-7 md:mt-0"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <div>
          <h1>test</h1>
        </div>
      </div>
    </>
  );
}

export default App;
