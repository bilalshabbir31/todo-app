
function ListGroup() {

    let items=[
        'Mian Channu',
        'Lahore',
        'Okara',
        'Sahiwal'
    ];

    items=[]

    return (
        <>
        <h1>List</h1>
        {items.length===0    && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map(item=><li key={item}>{item}</li>)}
        </ul>
        </>
    );
}

export default ListGroup;
