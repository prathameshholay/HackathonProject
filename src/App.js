import './App.css';
import Home from './Components/Home.jsx'
import DataProvider from './context/DataProvider.jsx';



function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;


