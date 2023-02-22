// import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import { Search } from './components/Search';


function App() {
  const [title, setTitle] = useState('Internet Media Drum & Bass');

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => setTitle('Very Mature Tomatoes')}>Whaaaat ?</button>
      <Search />
    </div>
  )
}

export default App
