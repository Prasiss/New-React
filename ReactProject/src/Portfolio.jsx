function Portfolio(){
    const weather='./src/assets/linkedin.png';
    return (
        <div className="Portfolio">
            <div className="web-protfolio">
                <h1 className="title">Task Manager</h1>
                <img src={weather} alt="Task-Manager Preview"></img>
                <p className="Description"></p>
            </div>
            <div className="web-protfolio">
                <h1 className="title">Weather App</h1>
                <img src={weather} alt="Task-Manager Preview"></img>
                <p className="Description">
                    
                </p>

            </div>
            
        </div>
    );
}
export default Portfolio