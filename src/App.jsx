// import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import { MyPicture } from './components/MyPicture';
import { Search } from './components/Search';


function App() {
  const [title, setTitle] = useState('Hello World !');

  return (
    <div className="App">
      <MyPicture />
      <h1>{title}</h1>
      <button onClick={() => setTitle('Goodbye World !')}>I'm leaving</button>
      <br/><br/>
      <Search />
      


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
