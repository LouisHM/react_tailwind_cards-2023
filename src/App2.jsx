import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [perso, setPerso] = useState({});
  const [loading, setLoading] = useState({true});
  const [count, setCount] = useState(0);

  const fetchData = async function (){
    const response = await fetch ('https://randomuser.me/api');
    const data = await response.json();
    setPerso(data.results[0]);
    setLoading(false);
  };

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-3xl font-bold'>Hello</h1>
      <div>{loading ? "Chargement..." : <Card perso = {perso} />}</div>
    </>
  )
}