import React, { Suspense } from 'react'


// components
import Navbar from './Components/Navbar/Navbar'


// Loading
import LoadingSnippet from './Components/Snippet/LoadingSnippet'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <Suspense fallback={<LoadingSnippet />}>
      <Navbar />
      <Home />
    </Suspense>
  )
}

export default App