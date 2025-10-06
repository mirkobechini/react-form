import {useState} from 'react'

//import components
import AppShowList from './components/AppShowList.jsx'
import AppForm from './components/AppForm.jsx'

//import Data
import articles from './data/articoli.js'

function App() {

  const [liveArticles, setLiveArticles] = useState(articles)

  return (
    <>

      <AppShowList items={liveArticles} />
      <AppForm items={liveArticles} setItems={setLiveArticles} />
    </>
  )
}

export default App
