import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="home-header h-[1000px] pt-[150px]">
        <div className="home text-2xl text-black">
          Scroll ke bawah untuk lihat efek navbar
          <button className="">Click</button>
        </div>
      </div>
    </>
  );
}

export default App;
