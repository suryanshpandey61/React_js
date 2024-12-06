import Logo from './assests/fkheaderlogo_exploreplus-44005d.svg'
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";



const FlipkartNavbar = () => {
    return (
        <div className=" flex w-full items-center justify-between">

            {/* logo div  */}
             <div className='ml-[-100px]'>
                <img  className='w-[300px]' src={Logo}  />
             </div>

             {/* search bar  */}
             <div className='flex'>
             <FaSearch className='absolute mr-1'/>

                <input type='text' placeholder='Search for Products, Brands and More ' className='w-[600px] h-[50px] border  rounded-md'/>
             </div>

             {/* 3 icons */}
             <div className='flex'>

                {/* login btn  */}
                <div className='flex hover:bg-blue-400 px-5 py-4 gap-x-1 rounded-md hover:text-white hover:cursor-pointer'>
                  <FaRegUserCircle />Login <IoIosArrowDown />
                </div>

                {/* cart btn  */}
                <div className='flex hover:bg-green-400 px-5 py-4 gap-x-1 rounded-md hover:text-white hover:cursor-pointer'>
                  <MdOutlineShoppingCart />Cart
                </div>

                {/* become seller  */}
                <div className='flex hover:bg-yellow-400 px-5 py-4 gap-x-1 rounded-md hover:text-white hover:cursor-pointer'>
                <FaShop /> Become a Seller
                </div>

                {/* vertical 3 dot div  */}
                <div className='flex hover:bg-red-400 px-5 py-4 gap-x-1 rounded-md hover:text-white hover:cursor-pointer'>
                <BsThreeDotsVertical />
                </div>
             </div>
        </div>
           
       
    )
}
export default FlipkartNavbar;