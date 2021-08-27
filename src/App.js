import Tracker from './components/Tracker'
import Header from './layout/Header';

//Main App component
function App() {
  
  return (
    <div className="App">
          <Header />
          <Tracker /> 
    </div>
  );
}

//exports to be used in other files
export default App;
