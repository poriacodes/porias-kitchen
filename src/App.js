import React, {useEffect} from 'react'
import {Route,Routes} from 'react-router-dom'
import {CreateContainer, MainContainer, Header} from "./components"
import Menu from "./pages/Menu"
import About from './pages/About'
import Services from './pages/Services'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";


const App=()=> {

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <AnimatePresence exitBeforeEnter>
        <div className='w-full h-auto flex flex-col bg-white '>

        <Header/>

        <main className=' mt-14 px-3 md:mt-24 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='/createItem' element={<CreateContainer/>}/>
            <Route path='/createItem' element={<CreateContainer/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
        </main>
        </div>
      
    </AnimatePresence>
  
  )
}

export default App