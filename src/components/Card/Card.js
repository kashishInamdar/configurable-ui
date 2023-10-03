import Config from "./../../utils/Config.json";
import './Card.css'

console.log(Config)
export default function Card() {      
            Config.services.map((serviceData, index) => {
                const { title, description } = serviceData;
                return(
                    <div className = "card mb-3 card" key={index} >
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    </div>
                )
            })
}
        