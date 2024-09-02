const tasks = [

    {
        id:1,
        name:'Reading',
        done:false,
    },
    {
        id:2,
        name:'Maditation',
        done:true,
    },
    {
        id:3,
        name:'Playing',
        done:true,
    },

];



function loadTask(){

    const tobody = document.querySelector("tbody");
    tobody.innerHTML="";
    tasks.forEach((task,index)=>{
        tobody.innerHTML += `
        <tr> 
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.done ? "Completed":"Pending"}</td>
        <td><button class="btn btn-success"><i class="bi bi-pencil-square"></i></button></td>
        <td><button class="btn btn-danger" ><i class="bi bi-trash3"></i></button></td>
        </tr>
        
        `
    })
    
}

loadTask()
