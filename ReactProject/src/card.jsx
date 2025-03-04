import photo from './assets/pushpa 2.jpg';
function Card(){
    return (
        <div className="card">
            <img src={photo} alt="pushpa 2 image" ></img>
            <h2>Pushpa 2</h2>
            <p>Movie time :3 hrs </p>
        </div>
    );
    
}
export default Card