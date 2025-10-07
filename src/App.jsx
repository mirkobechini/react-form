import { useState } from 'react'

//import components
import AppShowList from './components/AppShowList.jsx'
import AppForm from './components/AppForm.jsx'

//import Data
import articles from './data/articoli.js'

function App() {

  const [liveArticles, setLiveArticles] = useState(articles)

  function addLiveArticles(newArticle) {
    const newId = liveArticles[liveArticles.length - 1].id + 1
    setLiveArticles([...liveArticles, { id: newId, title: newArticle, content: "" }])
  }

  return (
    <>

      <AppShowList items={liveArticles} setItems={setLiveArticles} />
      <AppForm setItems={addLiveArticles} />
    </>
  )
}

export default App
