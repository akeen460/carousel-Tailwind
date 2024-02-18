import { useState } from "react"
import { IoMdMenu } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";


function Nav() {

    const[clicked, setClicked] = useState(false);

    function clickbtn(){
        setClicked(!clicked);
        console.log(clicked);
    }
  return (
   <>
    <section>
        <nav className="flex flex-row items-center justify-between px-8 py-2 bg-red-300 ">
            <h1 className="text-xl italic font-bold text-green-600 lg:text-4xl">Navigation</h1>
            <ul className="items-center justify-between hidden gap-5 text-3xl font-bold lg:flex">
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Sign Up </a></li>

            </ul>
            <button onClick={clickbtn} className="flex text-3xl lg:hidden">{clicked?<CiCirclePlus />:<IoMdMenu  />}</button>
           
        </nav>
    </section>
    <div>
        {clicked &&  <ul className="flex flex-col gap-5 text-[20px] font-bold bg-green-400 mx-3 w-[40%] p-2 absolute z-30  text-3xl lg:hidden " >
                <li className="border-b-2 border-white border-1"><a href="">Home</a></li>
                <li className="border-b-2 border-white border-1"><a href="">Contact</a></li>
                <li className="border-b-2 border-white border-1"><a href="">About</a></li>
                <li ><a href="">Sign Up </a></li>

        </ul>}
        
    </div>
   
   </>
  )
}

export default Nav