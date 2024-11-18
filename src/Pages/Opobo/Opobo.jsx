
import se1 from "../../assets/IMAGES/se2.jpg";
import se2 from "../../assets/IMAGES/ser2.jpg";
import se3 from "../../assets/IMAGES/se3.jpg";
import se4 from "../../assets/IMAGES/se4.jpg";
import D1 from "../../assets/IMAGES/D1.jpg";
import D2 from "../../assets/IMAGES/D2.jpg";
import D3 from "../../assets/IMAGES/D3.jpg";
import D4 from "../../assets/IMAGES/D4.jpg"




function Opobo() {
    return (
      <div className="mx-auto bg-white flex items-center box-border lg:justify-start lg:items-start  md:h-[388vh] lg:h-[330vh] flex-col lg:bg-white">
        <div className="opobo h-[100vh] w-full flex flex-col items-center justify-center bg-white">
          <h3 className=" flex justify-center items-center text-center  font-bold text-2xl lg:text-4xl text-lightBlue cursor-pointer">Discover Your Passion at </h3>
          <h1 className="name  h-[30vh]  font-bold flex items-center justify-center text-center text-6xl lg:text-8xl text-white cursor-pointer">OPOBO CAMPUS!</h1>
        </div>
        <p className="mx-auto bg-white flex items-center justify-center text-2xl md:text-3xl lg:text-2xl text-slate-900 text-justify lg:text-center px-10 lg:px-36 h-[110vh] md:h-[70vh] lg:h-[90vh] cursor-pointer">Nestled in a serene and picturesque setting, Opobo Campus is the perfect haven for students seeking a holistic learning experience in a very quiet environment. This campus specializes in kindergarten , Basic and Junior secondary classes  with a focus on creativity, critical thinking, and cultural enrichment. <br /> <br /> Our students enjoy a supportive and inclusive community, with access to smart classrooms  including a strong emphasis on Montessori  style of education and a botanical garden. <br /><br /> Our teachers are renowned experts in their fields, providing guidance and inspiration to help students achieve their full potential.
        </p>
        <h1 className="h-[20vh] w-[100%] lg:w-full flex items-center justify-center text-center font-bold text-3xl hover:text-4xl bg-white text-textOrange border-t-8 border-lightBlue cursor-pointer hover:text-lightBlue">OUR KEY FEATURES</h1>
        <div className="flex flex-col w-full box-border lg:h-[50vh]  items-center justify-between ">
          <h1 className="h-[10vh] w-full  flex items-center justify-center px-10 lg:px-0 text-center font-bold text-2xl text-darkBlue hover:text-textOrange cursor-pointer ">Serene and Picturesque Campus Setting
          </h1>
          <div className="flex box-border flex-col md:flex-row md:flex-wrap h-auto lg:h-[45vh] w-[full] items-center justify-between md:gap-5 lg:gap-3 gap-10  px-6 lg:px-10  py-4 lg:mt-5 ">
            <figure className=" md:w-[48%] lg:flex-1 md:h-[40vh] flex items-center justify-center  w-[full] shadow-md rounded-md cursor-pointer hover:border-4 hover:border-white">
              <img src={se1} alt="" className="h-[100%] w-[full] rounded-md" />
            </figure>
            <figure className=" md:w-[48%] md:h-[40vh] lg:flex-1  flex items-center justify-center  w-[full] shadow-md rounded-md cursor-pointer hover:border-4 hover:border-white">
              <img src={se2} alt="" className="h-[100%] w-[100%] rounded-md shadow-md" />
            </figure>
            <figure className=" md:w-[48%] md:h-[40vh] lg:flex-1  flex items-center justify-center w-full shadow-md rounded-md cursor-pointer hover:border-4 hover:border-white">
              <img src={se3} alt="" className="h-[100%] w-[100%] rounded-md" />
            </figure>
            <figure className=" md:w-[48%] md:h-[40vh] lg:flex-1  flex items-center justify-center  w-[full] shadow-md rounded-md cursor-pointer hover:border-4 hover:border-white ">
              <img src={se4} alt="" className="h-[100%] w-[100%] rounded-md" />
            </figure>
          </div>
        </div>
        <div className="flex flex-col w-full box-border lg:h-[50vh] lg:mt-10  items-center justify-between ">
          <h1 className="h-[10vh] w-[full]  flex items-center justify-center text-center font-bold text-2xl md:px-20 text-darkBlue cursor-pointer hover:text-textOrange ">Specialized Facilities for Arts, Humanities, and Social sciences
          </h1>
          <div className="flex box-border flex-col md:flex-row md:flex-wrap h-auto lg:h-[45vh] w-[full] items-center justify-between md:gap-5 lg:gap-3 gap-10  px-6 lg:px-10  py-4 lg:mt-5 lg:w-[100%] ">
            <figure className=" md:w-[48%] lg:flex-1 md:h-[40vh] flex items-center justify-center  w-[90vw] shadow-md rounded-md lg:w-[full] cursor-pointer hover:border-4 hover:border-white">
              <img src={D1} alt="" className="h-[100%] w-[100%] rounded-md" />
            </figure>
            <figure className=" md:w-[48%] lg:flex-1 md:h-[40vh]  md:flex items-center justify-center  w-[90vw] shadow-md rounded-md lg:w-[full] cursor-pointer hover:border-4 hover:border-white">
              <img src={D2} alt="" className="h-[100%] w-[100%]  rounded-md" />
            </figure>
            <figure className=" md:w-[48%] lg:flex-1 md:h-[40vh] flex items-center justify-center  w-[full] shadow-md rounded-md lg:w-[full] cursor-pointer hover:border-4 hover:border-white">
              <img src={D3} alt="" className="h-[100%] w-[100%]  rounded-md" />
            </figure>
            <figure className=" md:w-[48%] lg:flex-1 md:h-[40vh] flex items-center justify-center  w-[full] shadow-md rounded-md lg:w-[full] cursor-pointer hover:border-4 hover:border-white">
              <img src={D4} alt="" className="h-[100%] w-[100%]  rounded-md" />
            </figure>
          </div>
        </div>
      </div>
    )
  }
  
  export default Opobo