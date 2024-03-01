import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    content:'asdhiadibad',
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    content:'asdauysdgavbd',
    complete: false
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function ReduxReducerHool() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title} {todo.content}
          </label>
        </div>
      ))}
    </>
  );
}
export default ReduxReducerHool;

// import React from 'react';
// import { useReducer } from 'react';

// const intial = [
//     {
//         id:'1',
//         complete:true,
//         content:'changes made in intial '
//     },
//     {
//         id:'2',
//         complete:false,
//         content:'changes made in intial2'
//     },{
//         id:'3',
//         complete:true,
//         content:'changes made in intial3'
//     },
//     {
//         id:'3',
//         complete:false,
//         content:'changes made in intial4'
//     }
// ]


// const reducer = (state,action)=>{
//     switch(action.type){
//         case "complete":
//             return state.map((todo)=>{
//                 if(todo.id===action.id){
//                     return {...todo,complete:!todo.complete};
//                 }
//                 else{
//                     return todo;
//                 }
//             });
//             default:
//                 return state;
//     }
// }





// function ReduxReducerHool() {
//         const [todos, dispatch] = useReducer(reducer, initialTodos);

//         const handleComplete = (todo) => {
//           dispatch({ type: "COMPLETE", id: todo.id });
//         };
      
//         return (
//           <>
//             {todos.map((todo) => (
//               <div key={todo.id}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={todo.complete}
//                     onChange={() => handleComplete(todo)}
//                   />
//                   {todo.title}
//                 </label>
//               </div>
//             ))}
//           </>
//         );
// }

// export default ReduxReducerHool;