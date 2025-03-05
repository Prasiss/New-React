function Userconditional(){

    if (props.isLoggedIn){
        return(
            <div>
                <h1> Welcome  {props.username}</h1>
            </div>
        );
    }
}
export default Userconditional;