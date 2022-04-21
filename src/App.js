import './App.css';
import './Content.js';
import './tailwind.css'
import Content from './Content.js';
function App() {
  return (
    <div className="App bg-black" style={{
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
    }}>
      
      <Content />
    </div>
  );
}

export default App;
