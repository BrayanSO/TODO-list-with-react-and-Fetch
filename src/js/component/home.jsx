import React, {useState} from 'react';
const Home = () => {
const [tasks, setTasks]= useState ([
    "Lavar ropa",
    "Lavar el Auto"
  ])
  const [newTask, setNewTask]= useState("")
  function addTask (e){
	if (e.code=="Enter" && newTask!=""){
		setTasks([...tasks, newTask])
		setNewTask("")
	}
  }
  function removeTask(index){
    let newTasks= [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }
  return (
  <div className="mb-3 container-fluid d-flex mt-5 justify-content-center ">
    <ul className="list-group w-35 justify-content-center ">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="text" onKeyDown={e=>addTask(e)} className='fo' onChange={e=>setNewTask(e.target.value)} value={newTask} name="task" id="task" />
      </li>
    {tasks.map((task, index)=>(
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        {task}
        <button onClick={()=>removeTask(index)} className="badge bg-primary rounded-pill justify-content-center">x</button>
      </li>
    ))}
	<li className="list-group-item d-flex disabled justify-content-center align-items-center">
		 <small>{tasks.length} Tareas</small>
		</li>
</ul>
</div>
  );
}

export default Home;
