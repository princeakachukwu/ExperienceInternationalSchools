// import React from 'react'
import Award from "../../assets/IMAGES/about-pix.png";
// import mission from "../../assets/IMAGES/MISSION2.png";
import mission1 from "../../assets/IMAGES/mission.png";
import Home3 from "../../assets/IMAGES/home3.jpg";
import Director from "../../assets/IMAGES/chimex.jpg";
import Director1 from "../../assets/IMAGES/Directoress.png";
import head1 from "../../assets/IMAGES/MISS_CHESA_OLU-_HEAD_OF_EGEGE_CAMPUS.png";
import head2 from "../../assets/IMAGES/MRS_ADAEZE_ISAAC-DEAN_OF_STUDIES.png";
import head3 from "../../assets/IMAGES/MRS_BLESSING_SAMUEL-ADMIN_SECRETARY.png";
import head4 from "../../assets/IMAGES/MRS_IFEOMA_EMMANUEL-HEADMISTRESS.png";
import head5 from "../../assets/IMAGES/MRS_PEACE_FRANKLIN-HEAD_OF_OPOBO_CAMPUS.png";
import head6 from "../../assets/IMAGES/MRS_CHIOMA_OFFOR-PRINCIPAL.png";


function About() {
  return (
    <div className="h-[1385vh] md:h-[1155vh] lg:h-[665vh] bg-white md:bg-red-500  ">
      <h1 className="h-[10vh] bg-textOrange flex items-center justify-center lg:text-3xl  text-white font-bold "> ABOUT US</h1>
      <div className="lg:h-[80vh] px-5 lg:px-10 box-border bg-white flex flex-col lg:flex-row gap-5 items-center justify-between">
        <p className="lg:flex-1 lg:h-[100%] box-border py-5 lg:pe-5 text-justify  text-gray-900 "> Welcome to <span className="text-darkBlue font-bold">Experience International Schools Aba</span> A citadel of Learning Committed to setting high expectations and standards for learners. <br /> <br /> In Experience International Schols, we strive to create an environment that inspires curiosity, encourages exploration, and celebrates diversity. <br /> <br /> Our dedicated team of educators is passionate about guiding students on their educational journey, providing them with the tools and support they need to thrive academically, socially and emotionally. <br /> <br /> Beyond classroom,  our school offers a myriad of opportunities for students to explore their passions and develop their unique talents. From a robust sports program that promotes teamwork and physical fitness to a thriving theatre arts department that nutures creativity and self expression, there is something for every student to engage and excel in. <br /> <br /> <br /> Join us here, where dreams take flight, friendship are forged and the pursuit of knowledge is a joyous adventure</p>
        <figure className="flex-1 lg:h-[100%] flex items-center justify-center">
          <img src={Award} className="w-full lg:h-[80%] " />  
        </figure>
      </div> 
      <div className="flex flex-col lg:flex-row bg-white items-center justify-center box-border lg:h-[70vh] pt-10">
        <figure className="lg:w-[50%] px-5 lg:px-0 lg:h-[100%] bg-white">
          <img src={mission1} alt="" className="lg:h-[100%] w-full" />
        </figure>
        <div className="lg:w-[50%] flex gap-4 flex-col items-center justify-center box-border bg-white h-[40vh] lg:h-[100%] ">
          <h1 className="text-center md:text-2xl  font-bold flex items-center justify-center lg:w-[30%] h-[30%] border-b-4 text-textOrange border-darkBlue"> OUR MISSION</h1>
          <p className=" items-center  justify-center text-center md:text-2xl text-gray-900 px-5 md:px-20 box-border  lg:h-[70%]">To be a worldclass organisation that inflames the intellect of the young minds, turning them from basket brains to <span className="text-darkBlue font-bold">ACADEMIC GIANTS.</span></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  items-center bg-white justify-center box-border lg:h-[70vh] pt-10">
        <div className="lg:w-[50%] flex gap-4  flex-col items-center justify-start lg:justify-center box-border bg-white h-[40vh] lg:h-[100%] ">
            <h1 className="text-center md:text-2xl lg:text-3xl font-bold flex items-center justify-center lg:w-[30%] h-[30%] border-b-4 text-textOrange border-darkBlue"> OUR VISION</h1>
            <p className=" items-center md:text-2xl flex flex-col justify-center text-center lg:text-2xl text-gray-900 px-5 lg:px-20 box-border  lg:h-[70%]">To Provide <span className="text-darkBlue font-bold">QUALITY EDUCATION.</span> In The Most Conducive Learning Environment </p>
        </div>
        <figure className="lg:w-[50%] lg:h-[100%] px-5 lg:px-0 bg-white">
          <img src={Home3} className="w-full lg:h-[100%] " />  
        </figure>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white justify-center box-border md:h-[90vh] lg:pt-10">
        <div className="lg:w-[50%] flex gap-4 flex-col items-center justify-center lg:justify-start box-border bg-white h-[100vh]  md:h-[100%]">
            <h1 className="text-center md:text-2xl lg:text-3xl font-bold flex items-center justify-center lg:w-[30%] lg:h-[10%] border-b-4 text-textOrange border-darkBlue"> OUR ANTHEM <br /> </h1>
            <p className=" items-center justify-center text-left lg:text-xl  text-gray-900 px-20 box-border  lg:h-[90%]">We are the children of <span className="text-darkBlue font-bold">EXPERIENCE</span> <br /> All over the world we are the best <br />God will see us through in <span className="text-darkBlue font-bold">EXPERIENCE</span> <br /><br />May God bless <span className="text-darkBlue font-bold">EXPERIENCE</span> X2 <br /><br />We shall make it, we shall make it <br /> in Experience College <br /><br />We shall make it, in Experience college, <br /><br />May God bless <span className="text-darkBlue font-bold">EXPERIENCE X2</span></p>
        </div>
        <div className="lg:w-[50%] flex gap-4  mt-6 flex-col items-center md:justify-start lg:justify-center pt-16 lg:pt-0 box-border  h-[80vh] md:h-[100%]  ">
          <h1 className="text-center md:text-2xl lg:text-3xl font-bold flex items-center justify-center lg:w-[30%] lg:h-[10%] border-b-4 text-textOrange border-darkBlue"> OUR PLEDGE <br /> </h1>
          <p className=" items-center justify-center text-left lg:text-xl  text-gray-900 px-20 box-border  lg:h-[90%]">I Pledge to <span className="text-darkBlue font-bold">EXPERIENCE INTERNATIONAL SCHOOLS,</span> <br /> The Citadel of Knowledge <br />The field of wisdom <br /> <br />To be loyal and respectful <br />To be disciplined and focused <br /> and to have a passion for knowledge <br /><br />So help me God. </p>
        </div>
      </div>

      <div>
        <h1 className="w-full md:h-[10vh] bg-textOrange text-white flex items-center justify-center text-2xl font-bold hover:bg-lightBlue hover:text-darkBlue cursor-pointer">MEET OUR FOUNDERS </h1>
        <div className="flex bg-orange-400 p-0 flex-col lg:flex-row items-center justify-center lg:h-[80vh]">
          <figure className="w-full lg:w-[25%] flex flex-col items-center justify-between lg:h-[100%]"><img src={Director} className="h-[90%] w-full " />  
            <figcaption className="bg-textOrange w-full flex md:h-[10%] md:text-2xl md:font-bold items-center justify-center text-white"> DR. EKEOMA RICHARD C.</figcaption>
          </figure>
          <p className="lg:w-[75%] lg:h-[100%] p-10 lg:text-xl bg-darkBlue text-white text-justify cursor-default">Meet Dr Ekeoma Richard Chimezirim, the visionary and driving force behind the creation of Experience International Schools, Aba. <br /> <br /> With a passion for education and a deep belief in the transformative power of learning. Dr Ekeoma Richard embarked on a journey to establish a school that would redefine the educational lanscape and inspire generations to come. His journey to create a school that would go beyond traditional education nbegan in September 5, 2006. <br /> <br /> Armed with a wealth of experience, in education and a relentless determination, he set out to turn his vision into reality. He assembled a team of passionate educators who shared his vision. <br /> <br /> His unwavering commitment to education serves as a reminder that the vision of one person and determination can create a lasting impact on the lives of countless individuals.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-red-300 lg:h-[80vh]">
          <figure className="w-full lg:w-[25%] flex flex-col items-center justify-between lg:h-[100%]"><img src={Director1} className="h-[90%] w-full" />  
            <figcaption className="bg-textOrange w-full flex md:h-[10%] md:text-2xl md:font-bold items-center justify-center text-white"> MRS JOY C. EKEOMA</figcaption>
          </figure>
          <p className="lg:w-[75%] h-[100%] p-10 lg:text-xl bg-white text-gray-900 text-justify cursor-default">Meet Mrs Chinyere Joy Ekeoma. She is the only wife of the visionary Dr. Ekeoma Richard C. She is an astute administrator and a force to recorn with in the educational sector. Beyond academics, Mrs Chinyere Joy Ekeoma understood the importance of creating a school culture that embraced innovation, adaptability and a commitment to lifelong learning. <br /> <br /> She believes that education should not be confined to the four walls of a classroom but should extend into the community and the world at large. Her vision and leadership continue to shape the lives of students, educators and the comunity at large. <br /> <br /> With combined efforts with the vision bearer, she has created a school that not only educates but empowers, instilling in students the confidence, skills and values they need to thrive in an ever changing world.</p>
        </div>
      </div>
      <div className="w-full bg-white absolute mx-auto ">
        <h1 className="bg-white h-[15vh] flex justify-center items-center pt-5 text-textOrange font-bold text-2xl shadow-md">MEET OUR CAMPUS HEADS</h1>
        <div className="bg-lightBlue h-[15vh] lg:h-[20vh] w-full"></div>
        <div className="relative top-[-60px] lg:h-[70vh] flex flex-col md:flex-row items-center justify-center  lg:gap-10  mx-8 lg:mx-24">
          <figure className="w-full md:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white  bg-white pb-5 flex flex-col items-center justify-center"> 
            <img src={head1} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8 flex items-center justify-center" /> 
            <figcaption className="bg-white h-[40%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MISS CHESA OLU  </h1>
              <h1 className="text-textOrange"> HEAD OF EGEGE CAMPUS</h1>
            </figcaption>
          </figure>
          <figure className="w-full md:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white   bg-white pb-5 flex flex-col items-center justify-center">
            <img src={head2} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8 " />  
            <figcaption className="bg-white h-[40%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MRS ADAEZE ISAAC  </h1>
              <h1 className="text-textOrange"> DEAN OF STUDIES</h1>
            </figcaption>
          </figure>
          <figure className="w-full md:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white   bg-white pb-5 flex flex-col items-center justify-center">
            <img src={head3} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8" />  
            <figcaption className="bg-white h-[40%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MRS BLESSING SAMUEL  </h1>
              <h1 className="text-textOrange"> ADMIN SECRETARY</h1>
            </figcaption>
          </figure>
        </div>
        <div className="lg:h-[70vh] flex flex-col md:flex-row  items-center justify-center lg:gap-10 mx-8 lg:mx-24">
          <figure className="w-full lg:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white  bg-white flex flex-col items-center justify-center ">
            <img src={head4} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8"/>  
            <figcaption className="bg-white h-[20%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MRS IFEOMA EMMANUEL  </h1>
              <h1 className="text-textOrange"> HEADMISTRESS</h1>
            </figcaption>
          </figure>
          <figure className="w-full lg:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white  bg-white flex flex-col items-center justify-center ">
            <img src={head5} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8"/>  
            <figcaption className="bg-white h-[20%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MRS PEACE FRANKLIN  </h1>
              <h1 className="text-textOrange"> HEAD OF OPOBO CAMPUS</h1>
            </figcaption>
          </figure>
          <figure className="w-full lg:flex-1 h-[70vh] lg:h-[70vh] lg:border-8 border-white  bg-white flex flex-col items-center justify-center">
            <img src={head6} className="h-[80%] w-[95%] lg:w-[80%] bg-slate-100 mt-8"/>  
            <figcaption className="bg-white h-[20%] w-[95%] lg:w-[80%] flex flex-col items-start justify-center pt-3 ">
              <h1 className="text-gray-900 font-bold">MRS CHIOMA OFFOR  </h1>
              <h1 className="text-textOrange"> PRINCIPAL</h1>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default About