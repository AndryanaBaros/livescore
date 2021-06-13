import "./App.css";
import BottomMenu from "./components/BottomMenu";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Statistic from "./components/Statistic";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Card />
            {/* <Statistic /> */}
            <BottomMenu className="bottom-menu" />
        </div>
    );
}

export default App;
