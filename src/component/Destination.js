import Mountain1 from "../assets/mountain.jpg"
import Mountain2 from "../assets/mountain2.jpg"
import Mountain3 from "../assets/mountains.jpg"
import Mountain4 from "../assets/mountain4.jpg"
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
const Destination = () => {
    return(
      <div className="destination">
        
        <h1>Popular Destination</h1>
        <p>Tour give you the time to see a lot,with in a time frame</p>
        <DestinationData
        className="first-des"
            heading="Taal Volcano,Batangas"
            text="Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25–30 km (16–19 mi) caldera formed by explosive eruptions between 140,000 and 5,380 BP.[4] Each of these eruptions created extensive ignimbrite deposits reaching as far away as present-day Manila.[11]

            Taal Volcano and Lake are entirely located in the province of Batangas. The northern half of Volcano Island falls under the jurisdiction of the lake shore town of Talisay, and the southern half in San Nicolas. The other communities that encircle Taal Lake include the cities of Tanauan and Lipa, and the municipalities of Talisay, Laurel, Agoncillo, Santa Teresita, San Nicolas, Alitagtag, Cuenca, Balete, and Mataasnakahoy.[12]."
            img1={Mountain1}
            img2={Mountain2}
        />
        <DestinationData
        className="first-des-reverse"
            heading="Mt. Everest,India"
            text="The Tibetan name for Everest is Qomolangma (ཇོ་མོ་གླང་མ, lit. Holy Mother). The name was first recorded with a Chinese transcription on the 1721 Kangxi Atlas during the reign of Emperor Kangxi of Qing China, and then appeared as Tchoumour Lancma on a 1733 map published in Paris by the French geographer D'Anville based on the former map.[8] The Tibetan name is also popularly romanised as Chomolungma and (in Wylie) as Jo-mo-glang-ma.[13]

            The official Chinese transcription is 珠穆朗玛峰 (t 珠穆朗瑪峰), whose pinyin form is Zhūmùlǎngmǎ Fēng. While other Chinese names were used, including Shèngmǔ Fēng (t 聖母峰, s 圣母峰, lit. Holy Mother Peak), these names were largely phased out when the Ministry of Internal Affairs of China issued a decree to adopt a sole name in May 1952.[14]"
            img1={Mountain3}
            img2={Mountain4}
        />
        </div>
    );
};
export default Destination;