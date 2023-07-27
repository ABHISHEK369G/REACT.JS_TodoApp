import React, { useEffect, useState } from "react";
import "./home.scss";
import Task from "./Task";
import toast from 'react-hot-toast';
// , { Toaster }
// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

const goals=localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];

// const notify = () => {
  
//   toast.success("Wow so easy!");
//   toast.info("Wow so easy!");
//   toast.error("Wow so easy!");
  
// };

  const [tasks, setTask] = useState(goals);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
     const addTasks = (e) => {
      e.preventDefault();
      if(title !== "" && description !== ""){
        setTask([
          ...tasks,
          {
            title,
            description,
          },
        ]);
        setTitle("");
        setDescription("");
        toast.success("New Goal Added Successfully");
      }else{
       toast.error("Enter the Title  and  description ");
        
      }
  };
   const deletetask =  (index) =>{
     const afterarray = tasks.filter((val,i)=>{
       return i !== index ;
     })
     setTask(afterarray);
     toast.success("Successfully Deleted!");
    
  }

  useEffect(()=>{

    localStorage.setItem("tasks",JSON.stringify(tasks));

  },[tasks])

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>

      <form onSubmit={addTasks}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          text="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} index={index}  deletetask={deletetask}/>
      ))}
    </div>
  );
};

export default Home;
