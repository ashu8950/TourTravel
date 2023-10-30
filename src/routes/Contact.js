import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/contact1.jpeg"
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";
function Contact(){
    return(
        <>
        <Navbar/>
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="Any Query?"
            btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}
export default Contact;