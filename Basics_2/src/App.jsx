import Navbar from "./components/Navbar";
import NavbarCBC from "./components/NavbarCBC";
import State from "./states/fbc/State";
const App = () => {
    return (
        <div>
            {/* <Navbar/>
            <NavbarCBC/> */}
            <State/>
            <h1>This is App Component</h1>
        </div>
    )
}

export default App;