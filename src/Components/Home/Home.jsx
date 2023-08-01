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
  const [edittaskk, setEdittask] = useState(-1);

  
     const addTasks = (e) => {
      e.preventDefault();

      if(title === "" && description === ""){
        return  toast.error("Enter the Title  and  description ");
      }


      if(edittaskk === -1){
        setTask([
          ...tasks,
          {
            title,
            description,
          },
        ]);

        toast.success("New Goal Added Successfully");
       
      }else{
        
        const currenttodos = [...tasks];
        currenttodos[edittaskk] = {title,description};
        setTask(currenttodos);
        setEdittask(-1);
        toast.success("Updated Successfully");
        
      }
      setTitle("");
      setDescription("");
      
  };
   const deletetask =  (index) =>{
     const afterarray = tasks.filter((val,i)=>{
       return i !== index ;
     })
     setTask(afterarray);
     toast.success("Successfully Deleted!");
    
  }

  
  
  const edittask = (index) =>{
      setEdittask(index);
      setTitle(tasks[index].title);
      setDescription(tasks[index].description);
      toast.success("Update It Plzzzzzz");

  }  
  const cancleupdate=()=>{
    setEdittask(-1)
    setTitle("");
    setDescription("");
    toast.error("Update Cancle");
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
        { (title !== "") &&( description !== "") &&
          <button type="submit" >{edittaskk === -1 ? 'ADD' : 'UPDATE'  }</button>
      }
        
        {(edittaskk !== -1) && <button className="cancle" onClick={()=>cancleupdate() } >CANCLE</button>}
      </form>
      
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} index={index}  deletetask={deletetask} edittask={edittask}/>
      ))}
    </div>
  );
};

export default Home;
// (edittaskk !== -1) &&