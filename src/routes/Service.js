import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/service1.jpeg"
import Footer from "../component/Footer";
import Trip from "../component/Trip";
function Service(){
    return(
        <>
        <Navbar/>
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="How's the Service?"
            btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}
export default Service;