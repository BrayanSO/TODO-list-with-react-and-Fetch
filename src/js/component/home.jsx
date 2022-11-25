import React, {useState,useEffect} from 'react';
const Home = () => {
const [tasks, setTasks]= useState ([
  {label: "Lavar ropa", done: false},
  {label: "Lavar el Auto", done: false}
  ])
  const [newTask, setNewTask]= useState("")
  function addTask (e){
	if (e.code=="Enter" && newTask!=""){
		setTasks([...tasks, {label: newTask, done: false}])
		setNewTask("")
	}
  }
  useEffect(async() =>{
      let respuesta = await fetch("https://assets.breatheco.de/apis/fake/todos/user/Brayan")
      if (respuesta.status==404){
        // crear la lista
        respuesta =await fetch("https://assets.breatheco.de/apis/fake/todos/user/Brayan"),{
          method:"POST",
          body:JSON.stringify([]),
          headers:{
            Content-Type: "application/json"
          }
          respuesta =await fetch("https://assets.breatheco.de/apis/fake/todos/user/Brayan")
        } else if (!respuesta.ok){
          // errror
          console.error("error al cargar"+respuesta.statusText)
        }
      }
      var data=await respuesta.json()
      setTasks(data)
      // cargar la lista
  },[])
  function removeTask(index){
    let newTasks= [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }
  useEffect(async () =>{
    respuesta =await fetch("https://assets.breatheco.de/apis/fake/todos/user/Brayan"),{
      method:"PUT",
      body:JSON.stringify([tasks]),
      headers:{
        "content-type":"application/json"}
  },[tasks])
  return (
  <div className="mb-3 container-fluid d-flex mt-5 justify-content-center ">
    <ul className="list-group w-35 justify-content-center ">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <input type="text" onKeyDown={e=>addTask(e)} className='fo' onChange={e=>setNewTask(e.target.value)} value={newTask} name="task" id="task" />
      </li>
    {tasks.map((task, index)=>(
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        {task.label}
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
