import Config from "./../../utils/Config.json"
console.log(Config)
export default function Home() {
    return (
        <div className="container">
            <h1 className="text-center ">{Config.title}</h1>
            <h2 className="text-center">{Config.description}</h2>
            <h3>services</h3>
            <div className="m-3 ">
                {
                    Config.services.map((serviceData, index) => {
                        const { title, description } = serviceData;
                        return (
                            <div style={{ backgroundColor: Config.them.bgPink , display:"flex" , justifyContent : "space-around" ,flexDirection : Config.servicesCardDirection  }}>
                            <div className="card mb-3 " key={index} style={{maxWidth : Config.servicesCardDirection==="row"? "200px" : "100%"}} >
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
                </div>
        </div>  
    )
}