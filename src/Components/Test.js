// import React from "react";
// // import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// export default function Test() {
//   const items = [
//     {
//       first_name: "Michael",
//       last_name: "Lawson",
//       email: "michael.lawson@reqres.in",
//     },
//     {
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       email: "lindsay.ferguson@reqres.in",
//     },
//     {
//       first_name: "Tobias",
//       last_name: "Funke",
//       email: "tobias.funke@reqres.in",
//     },
//     {
//       first_name: "Byron",
//       last_name: "Fields",
//       email: "byron.fields@reqres.in",
//     },
//     {
//       first_name: "George",
//       last_name: "Edwards",
//       email: "george.edwards@reqres.in",
//     },
//     {
//       first_name: "Rachel",
//       last_name: "Howell",
//       email: "rachel.howell@reqres.in",
//     },
//   ];
//   const handleOnSearch = (string, results) => {
//     // onSearch will have as the first callback parameter
//     // the string searched and for the second the results.
//     console.log(string, results);
//   };

//   const handleOnSelect = (item) => {
//     // the item selected
//     console.log(item);
//   };

//   const handleOnFocus = () => {
//     console.log("Focused");
//   };

//   return (
//     <div>
//       <div>
//         <Autocomplete
//           options={items}
//           getOptionLabel={(option) => option.first_name}
//           style={{ width: 300 }}
//           renderInput={(params) => (
//             <TextField {...params} label="Search" variant="outlined" />
//           )}
//         />
//       </div>
//     </div>
//   );
// }
// const items = [
//   {
//     first_name: "Michael",
//     last_name: "Lawson",
//     email: "michael.lawson@reqres.in",
//   },
//   {
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     email: "lindsay.ferguson@reqres.in",
//   },
//   {
//     first_name: "Tobias",
//     last_name: "Funke",
//     email: "tobias.funke@reqres.in",
//   },
//   {
//     first_name: "Byron",
//     last_name: "Fields",
//     email: "byron.fields@reqres.in",
//   },
//   {
//     first_name: "George",
//     last_name: "Edwards",
//     email: "george.edwards@reqres.in",
//   },
//   {
//     first_name: "Rachel",
//     last_name: "Howell",
//     email: "rachel.howell@reqres.in",
//   },
// ];
// const columns = [
//   {
//     name: "First Name",
//     selector: "first_name",
//     sortable: true,
//   },
//   {
//     name: "Last Name",
//     selector: "last_name",
//     sortable: true,
//   },
//   {
//     name: "Email",
//     selector: "email",
//     sortable: true,
//     right: true,
//   },
// ];
// import React, { Component } from 'react';
// const Information = [
//     {
//       "name":"Samule",
//       "age":21,
//       "country":"USA"
//     },
//     {
//       "name":"Sam",
//       "age":21,
//       "country":"USA"
//     },
//     {
//       "name":"Mark",
//       "age":21,
//       "country":"Africa"
//     },
//     {
//       "name":"Markus",
//       "age":21,
//       "country":"Africa"
//     },
//     {
//       "name":"Aayush",
//       "age":21,
//       "country":"India"
//     },
//     {
//       "name":"Sean",
//       "age":21,
//       "country":"Ireland"
//     },
//     {
//       "name":"Eduardo",
//       "age":21,
//       "country":"France"
//     },
//     {
//       "name":"Dustin",
//       "age":21,
//       "country":"Spain"
//     },
//     {
//       "name":"Alexendra",
//       "age":21,
//       "country":"USA"
//     },
//     {
//       "name":"Lee",
//       "age":21,
//       "country":"China"
//     },
//     {
//       "name":"Jim",
//       "age":21,
//       "country":"Korea"
//     }
//   ];
// class Test extends Component {

//   constructor(){
//     super();

//     this.state={
//       search:null
//     };
//   }

//   searchSpace=(event)=>{
//     let keyword = event.target.value;
//     this.setState({search:keyword})
//   }

//   render(){
//     const styleInfo = {
//       paddingRight:'10px'
//     }
//     const elementStyle ={
//       border:'solid',
//       borderRadius:'10px',
//       position:'relative',
//       left:'10vh',
//       height:'3vh',
//       width:'20vh',
//       marginTop:'5vh',
//       marginBottom:'10vh'
//     }
//     const items = Information.filter((data)=>{
//       if(this.state.search == null)
//           return data
//       else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
//           return data
//       }
//     }).map(data=>{
//       return(
//       <div>
//         <ul>
//           <li style={{position:'relative',left:'10vh'}}>
//             <span style={styleInfo}>{data.name}</span>
//             <span style={styleInfo}>{data.age}</span>
//             <span style={styleInfo}>{data.country}</span>
//           </li>
//         </ul>
//       </div>
//       )
//     })

//     return (
//       <div>
//       <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
//       {items}
//       </div>
//     )
//   }
// }

// export default Test;