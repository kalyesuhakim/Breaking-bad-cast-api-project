import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'
const App = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  return (
    <>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </>
  )
}

export default App
