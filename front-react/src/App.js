import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://localhost:8000/viability-results/`)
      console.log('result',result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    

    fetchItems()
  }, [])

  return (
    <div>
      <NavBar />
      <Home isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
}

export default App;
