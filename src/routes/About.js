import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/img1.jpeg"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
function About(){
    return(
        <>
            <Navbar/>
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="Get To Know Me"
            btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About;