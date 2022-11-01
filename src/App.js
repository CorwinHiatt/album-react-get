
import {  useState } from "react";
import AlbumList from './components/AlbumList';
import Header from './components/Header';
import './App.css';
import AddAlbum from "./components/AddAlbum";

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="App">
     <Header />
     <AlbumList  toggle={toggle}/>                   
     <AddAlbum setToggle={setToggle} toggle={toggle}/>
                                            {/* switch ^ */}
    import {  } from "module";
    </div>
  );
}

export default App;
