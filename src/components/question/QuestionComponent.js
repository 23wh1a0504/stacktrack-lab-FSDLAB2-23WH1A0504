import React from 'react';
import React,{useState} from 'react';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [search , setSearch] = useState("");
  const [tasks , setTasks] = useState([]); 

  const handleSearch = async() => {
    if(!search){ 
      alert("Please enter a Keyword"); 
      return;
    }

    try{
      const res = await fetch('/api/tasks?search=${search}');
      const data = await res.json();
      setTasks(data);
    }
    catch(err){console.error("Error fetching tasks : ",err);}
  }


  // TODO: Implement data fetching inside a useEffect hook
  

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>
      <h2> Task Serach</h2>
      <input
       type = "text"
       placeholder='Enter keyword'
       value={search}
       onChange={(e) => setSearch(e.target.value)}/>

       <ul>
        {tasks.length == 0 && <p> No tasks found</p>}

        {tasks.map((task)=> (
          <li key = {task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>status : {task.status}</p>
          </li>
        ))}
       </ul>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}
export default QuestionComponent;
