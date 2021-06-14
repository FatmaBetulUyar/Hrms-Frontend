
import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
     <Navi></Navi>

     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
