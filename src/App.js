import AddAlbum from './components/AddAlbum';
import AlbumList from './components/AlbumList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <AlbumList />
     <AddAlbum />
    </div>
  );
}

export default App;
