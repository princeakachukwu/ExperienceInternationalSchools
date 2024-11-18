// import React from 'react'
import sound3 from "../../assets/IMAGES/SOUND3.jpg";
import sound1 from "../../assets/IMAGES/01.jpg";
import sound5 from "../../assets/IMAGES/SOUND5.jpg";
import sound6 from "../../assets/IMAGES/03.jpg";
import sound7 from "../../assets/IMAGES/A10.png";
import sound2 from "../../assets/IMAGES/02.jpg";
import A1 from "../../assets/IMAGES/A1.png";
// import x3 from "../../assets/IMAGES/x3.jpg";
import x4 from "../../assets/IMAGES/x4.jpg";
import x1 from "../../assets/IMAGES/x1.jpg";
import x2 from "../../assets/IMAGES/x2.jpg";
import x5 from "../../assets/IMAGES/x5.jpg";
import x6 from "../../assets/IMAGES/x6.jpg";
import x7 from "../../assets/IMAGES/x7.jpg";



function Programs() {
  return (
    <div className="bg-white h-[600vh]">
      <div className="sound h-[80vh] w-full  flex flex-col gap-3 items-center justify-center  text-3xl"> 
        <h1 className="text-textOrange text-[40px] font-bold">SOUND OF HOPE <span className="text-white">FOUNDATION</span></h1>
        <h1 className="bg-textOrange text-white py-2 px-4 box-border rounded-lg text-3xl font-bold"> FOR ORPHANS AND THE LESS PRIVILEGED</h1>
      </div>
      <p className="h-[50vh] text-center flex items-center justify-center px-36 bg-white text-xl gap-3 text-gray-600">This is the charity arm of Experience International Schools. It was founded in the year 2009. <br />  The Vision bearer, Dr Ekeoma Richard was inspired to go to the streets and bring in as much possible those who could not afford basic education and give them scholarships. <br />  He obeyed. Since inception in 2009, there have been more than 500 beneficiaries of this foundation. <br /> Psalm 41:1-3. </p>
      <div className="flex flex-wrap items-center justify-center  box-border ">
        <figure className="w-[33.33%]"><img src={sound3} className="w-[100%] h-[100%]" />  </figure>
        <figure className="w-[33.33%] bg-textOrange"><img src={sound1} className="" />  </figure>
        <figure className="w-[33.33%]"><img src={sound5} className="w-[100%] h-[100%]" />  </figure>
        <figure className="w-[33.33%] bg-green-400 flex items-center justify-center"><img src={sound6} className=" h-[100%] flex items-center justify-center" />  </figure>
        <figure className="w-[33.33%]"><img src={sound7} className="w-[100%] h-[100%]" />  </figure>
        <figure className="w-[33.33%]"><img src={sound2} className="" />  </figure>
      </div>
      <figure className=""><img src={A1} className="" />  </figure>
      <div>
        <div className="sound1 flex h-[100vh] w-full items-center justify-center ">
          <h1 className="text-5xl font-bold text-white bg-textOrange  p-2 rounded-lg">CHRISTMAS PARTY</h1>
        </div>
        <div className="h-[100vh] w-full flex flex-col items-center gap-1 px-10 py-4 justify-between bg-white">
          <div className="flex h-[50%] gap-1">
            <figure className="flex-1 rounded-lg"><img src={x1} className="h-[100%] w-[100%] rounded-lg" />  </figure>
            <figure className="flex-1 rounded-lg"><img src={x2} className="h-[100%] w-[100%] rounded-lg" />  </figure>
            <figure className="flex-1 rounded-md"><img src={x5} className="h-[100%] w-[100%] rounded-lg" />  </figure>
          </div>
          <div className="flex h-[50%] gap-1">
            <figure className="flex-1 rounded-lg"><img src={x6} className="h-[100%] w-[100%] rounded-lg" />  </figure>
            <figure className="flex-1 rounded-lg"><img src={x7} className="h-[100%] w-[100%] rounded-lg" />  </figure>
            <figure className="flex-1 rounded-lg"><img src={x4} className="h-[100%] w-[100%] rounded-lg" />  </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs