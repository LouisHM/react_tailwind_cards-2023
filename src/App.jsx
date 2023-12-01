import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useFetch from './hooks/useFetch'
import Card from './components/Card.jsx'
import './App.css'

export default function App() {
  const [user, setUser] = useState('QuincyLarson');
  const [darkMode, setDarkMode] = useState(false);
  const { data, isLoading, error } = useFetch(`https://api.github.com/users/${user}`);

  if (data) console.log(data);

  return (
    <>
      <div className={`flex flex-col items-center gap-4 ${darkMode ? 'dark' : ''}`}>
        <div className={`max-w-md mx-auto p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-md`}>
          <label htmlFor="user" className={`block text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-600'} mb-2`}>
            Search an User
          </label>
          <div className="flex flex-row items-center justify-center gap-4">
            <input
              type="text"
              name="user"
              placeholder="Username"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 ${darkMode ? 'text-white bg-gray-600' : 'text-black bg-gray-200'}`}
            />
            <button
              type="submit"
              className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-green-300`}
            >
              Chercher
            </button>
          </div>
        </div>
        {isLoading && <p className={`text-yellow-500 ${darkMode ? 'text-white' : 'text-black'}`}>Chargement...</p>}
        {error && <p className={`text-red-500 ${darkMode ? 'text-white' : 'text-black'}`}>{error}</p>}
        {data && <Card data={data} darkMode={darkMode} />}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`bg-${darkMode ? 'yellow-500' : 'gray-800'} hover:bg-${darkMode ? 'gray-600' : 'yellow-600'} text-${darkMode ? 'black' : 'white'} py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-${darkMode ? 'gray-300' : 'yellow-300'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  )
}