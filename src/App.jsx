// import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import { Search } from './components/Search';


function App() {
  const [title, setTitle] = useState('Very Mature Tomatoes');

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => setTitle('Internet Media\'s Debacles & Bests')}>Whaaaat ?</button>
      <Search />
    </div>
  )
}

export default App
