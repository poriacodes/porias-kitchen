import React, {useState} from 'react';
import Logo from "../assets/logo.png";
import { MdAddShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import Avatar from '../assets/avatar.png';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {app} from "../firebase.config";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header =()=> {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user, cartShow, cartItems}, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)
  
    const login = async () => {

      if(!user){
        const {
          user : {refreshToken, providerData},
         } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: actionType.SET_USER,
          user : providerData[0], 
        });

        localStorage.setItem('user', JSON.stringify(providerData[0]));
      }else{
        setIsMenu(!isMenu);
      }
 
    };

    const logout = () => {
      setIsMenu(false)
      localStorage.clear()

      dispatch({
        type: actionType.SET_USER,
        user: null
      });
    };
    
    const showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      });
    };

  return (
    <header className=' fixed z-50 w-full p-4 px-4 md:p-6 md:px-16 bg-primary'>
        {/* desktop and tablet */}

        <div className='hidden md:flex w-full h-full items-center justify-between'>

            <Link to="/" className='flex items-center gap-2 cursor-pointer'>
               <img src={Logo} alt='logo' className=' object-cover w-36 '/> 
            </Link>

          <div className='flex items-center gap-8'>
              <motion.ul 
              initial={{opacity:0, x:200}} 
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x:200}}
                  className='flex items-center gap-8'>
                  <Link to="/"><li className='text-base text-textColor font-bold hover:text-green-400 duration-100 transition-all ease-in-out cursor-pointer'>Home</li></Link>
                  <Link to="/menu"><li className='text-base text-textColor font-bold hover:text-green-400 duration-100 transition-all ease-in-out cursor-pointer '>Menu</li></Link>
                  <Link to="/about"><li className='text-base text-textColor font-bold hover:text-green-400 duration-100 transition-all ease-in-out cursor-pointer '>About Us</li></Link>
                  <Link to="/services"><li className='text-base text-textColor font-bold hover:text-green-400 duration-100 transition-all ease-in-out cursor-pointer'>Services</li></Link>
                </motion.ul>

                <div className='relative flex items-center justify-center' onClick={showCart}>
                  <MdAddShoppingCart className='text-textColor text-2xl cursor-pointer'/>
                 {cartItems && cartItems.length > 0 && (
                   <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-white flex items-center justify-center'>
                   <p className='text-xs text-green-900 font-semibold'>{cartItems.length}</p>
                 </div>
                 )}
                </div>

                <div className='relative'>  
                  <motion.img 
                  whileTap={{scale : 0.8}} 
                  src={user ? user.photoURL : Avatar}
                  alt="user"
                  className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                  onClick={login}
                  />
                  {
                    isMenu && (
                  <motion.div
                   initial={{opacity:0, scale: 0.8}} 
                   animate={{opacity: 1.2 , scale: 1.2}} 
                   exit={{opacity: 0, scale: 0.8}} 
                  className='w-40 shadow-xl rounded-lg flex flex-col absolute md:top-12 right-0 bg-green-50'>
                    
                  {
                    user && user.email === "poriaspec@gmail.com" &&(
                    <Link to={"/createItem"}>  
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                   hover:bg-green-300 px-4 py-2 transition-all duration-100 ease-in-out text-green-900 text-lg'
                   onClick={() => setIsMenu(false)}
                   >New Item <MdAdd /> </p>
                  </Link>
                    )}
                  
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                  hover:bg-green-300 transition-all duration-100 ease-in-out text-green-900 text-lg'
                  onClick={logout}>
                    Logout <MdLogout/>
                  </p>

                </motion.div>
                    )
                  }


                </div>

          </div>
        </div>


        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'> 

        <div className='relative flex items-center justify-center' onClick={showCart}>
                  <MdAddShoppingCart className='text-textColor text-2xl cursor-pointer'/>
                  {cartItems && cartItems.length > 0 && (
                      <div className=' absolute -top-3 -right-3 w-5 h-5 rounded-full bg-white flex items-center justify-center'>
                      <p className='text-xs text-green-900 font-semibold'>{cartItems.length}</p>
                    </div>
                  )}
                </div>


        <Link to="/" className='flex items-center gap-2 cursor-pointer'>
               <img src={Logo} alt='logo' className='w-20 object-cover'/> 
            </Link>

         
            <div className='relative'>  
                  <motion.img 
                  whileTap={{scale : 0.8}} 
                  src={user ? user.photoURL : Avatar}
                  alt="user"
                  className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                  onClick={login}
                  />
                  {
                    isMenu && (
                  <motion.div
                   initial={{opacity:0, scale: 0.8}} 
                   animate={{opacity: 1.2 , scale: 1.2}} 
                   exit={{opacity: 0, scale: 0.8}} 
                  className='w-40 shadow-xl rounded-lg flex flex-col absolute top-20 right-10 bg-green-50'>
                    
                  {
                    user && user.email === "poriaspec@gmail.com" &&(
                    <Link to={"/createItem"}>  
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                  hover:bg-green-300 transition-all duration-100 ease-in-out text-primary text-base '  onClick={() => setIsMenu(false)}>New Item <MdAdd /> </p>
                  </Link>
                    )}

             <ul className='flex flex-col'>
                  <Link to="/"><li className='text-base text-primary font-bold hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-red-300 px-4 py-2' onClick={() => setIsMenu(false)}>Home</li></Link>
                  <Link to="/menu"><li className='text-base text-primary font-bold hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-red-300 px-4 py-2' onClick={() => setIsMenu(false)}>Menu</li></Link>
                  <Link to="/about"><li className='text-base text-primary font-bold hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-red-300 px-4 py-2 ' onClick={() => setIsMenu(false)}>About Us</li></Link>
                  <Link to="/services"><li className='text-base text-primary font-bold hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-red-300 px-4 py-2' onClick={() => setIsMenu(false)}>Services</li></Link>
            </ul>
                  
                  <p className='m-2 p-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer 
                  bg-green-400 hover:bg-gray-500 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                  >
                    Logout <MdLogout/> 
                  </p>

                </motion.div>
                    )
                  }


                </div>


        </div>

    </header>
  )
}

export default Header