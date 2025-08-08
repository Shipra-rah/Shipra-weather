import Home from "./Home";
import Shipralogo from "./assets/Shipralogo.svg";

function App() {
  return (
    <div>
     
      {/* Vertically centered main content */}
      <div className="h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center">
        <Home />
      </div>
    </div>
  );
}
export default App;
