import React, {useEffect, useState} from 'react';
import './App.css';
import {SupperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";


type PropsType =
  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

function App() {
  const [todos, setTodos] = useState<Array<PropsType>>([])
  const[newTitle, setNewTitle] = useState("")

  const myFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())// ответ
      .then(json => setTodos(json))
  }

  useEffect(() => myFetch(), [])

  const showUpHandler = () => {
    myFetch()
  }

  const deleteHandler = () => {
    setTodos([])
  }

  const addNewTitleHandler = () => {
    const newTodo = {
      userId: 100200,
      id: todos.length + 1,
      title: newTitle,
      completed: false
    }

    setTodos([newTodo, ...todos])
    setNewTitle("")
  }
  console.log(todos)
  const mapTodos =
    todos.map(el => {
      return (
        <li>
          <span>{el.id} - </span>
          <span>{el.title}</span>
          <input type="checkbox" checked={el.completed}/>
        </li>
      )
    })

  return (
    <div className="App">

      <ul>
        <SupperButton name={"SHOW ALL POSTS"} callBack={showUpHandler} />
        <SupperButton name={"DELETE"} callBack={deleteHandler} />
        <SuperInput setNewTitle={setNewTitle} newTitle={newTitle}/>
        <SupperButton name={"Add newTitle"} callBack={addNewTitleHandler}/>
        {mapTodos}
      </ul>
    </div>
  )
}

export default App;


//----------------------------------------------------------------------------------------

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
//
//
// type PropsType =
//     {
//         userId: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }
//
// function App() {
//     const [todos, setTodos] = useState<Array<PropsType>>([])
//
//     const axiosRequest=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res) => {
//                 setTodos(res.data)
//             })
//     }
//
//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/todos')
//         //     .then(response => response.json())
//         //     .then(json => setTodos(json))
//
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }, [])
//
//     const mapTodos=todos.map(el=>{
//         return (
//             <li>
//                 <span>{el.id} - </span>
//                 <span>{el.title}</span>
//                 <span>{el.completed}</span>
//             </li>
//         )
//     })
//
//     const onClickHandler = () => {
//         setTodos([])
//     }
//
//     const onClickHandlerForRedisplay=()=>{
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }
//
//     return (
//         <div className="App">
//             <button onClick={onClickHandler}>CLEAN POSTS</button>
//             <button onClick={onClickHandlerForRedisplay}>REDISPLAY</button>
//             <ul>
//                 {/*{todos.map(el => {*/}
//                 {/*    return (*/}
//                 {/*        <li>*/}
//                 {/*            <span>{el.id} - </span>*/}
//                 {/*            <span>{el.title}</span>*/}
//                 {/*            <span>{el.completed}</span>*/}
//                 {/*        </li>*/}
//                 {/*    )*/}
//                 {/*})}*/}
//
//                 {mapTodos}
//             </ul>
//         </div>
//     );
// }
//
// export default App;
