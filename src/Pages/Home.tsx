import hero from "../../public/hero.png";
import "../CSS/Home.css";
import monitor from "../../public/monitor.png";
import backend from "../../public/backend.png";
import database from "../../public/database.png";
import roblox from "../../public/roblox.png";
import one from '../../public/icon-1.png'
import two from '../../public/icon-2.png'
import three from '../../public/icon-3.png'
import four from '../../public/icon-4.png'
import fifth from '../../public/icon-5.png'
import six from '../../public/icon-6.png'


const Home = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="text">
          <div>
            <h2 className="text-tech mb-2">Tech Service</h2>
            <h1 className="text-4xl text-gray-800 ">
              TechSynergy: <br /> Innovate, <br /> Create, Elevate
            </h1>
            <p className="text-sm text-gray-700 mt-4">
              Unlocking Possibilities, One code at a time
            </p>
            <button className="bg-green-500 rounded-full w-32 text-white p-1 text-base mt-4">
              See Project
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            src={hero}
            alt="hero"
            className="hero-image object-contain rounded-lg"
          />
        </div>
      </div>
      <section className="second-container mt-10 w-11/12 m-auto h-27 mb-24 rounded-2xl">
        <h2 className="text-center pt-2 text-2xl mb-10">
          We have multidisciplinary teams to meet any{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800 bg-clip-text text-transparent">
            Challenge
          </span>
        </h2>
        <div className="icon-base-container flex p-5 gap-10 ">
          <section className="ml-8 p-6 pt-0 pb-0">
            <img src={monitor} alt="monitor" className="icon-container mb-2" />
            <h3 className="mt-2 mb-2">Front-end</h3>
            <p className="text-sm text-gray-700">
              Our frontend developers understand the delicate balance between
              aesthetics and functionality.
            </p>
          </section>
          <section className="ml-8 p-8 pt-0 pb-0">
            <img src={backend} alt="backend" className="icon-container" />
            <h3 className="mt-2 mb-2">Back-end</h3>
            <p className="text-sm text-gray-700 ">
              Our backend developers are the architects of efficiency and
              security. They design and build the databases andAPIs.
            </p>
          </section>
          <section className="ml-8 p-8 pt-0 pb-0">
            <img src={database} alt="database" className="icon-container" />
            <h3 className="mt-2 mb-2">Data Analyst</h3>
            <p className="text-sm text-gray-700">
              Our data analytics team is a blend of mathematicians,
              statisticians, and technology enthusiasts.
            </p>
          </section>
        </div>
      </section>
      <div className="main-service-container mb-8">
        <section className=" flex justify-center items-center gap-3 text-gray-700 p-5">
          <img src={roblox} alt="roblox" className="icon-vector w-20 h-20" />
          <h3 className="text-2xl w-1/3">Empowering Your Digital Vision: Our Comprehensive Tech Services.</h3>
        </section>
        <section className="main-card-container flex-col w-full mt-8">
          <section className="card-container flex gap-11 justify-center mb-12">
            <div className="card-service">
              <img src={one} alt="icon-vector" className="one w-10" />
              <h3 className="card-heading">Custom SoftwareDevelopment</h3>
              <p className="card-para">Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
            </div>
            <div className="card-service">
              <img src={two} alt="icon-vector" className="one w-10" />
              <h3 className="card-heading">QA and Testing</h3>
              <p className="card-para">Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
            </div>
            <div className="card-service">
              <img src={three} alt="icon-vector" className="one w-10" />
              <h3 className="card-heading">AI and Data Science</h3>
              <p className="card-para">Use leading AI, machine learning, and data engineering technologies to unlock business value.</p>
            </div>
          </section>
          <section className="card-container flex gap-11 justify-center ">
            <div className="card-service"> 
              <img src={four} alt="icon-vector" className="two w-10" />
              <h3 className="card-heading">UX/UI Design</h3>
              <p className="card-para">Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.</p>
            </div>
            <div className="card-service">
              <img src={fifth} alt="icon-vector" className="two w-10" />
              <h3 className="card-heading">Mobile App Development</h3>
              <p className="card-para">Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
            </div>
            <div className="card-service">
              <img src={six} alt="icon-vector" className="two w-10" />
              <h3 className="card-heading">Platform and Infrastructure</h3>
              <p className="card-para">Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
