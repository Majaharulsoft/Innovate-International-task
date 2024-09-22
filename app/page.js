'use client'
import { IoIosArrowDown,IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import next from './assets/next.png'
import { IoFilterSharp,IoMenuOutline  } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import {  } from "react-icons/io";
import { useEffect, useState } from "react";




export default function Home() {

  const [divone,setDivone]=useState(true)
  const [divtwo,setDivtwo]=useState(false)
  const [divthree,setDivthree]=useState(false)
  const [divfour,setDivfour]=useState(false)
  const [divfive,setDivfive]=useState(false)
  const [divsix,setDivsix]=useState(false)
  const [divseven,setDivseven]=useState(false)


  const [slideone,setSlideone]=useState(true)
  const [slidetwo,setSlidetwo]=useState(false)
  const [slidethree,setSlidethree]=useState(false)
  const [slidefour,setSlidefour]=useState(false)
  const [count, setCount] = useState(0);

  const [nav,setNav]=useState(false)

 
  useEffect(()=>{
    let colordiv = document.querySelector('.colordiv')
    let one = document.querySelector('.one')
    let two = document.querySelector('.two')
    let three = document.querySelector('.three')
    let four = document.querySelector('.four')
    let five = document.querySelector('.five')
    let six = document.querySelector('.six')
    let seven = document.querySelector('.seven')



    one.addEventListener('click',function(){
      setDivone(true)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    two.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(true)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    three.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(true)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    four.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(true)
      setDivfive(false)
      setDivsix(false)
      setDivseven(false)
    })
    five.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(true)
      setDivsix(false)
      setDivseven(false)
    })

    six.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(true)
      setDivseven(false)
    })
    seven.addEventListener('click',function(){
      setDivone(false)
      setDivtwo(false)
      setDivthree(false)
      setDivfour(false)
      setDivfive(false)
      setDivsix(false)
      setDivseven(true)
    })

    
  },[])

 

  const handleNext =()=>{
    setCount(count + 1)
    if (count == 0) {
      
      setSlideone(false)
      setSlidetwo(true)
    }else if(count==1){
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(true)
      
    }else if (count==2) {
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(false)
      setSlidefour(true)
    }else if (count == 3) {
      setCount(count-1)
      
      
      
    }
    
    
    
  }
  const handlePrev =()=>{
    setCount(count-1)
    if (count == 3) {
      setSlideone(false)
      setSlidetwo(false)
      setSlidethree(true)
      setSlidefour(false)
    }else if (count == 2) {
      setSlideone(false)
      setSlidetwo(true)
      setSlidethree(false)
      setSlidefour(false)
    }else if (count == 1) {

      setSlideone(true)
      setSlidetwo(false)
      setSlidethree(false)
      setSlidefour(false)
    }
    
    
    
  }
  


  return (
    <>

    {/* header part  */}

  <div className="lg:hidden flex justify-between items-center p-[20px] bg-[#363636] ">
    <div>
      <Image
      src={next}
      width={50}
      height={50} 
      />
    </div>
    <div>
    <IoMenuOutline className={`text-[50px] text-white cursor-pointer ${nav ?'hidden' : 'block'}`} onClick={()=>setNav(true)} />
    <ImCross className={`text-[30px] text-white cursor-pointer ${nav ?'block' : 'hidden'}`} onClick={()=>setNav(false)}/>
    </div>
  </div>

    <nav className={`bg-[#363636] border-b-[1px] border-[#000]  navbar ${!nav ? 'hidden' : ''} lg:block`}>
      <div className="container">
        <div className="nav_main lg:flex justify-between items-center py-[30px] px-[20px] 2xl:px-[0px]">
          <div>
            <ul className="text-[24px] lg:flex 2xl:gap-[50px] gap-[25px] text-[#fff]  ">
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Home <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Event <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Contact <IoIosArrowDown /></a>
              </li>
              <li className="cursor-pointer py-[10px] md:py-[0]">
                <a className="flex gap-[10px] items-center">Blog <IoIosArrowDown /></a>
              </li>
            </ul>
          </div>
          <div className=" relative mt-[10px] lg:mt-[0px]">
            <input className="focus:outline-none py-[10px] pl-[15px] pr-[50px] rounded-full " placeholder="Search"/>
            <FaSearch className="absolute top-[12px] right-[48%] sm:right-[62%] md:right-[68%] lg:right-[15px]   text-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>

    {/* slider part start */}
    <section className="  overflow-x-hidden pt-[50px] relative" >
      <div className="slider_main">
        <div className="lg:h-[150px] h-[100px]"></div>
        <div className=" bg-gradient-to-t from-[#6BE6A8] to-[#3C805D]">
          <div className="container">
          <div className="w-[430px] lg:py-[150px] pt-[150px] 2xl:pt-[0px]   text-[#000000] mx-auto sm:mx-[20px] 2xl:mx-0 ">
          <h1 className="text-[40px] font-bold ">Overveiw</h1>
          <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className={`absolute top-0 duration-300 ${slideone ? ' pt-20 xl:right-[-15%] right-[-100%] sm:right-[-75%]' : 'xl:right-[0%] right-[-60%] sm:right-[-40%]'} ${slidethree ? ' xl:right-[20%] right-[-25%] sm:right-[-15%]' : ''} ${slidefour ? ' xl:right-[30%] right-[80px] sm:right-[10%]' : ''}`}>
      <div className="flex gap-[50px] ">
        <div className={`${slideone ? 'lg:w-[328px] lg:h-[426px] w-[250px] h-[300px] ' : 'lg:w-[224px] lg:h-[304px] w-[150px] h-[200px]'} bg-[#FF9A9A] slide slide1 duration-300`}></div>
        <div className={`${slidetwo ? 'lg:w-[328px] lg:h-[426px] w-[250px] h-[300px] ' : 'lg:w-[224px] lg:h-[304px] w-[150px] h-[200px]'} bg-[#CFAAFF] slide  slide2 duration-300 active`}></div>
        <div className={`${slidethree ? 'lg:w-[328px] lg:h-[426px] w-[250px] h-[300px] ' : 'lg:w-[224px] lg:h-[304px] w-[150px] h-[200px]'} bg-[#A0FCD9] slide slide3 duration-300`}></div>
        <div className={`${slidefour ? 'lg:w-[328px] lg:h-[426px] w-[250px] h-[300px] ' : 'lg:w-[224px] lg:h-[304px] w-[150px] h-[200px]'}  bg-[#FF9A9A] slide slide4 duration-300`}></div>
      </div>
      </div>
      <div className="flex gap-[15px] absolute right-[30px] lg:top-[50%] top-[35%]">
        <button className={`h-[25px] w-[25px] rounded-full border-[2px] border-[#000] flex justify-center items-center prev ${count == 0 ? 'z-[-10]' : ''}`} onClick={handlePrev}><IoIosArrowBack /></button>
        <button className={`h-[25px] w-[25px] rounded-full border-[2px] border-[#000] flex justify-center items-center next ${count == 3 ? 'z-[-10]' : ''}`}onClick={handleNext}><IoIosArrowForward /></button>
      </div>
    </section>
    {/* slider part end */}

  {/* collection part start */}
  <section className="bg-collection bg-cover bg-no-repeat bg-center ">
    <div className="container">
      <div className="collection_main lg:flex items-center p-[20px] lg:p-[80px]  2xl:p-[0px]">
        <div className="lg:w-1/2  flex gap-[30px] py-[20px] px-[60px] lg:px-[0px]">
        <div className="">
        <div className={`xl:w-[408px] xl:h-[408px] w-[200px] h-[200px] rounded-[30px] ${divone ? 'bg-[#2E4E3E]' : ''} ${divtwo?'bg-[#26DBDB]':''} ${divthree?'bg-[#B126DB]':'' } ${divfour?'bg-[#26DBDB]':''} ${divfive?'bg-[#2E4E3E]':''} ${divsix?'bg-[#26DBDB]':''} ${divseven?'bg-[#B126DB]':''} colordiv`}></div>
        <div className="flex justify-between mt-[30px]">
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#2E4E3E] cursor-pointer five ${divfive ? 'outline outline-[#000] outline-4': ''} `}></div>
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer six ${divsix ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#B126DB] cursor-pointer seven ${divseven ? 'outline outline-[#000] outline-4': ''}`}></div>
        </div>
        </div>
        <div className="flex flex-col xl:gap-[25px] gap-[15px]">
        <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#2E4E3E] ${divone ? 'outline outline-[#000] outline-4': ''} cursor-pointer one`}></div>
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer two ${divtwo ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#B126DB] cursor-pointer three ${divthree ? 'outline outline-[#000] outline-4': ''}`}></div>
          <div className={`xl:w-[120px] xl:h-[120px] w-[60px] h-[60px] rounded-[15px] bg-[#26DBDB] cursor-pointer four ${divfour ? 'outline outline-[#000] outline-4': ''}`}></div>

        </div>
        </div>
        <div className="lg:w-1/2">
        <div className="w-[430px]  text-[#000000] xl:pl-[20px] 2xl:pl-[0px]">
          <h1 className="text-[40px] font-bold">Collection Featured</h1>
          <p className="text-[20px]">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in  vol uptate velit esse cillumsunt in culpa</p>
          </div></div>
      </div>
    </div>
  </section>
  {/* collection part end */}



  {/* Discover part start */}


  <section className="py-[50px]">
    <div className="container">
      <div className="discomer_main p-[20px]  2xl:p-[0px]">


        <div className="discover_header">
          <h1 className="text-[40px] font-bold">DISCOVER MORE</h1>
          <div className="discover_button flex justify-between lg:items-center mt-[30px]">
          <div className=" flex gap-[15px] flex-wrap">
            <button className="py-[10px] px-[18px]  rounded-full bg-[#4000FF] text-white">All Categories</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Art</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Celebrities</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Gaming</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Sport</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Sport</button>
            <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full">Music</button>
          </div>
          <div>
          <button className="py-[10px] px-[18px] bg-[#E9E9E9] rounded-full flex items-center gap-[5px] text-[#4000FF] text-[10px] lg:text-[15px]"><IoFilterSharp /> All Filters</button>
          </div>
          </div>
        </div>




        <div className="discover_items py-[50px]">
          <div className=" sm:flex lg:justify-between mb-[40px] sm:gap-[20px] lg:gap-[0px] sm:flex-wrap">
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[20px] lg:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[15px] lg: my-[0px] my-[20px] lg:my-[0px] mx-auto lg:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#B126DB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[20px] lg:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#26DBDB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[20px] lg:my-[0px] mx-auto lg:mx-0 lg:mt-[20px] xl:mt-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex lg:justify-between sm:gap-[20px] lg:gap-[0px] sm:flex-wrap">
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[20px] sm:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#B126DB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 my-[20px] sm:my-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#26DBDB] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">Art stuff</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
            <div className="w-[290px]  border boder-[2px] rounded-[20px] p-[15px] hover:text-[#9747FF] duration-300 cursor-pointer mx-auto lg:mx-0 lg:mt-[20px] xl:mt-[0px]">
              <div className="w-[260px] h-[210px] rounded-[20px] bg-[#2E4E3E] "></div>
              <div className=" relative mt-[-10px]">
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[10px] z-[4]">
                <Image
                src={img5}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[25px] z-[3]">
                <Image
                src={img6}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[40px] z-[2]">
                <Image
                src={img7}
                width='100%'
                height='100%'
                />
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-red-500 outline outline-2 outline-white absolute top-0 left-[55px] z-[1]">
                <Image
                src={img8}
                width='100%'
                height='100%'
                />
                </div>
              </div>
              <div className="py-[30px]">
                <h5 className="text-[20px] font-bold">ABCD</h5>
                <div className="flex justify-between py-[25px]">
                  <span>598 TK</span>
                  <span>1 of 09</span>
                </div>
                <div className="flex justify-between ">
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                  <button className=" px-[20px] py-[5px] bg-gradient-to-r from-[#651BC6] to-[#9747FF] rounded-full text-white  hover:from-purple-500 hover:to-blue-500 ">DSVBD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




  {/* Discover part end */}






    </>
  );
}



