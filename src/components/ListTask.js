import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch,useSelector} from 'react-redux';

const ListTask = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state=>state.reducer.tasks);
    return (
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          {tasks.map((task,i)=>  
          <div className="todo" key={i}>
          <span >{task.name}</span>
          <div>
            <Button variant="outline-success">✓</Button>
            <Button variant="outline-danger"  onClick={()=>dispatch({type:"delete",payload:task.id})}>✕</Button>
          </div>
          </div>
           )
        }
        </div>      
      </div>
         );
}

export default ListTask;
