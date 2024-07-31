import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductProvider } from './context/ProductProvider'
import ProductList from './components/products/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductProvider>
        <ProductList/>
      </ProductProvider>

</>
  )
}

export default App
