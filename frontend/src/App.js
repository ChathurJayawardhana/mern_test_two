import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>chathura jayawardhana</h1>
      <button onClick={()=>navigate('/users')}>User</button>
      
   
    </div>
    
  );
}

export default App;
