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
      <footer>Made with lots of ☕ by <a href="https://patreon.com/StarNumber12046">StarNumber12046</a> absolutely not at 🏫</footer>
    </div>
  );
}

export default App;
