function Portfolio(){
    const weather='./src/assets/linkedin.png';
    return (
        <>
            <div className="title">
                <h1 className="titleName">My Portfolio</h1>
                <div className="Portfolio">
                    <div className="web-protfolio">
                        <h1 className="title">Task Manager</h1>
                        <img src={weather} alt="Task-Manager Preview"></img>
                        <p className="Description">
                            It is a full stack project with flask and also my Cs50x final Project. Its a websites which helps us to add different task
                            and dealine for it as well and updates it in realtime as well as adds the data into data base and helps to regain acess if we removed it.
                        </p>
                    </div>
                    <div className="web-protfolio">
                        <h1 className="title">Weather App</h1>
                        <img src={weather} alt="Task-Manager Preview"></img>
                        <p className="Description">
                            A website which uses APi to collect a data and display the real time information about a particular city at that particular time. It helps to know more about how API works in realtime and this project is indeed the one to know about it.
                            <span>Click More</span>
                        </p>
                    </div>

                    
                </div>
                <div className="Portfolio">
                    <div className="web-protfolio">
                        <h1 className="title">Task Manager</h1>
                        <img src={weather} alt="Task-Manager Preview"></img>
                        <p className="Description">
                            It is a full stack project with flask and also my Cs50x final Project. Its a websites which helps us to add different task
                            and dealine for it as well and updates it in realtime as well as adds the data into data base and helps to regain acess if we removed it.
                        </p>
                    </div>
                    <div className="web-protfolio">
                        <h1 className="title">Weather App</h1>
                        <img src={weather} alt="Task-Manager Preview"></img>
                        <p className="Description">
                            A website which uses APi to collect a data and display the real time information about a particular city at that particular time. It helps to know more about how API works in realtime and this project is indeed the one to know about it.
                            <span>Click More</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
        
    );
}
export default Portfolio