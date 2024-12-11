import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// const Home = ({data2}) => {
// console.log("data2 :::",data2);

// const [initial , setInitial ] = useState("")
// const [data, setData] = useState([])

//     const getInput = (event) => {
//         console.log(event.target.value);
//         setInitial(event.target.value)
//     }

//     const getData = () => {
//         console.log(initial)
//        let storeData = [...data, initial]
//         setData(storeData )
//         setInitial("")

//     }
//     const deleteTask= (index) => {
//         console.log(index)
//         let filerData = data.filter((curEle, id) => {
//             return id != index;

//         })
//         setData(filerData)
//     }

const Home = ({ data2 }) => {
  // const location = useLocation();
  // console.log(location.state)
  return (
    <>
      <div>
        <table>
          <thead>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>description</th>
            <th>author</th>
            <th>country</th>
            <th>state</th>
            <th>city</th>
            <th>text</th>
          </thead>
          {data2?.map((data, index) => (
            <tbody>
              <td>{++index}.</td>
              <td>{data?.title}</td>
              <td>{data?.description}</td>
              <td>{data?.author}</td>
              <td>{data?.country}</td>
              <td>{data?.state}</td>
              <td>{data?.city}</td>
              <td>{data?.text}</td>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Home;

//   return (

//     <>

//         <div className="container">
//             <div className="inputTask">
//                 <input type="text" placeholder='enter your from/ task' value={initial} onChange={getInput}/>
//                 <button onClick={getData}> Add Task</button>
//             </div>
//             {data.map((curVal, index) => {
//                 return(
//                     <>
//                         <div className='taskData'>
//                             <p>{curVal}</p>
//                             <button className='dlt' onClick={() => {deleteTask(index)}}>delete</button>
//                         </div>
//                     </>
//                 )
//             })}
//         </div>

//     </>
//   )
// }

// export default Home
