import Navbar from "./components/Navbar";
import NavbarCBC from "./components/NavbarCBC";
import Counter from "./states/fbc/Counter";
import State from "./states/fbc/State";
const App = () => {
    return (
        <div>
            {/* <Navbar/>
            <NavbarCBC/> */}
            <State/>
            
            <h1>This is App Component</h1>

            <Counter/>
        </div>
    )
}

export default App;