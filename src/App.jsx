//import components
import AppShowList from './components/AppShowList.jsx'

//import Data
import articles from './data/articoli.js'

function App() {


  return (
    <>

      <div className="container py-2">
        <h2>Articles</h2>
      </div>
      <AppShowList items={articles} />
    </>
  )
}

export default App
