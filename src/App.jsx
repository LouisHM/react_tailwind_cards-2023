import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


import useFetch from './hooks/useFetch'
import Card from './components/Card.jsx'
import './App.css'

export default function App() {
  const [user, setUser] = useState('QuincyLarson');
  const [darkMode, setDarkMode] = useState(false);
  const { data, isLoading, error } = useFetch(`https://api.github.com/users/${user}`);

  if (data) console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(e.target.user.value);
  }

  return (
    <>
      <div className={`flex flex-col text-txtColor items-center gap-4 ${darkMode ? 'dark' : ''}`}>
          <div className='flex flex-row items-center justify-between w-full'>
            <label htmlFor="user" className={`block text-sm font-bold mb-2`}>
              devfinder
            </label>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={` py-2 px-4 rounded-md focus:outline-none focus:ring bg-none flex gap-2 items-center`}
            >
              <p className=''>{darkMode ? 'LIGHT' : 'DARK'}</p>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="fa-regular" />
            </button>
          </div>
        <div className={`max-w-xs p-2 shadow-md rounded-md bg-bgColor`}>
          <form className="flex flex-row items-center justify-center  gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user"

              placeholder="Username"
              className={`w-full p-2 border border-gray-300 rounded-md placeholder:text-txtColor focus:outline-none focus:ring focus:border-blue-300 bg-bdColor`}
            />
            <button
              type="submit"
              className={`bg-bdColor hover:bg-bdColor py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-green-300`}
            >
              Chercher
            </button>
          </form>
        </div>
        {isLoading && <p className={``}>Chargement...</p>}
        {error && <p className={``}>{error}</p>}
        {data && <Card data={data} darkMode={darkMode} />}
      </div>
    </>
  )
}