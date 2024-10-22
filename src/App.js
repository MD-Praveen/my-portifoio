import React, { Suspense } from 'react'


// components
import Navbar from './Components/Navbar/Navbar'


// Loading
import LoadingSnippet from './Components/Snippet/LoadingSnippet'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Suspense fallback={<LoadingSnippet />}>
      <Navbar />
      <div>
        <Home />
      </div>
    </Suspense>
  )
}

export default App