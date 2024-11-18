
import Nursery from "../../assets/IMAGES/nursery.jpg";
import Sound2 from "../../assets/IMAGES/SOUND2.jpg";
import Mon2 from "../../assets/IMAGES/EXTRA.jpg";
import Smart from "../../assets/IMAGES/smart.jpg";
import Science from "../../assets/IMAGES/science lab.jpg";


function Emelogu() {
    return (
      <div className="flex h-auto flex-col gap-3 bg-white pb-5 lg:pb-10">
        <div className="cursor-pointer ">
          <figure>
            <img src={Nursery} alt="" className="lg:h-[100%] w-full" />
          </figure>
        </div>
        <div className="h-[20vh] w-full bg-white text-textOrange flex items-center justify-center">
          <h1 className="name w-full h-[100%] flex items-center justify-center text-center text-sm md:text-2xl lg:text-3xl font-bold cursor-pointer hover:underline lg:hover:text-2xl">UNLOCK YOUR POTENTIAL AT EMELOGU CAMPUS</h1>
        </div>
        <div className="mx-auto px-5 w-full lg:w-[95%] lg:h-[70vh] lg:flex gap-4 items-center justify-center bg-white">
          <figure className="flex-1 h-[100%] md:border-8 md:px-4 border-white rounded-md lg:rounded-2xl lg:hover:shadow-lg lg:hover:border-4">
            <img src={Sound2} alt="" className="lg:h-[100%] w-full rounded-md   lg:rounded-2xl" />
          </figure>
          <p className="h-[100%] w-full flex-1 flex items-center justify-center py-4 text-justify md:px-4 lg:px-6 text-slate-900 text-sm md:text-2xl lg:text-xl cursor-pointer ">
            Located in the heart of the cityof Aba, Emelogu Campus is the flagship campus of Experience Academy. This campus boasts of  her ability to inspire innovation and creativity, with cutting-edge technology and modern infrastructure. Our students enjoy a vibrant and dynamic learning environment, with spacious classrooms, well-equipped laboratories, and a vast library. <br /> <br /> At Emelogu Campus, we offer a wide range of programs in Science  and Arts.  Our experienced teachers  personalized attention and mentorship, helping students achieve their academic and career goals.
          </p>
        </div>
        <h1 className="name lg:h-[20vh] hover:underline w-full text-textOrange hover:text-darkBlue cursor-pointer font-bold md:text-2xl md:mt-4 lg:text-3xl hover:text-2xl flex items-center justify-center">OUR KEY FEATURES</h1>
        <div className="w-full h-[130vh] md:h-[180vh] md:px-4  mx-auto py-10 px-5   flex flex-col lg:flex-row items-center justify-center lg:h-[70vh] lg:w-[95vw] gap-5  lg:mx-5 lg:mb-2  lg:rounded-md hover:">
          <figure className="flex w-full flex-col lg:flex-1 items-center justify-between  h-[40vh] md:h-[55vh]  lg:h-[60vh] rounded-md lg:rounded-2xl hover:shadow-md lg:hover:border-4 border-white">
            <img src={Smart} alt="" className="h-[30vh] md:h-[45vh] lg:h-[50vh] w-full rounded-t-md lg:rounded-t-2xl" />
            <figcaption className="h-[10vh] w-full lg:h-[10vh] flex items-center justify-center rounded-b-md md:text-2xl lg:text-xl lg:rounded-b-2xl bg-lightBlue hover:bg-textOrange text-darkBlue font-bold text-center hover:text-white cursor-pointer"> SMART CLASSROOMS</figcaption>
          </figure>
          <figure className="flex w-full flex-col lg:flex-1 items-center justify-between  h-[40vh] md:h-[55vh]  lg:h-[60vh] rounded-md lg:rounded-2xl hover:shadow-md lg:hover:border-4 hover:border-white">
            <img src={Science} alt="" className="h-[30vh] md:h-[45vh] lg:h-[50vh] w-full rounded-t-md lg:rounded-t-2xl" />
            <figcaption className="h-[10vh] w-full lg:h-[10vh] flex items-center justify-center rounded-b-md md:text-2xl lg:text-xl lg:rounded-b-2xl bg-lightBlue hover:bg-textOrange text-darkBlue font-bold text-center hover:text-white cursor-pointer">WELL EQUIPPED SCIENCE LABORATORY</figcaption>
          </figure>
          <figure className="flex w-full flex-col lg:flex-1 items-center justify-between  h-[40vh] md:h-[55vh] 4 lg:h-[60vh] rounded-md lg:rounded-2xl hover:shadow-md lg:hover:border-4 hover:border-white">
            <img src={Mon2} alt=""  className="h-[30vh] md:h-[45vh] lg:h-[50vh] w-full rounded-t-md lg:rounded-t-2xl"  />
            <figcaption className="h-[10vh] w-full flex items-center justify-center rounded-b-md lg:rounded-b-2xl text-sm md:text-2xl lg:text-xl bg-lightBlue text-darkBlue font-bold hover:bg-textOrange hover:text-white cursor-pointer">EXTRA CURRICULAR ACTIVITIES</figcaption>
          </figure>
        </div>
      </div>
    )
  }
  
  export default Emelogu