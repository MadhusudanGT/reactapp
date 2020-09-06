import React from 'react';
import './App.css';

//  function App(){
//   constructor() 
//   super();
//   this.state = {
//      data: 
//      [
//         {
//            "id":1,
//            "name":"madhu",
//            "age":"20"
//         },
//         {
//            "id":2,
//            "name":"shiv",
//            "age":"10"
//         },
//      ]
//   }
//   const user={
//     firstname:'madhu',
//     lastname:'gt'
//   }

//   function formatName(user){
// return user.firstname+' '+user.lastname;
//   }

//   return (
//     <div className="App">
//        <h1>
//     Hello, {formatName(user)}!
//   </h1>
//     </div>
//   );
class App extends React.Component {
  constructor() {
     super();
     this.state = {
        data: 
        [
           {
              "id":1,
              "name":"madhu",
              "age":"24"
           },
           {
              "id":2,
              "name":"shiv",
              "age":"20"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]
     }
    }
  render() {
     return (
        <div>
           <Header/>
           <Content/>
           <table>
              <tbody>
                 {this.state.data.map((person, i) => <TableRow key = {i} 
                    data = {person} />)}
              </tbody>
           </table>
        </div>
     );
  }
// return(
//   <div>
//     <Header/>
//     <Content/>
//     <table>
//       <tbody>]
//         {this.state.data.map((person,i)=>
//       <tablerow
//       key={i} data={person}
//       />
//       )}
//       </tbody>
//     </table>
//   </div>
// )
}


class Header extends React.Component{
  
 render(){
   return (
     <div>this is Header</div>
   )
 } 
}

class Content extends React.Component{
render(){
  return(
    <div>this is Content</div>
  )
}
}

class TableRow extends React.Component{
render(){
  return(
    <div>
      <td>
  <tr>{this.props.data.id}</tr>
  <tr>{this.props.data.name}</tr>
  {<tr>{this.props.data.age}</tr>}
  
 
      </td>
    </div>
  )
}
}

export default App;
