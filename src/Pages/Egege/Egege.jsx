
import monte from "../../assets/IMAGES/monte.jpg"
import science from "../../assets/IMAGES/science lab1.jpg"
import x5 from "../../assets/IMAGES/x5.jpg"
import career from "../../assets/IMAGES/career.jpg"


function Egege() {
    return (
      <div className="w-full  lg:w-full mx-auto box-border  flex flex-col items-start justify-start bg-white">
        <div className=" egege w-[100%] h-[50vh] lg:h-[100vh] flex flex-col items-center justify-center">
          <h3 className=" flex justify-center items-center text-center  font-bold text-2xl lg:text-4xl text-lightBlue cursor-pointer hover:text-textOrange">Transform your future at </h3>
          <h1 className="name h-[10vh]  lg:h-[30vh]  font-bold flex items-center justify-center text-center text-5xl lg:text-8xl text-white cursor-pointer hover:text-lightBlue ">EGEGE CAMPUS!</h1>
        </div>
        <div className="flex items-center justify-center lg:h-[60vh]  w-full box-border px-10 lg:px-40 text-justify lg:text-center text-2xl">
          <p className="box-border  bg-white lg:h-[100%] w-full my-10 lg:my-0 p-5 flex items-center justify-center text-center text-slate-900 cursor-pointer "> Located in a rapidly growing economic hub, Egege Campus is the ideal destination for students seeking a career-focused education. This campus comprises of all classes  ranging from kindergarten to senior secondary. She boasts of  strong emphasis on practical skills, Montessori education and professional development.
          </p>
        </div>
        <h1 className="h-[10vh] md:h-[20vh] w-full bg-lightBlue text-white text-4xl font-bold flex items-center justify-center cursor-pointer hover:text-darkBlue hover:text-3xl hover:shadow-md">KEY FEATURES</h1>
        <div className=" box-border mx-10 md:mx-0 lg:px-5  mt-20 flex gap-10  flex-col md:flex-row flex-wrap items-center justify-center md:h-[160vh] lg:h-[40vh] md:w-full lg:w-full lg:gap-3 md:gap-5  lg:mt-20">
          <figure className=" md:w-[45%] lg:flex-1  w-full h-[40vh] md:h-[45%] lg:h-[100%] rounded-md shadow-md hover:border-4 hover:border-white">
            <img src={career} alt="" className="h-[80%] w-[100%] rounded-t-md cursor-pointer"  />
            <figcaption className="flex font-bold bg-lightBlue items-center justify-center text-center h-[20%] w-full text-slate-900 rounded-b-md cursor-pointer md:text-xl lg:text-sm ">Career-based teaching styles </figcaption>
          </figure>
          <figure className="md:w-[45%] lg:flex-1  w-full h-[40vh] md:h-[45%] lg:h-[100%] rounded-md shadow-md hover:border-4 hover:border-white">
            <img src={monte} alt="" className="h-[80%] w-[100%] rounded-t-md cursor-pointer" />
            <figcaption className="flex font-bold bg-lightBlue items-center justify-center text-center h-[20%] w-full cursor-pointer text-slate-900 rounded-b-md md:text-xl lg:text-sm ">Montessori education</figcaption>
          </figure>
          <figure className="md:w-[45%] lg:flex-1  w-full h-[40vh] md:h-[45%] lg:h-[100%] rounded-md flex flex-col items-start justify-center shadow-md hover:border-4 hover:border-white">
            <img src={science} alt="" className="h-[80%] w-[100%] rounded-t-md cursor-pointer"  />
            <figcaption className="flex font-bold bg-lightBlue items-center justify-center text-center h-[20%] w-full text-slate-900 rounded-b-md cursor-pointer md:text-xl lg:text-sm ">Strong emphasis on practical skills
            </figcaption>
          </figure>
          <figure className="box-border md:w-[45%] lg:flex-1  w-full h-[40vh] md:h-[45%] lg:h-[100%] rounded-md flex flex-col items-center justify-center shadow-md hover:border-4 hover:border-white">
            <img src={x5} alt="" className="h-[80%] w-[100%] rounded-t-md cursor-pointer" />
            <figcaption className="font-bold bg-lightBlue flex items-center justify-center text-center h-[20%] w-full text-slate-900 rounded-b-md cursor-pointer md:text-xl lg:text-sm">Vibrant student community with diverse networking opportunities
            </figcaption>
          </figure>
        </div>
        <div className="lg:flex items-center justify-center lg:h-[40vh] md:mt-10  w-full box-border px-10 lg:px-40 text-justify lg:text-center text-2xl">
          <p className="box-border lg:h-[100%] w-full my-10 lg:my-0 p-5 flex items-center justify-center text-center text-slate-900 cursor-pointer ">Our students enjoy a dynamic and entrepreneurial environment, with access to state-of-the-art facilities and a serene environment. Our teachers provide mentorship and guidance, helping students launch successful careers.
          </p>
        </div>
      </div>
    )
  }
  
  export default Egege