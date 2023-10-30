import "./HeroStyle.css";
function Hero(props){
    return(
        <>
        <div className={props.cName}></div>
            <div className="Hero">
                <img alt="Hero" src={props.heroImg}/>
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.URL} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        
        </>
    )
}
export default Hero;