import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
import Footer from "../component/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Once Journey Begins"
        text="Choose your Favourite Destination"
        buttonText="Travel Plan"
        URL="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
       <Footer/>
        </>
    );
}
export default Home;