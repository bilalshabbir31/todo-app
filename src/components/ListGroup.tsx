
function ListGroup() {

    const items=[
        'Mian Channu',
        'Lahore',
        'Okara',
        'Sahiwal'
    ];



    return (
        <>
        <h1>Hello Bilal</h1>
        <ul className="list-group">
            {items.map(item=><li key={item}>{item}</li>)}
        </ul>
        </>
    );
}

export default ListGroup;
