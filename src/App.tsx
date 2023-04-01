import { Alert } from "./components/Alert";


function App() {

//   let items=[
//     'Mian Channu',
//     'Lahore',
//     'Okara',
//     'Sahiwal'
// ];

// const handleSelectItem=(item: string)=>{
//   console.log(item);
// }

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  return (
    <div>
      <Alert>
        Hello
        <span>World</span>
        <h1>Bilal</h1>
      </Alert>
    </div>
  );
}


export default App;
