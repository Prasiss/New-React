function RenderList(props){
    const itemslist=props.item;
    const cateogory=props.cateogory;
    const listitems = itemslist.map(item => <li key={item.id}> 
                                            {item.name}: &mngsp;
                                            <b>{itemslist.calories}</b></li>);
    return (
        <>
            <h3 className="list-cateogry">{cateogory}</h3>
            <h3 className="list-items">{listitems}</h3>
        </>

    );
}
export default RenderList