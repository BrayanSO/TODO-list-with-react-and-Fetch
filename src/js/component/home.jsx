import React, {useState,useEffect} from 'react';
const Home = () => {
const [tasks, setTasks]= useState ([])
  const [newTask, setNewTask]= useState("")
  var apiurl = "https://assets.breatheco.de/apis/fake/todos/user/brayan"
  function addTask (e){
	if (e.code=="Enter" && newTask!=""){
		setTasks([...tasks, {label: newTask, done: false}])
		setNewTask("")
	}
  }
  useEffect(async() =>{
    //Intenta traer lista
      var respuesta =await fetch(apiurl)
      // verifica si la lista no existe
      if (respuesta.status==404){
        // crear la lista
        respuesta =await fetch(apiurl,{
          method:"POST",
          body:JSON.stringify([]),
          headers:{
            "Content-Type":"application/json"
          }})
          //Traer nueva lista
          respuesta =await fetch(apiurl)
        }else if(!respuesta.ok){
          // errror
          console.error("error al cargar la lista: " + respuesta.statusText)
        }
      
      //cargar la data del body
      var data=await respuesta.json()
      //actualiza el estado cn la data
      setTasks(data)
    },[])


      // cargar la lista
  async function removeTask(index){
    let newTasks= [...tasks]
    newTasks.splice(index,1) 
    if (tasks.length==0){
      let resp =await fetch(apiurl,{
        method:"DELETE"
    })}
    setTasks(newTasks)
  }
  useEffect(async ()=> {
    if(tasks.length>0){
     let resp =await fetch(apiurl,{
      method:"PUT",
      body:JSON.stringify(tasks),
      headers:{
        "Content-Type":"application/json"
      }
      })
      if(resp.ok){
        console.info("lista actualizada")
      }
      }
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
        <button onClick={()=>removeTask(index)} className="badge bg-danger rounded-pill justify-content-center">X</button>
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
