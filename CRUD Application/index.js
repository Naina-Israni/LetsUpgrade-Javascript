window.onload=function()
{
let celebrities=[
    {
        name:"Kapil Sharma",
        age:39,
        title:"Comedian",
        from:"Punjab",
    },
    {
        name:"Raghav Juyal",
        age:29,
        title:"Choreographar",
        from:"Dehradun",
    },
    {
        name:"Shahrukh Khan",
        age:54,
        title:"Actor",
        from:"Delhi",
    },
    {
        name:"Sunidhi Chavhan",
        age:37,
        title:"Singer",
        from:"Kolkata",
    },
    
];
    if(localStorage.getItem("celebrities")==null)
    {
     let celebritystring=JSON.stringify(celebrities);
     localStorage.setItem("celebrities",celebritystring);
    }
}

function display(data){
    let tabledata="";
    let celebrities;
    if(data==undefined)
    {
   celebrities=JSON.parse(localStorage.getItem("celebrities"));
    }
    else{
        celebrities=data;
    }
    celebrities.forEach(function(celebs,index) {
        let row=`<tr><td>${index +1}</td>
        <td>${celebs.name}</td>
        <td>${celebs.age}</td>
        <td>${celebs.title}</td>
        <td>${celebs.from}</td>
        <td>
        <button onclick="deleteCelebs(${index})">Delete</button>
        <button onclick="openModal(${index})">Update</button>     
        </td>
        </tr>`;
        tabledata=tabledata+row;
        
    });
    document.getElementById("data").innerHTML=tabledata;
}
display();

function addCelebs(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let title=document.getElementById("title").value;
    let from=document.getElementById("from").value;

    let newCeleb={};
    newCeleb.name=name;
    newCeleb.age=Number(age);
    newCeleb.title=title;
    newCeleb.from=from;

    
    let celebrities=JSON.parse(localStorage.getItem("celebrities"));
    celebrities.push(newCeleb);
    localStorage.setItem("celebrities",JSON.stringify(celebrities));

    display();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("title").value="";
    document.getElementById("from").value="";
}

function searchCeleb(){
    let searchceleb=document.getElementById("search").value;
    let celebrities=JSON.parse(localStorage.getItem("celebrities"));
    let getceleb=celebrities.filter(function(celeb){
        return celeb.name.toUpperCase().indexOf(searchceleb.toUpperCase()) != -1;
    })
display(getceleb);
}

function deleteCelebs(index)
{
    let celebrities=JSON.parse(localStorage.getItem("celebrities"));
    celebrities.splice(index,1);
    localStorage.setItem("celebrities",JSON.stringify(celebrities));4

    display();
}

let upIndex;

function copyCelebs(index)
{
    let celebrities=JSON.parse(localStorage.getItem("celebrities"));
    let celeb=celebrities[index];
    upIndex=index;
    document.getElementById("upname").value=celeb.name;
    document.getElementById("upage").value=celeb.age;
    document.getElementById("uptitle").value=celeb.title;
    document.getElementById("upfrom").value=celeb.from;

}

function updateCelebs(event)
{
    event.preventDefault();
    let name=document.getElementById("upname").value;
    let age=document.getElementById("upage").value;
    let title=document.getElementById("uptitle").value;
    let from=document.getElementById("upfrom").value;

    let celebrities=JSON.parse(localStorage.getItem("celebrities"));
    let upCeleb=celebrities[upIndex];
   
    upCeleb.name=name;
    upCeleb.age=Number(age);
    upCeleb.title=title;
    upCeleb.from=from;
    localStorage.setItem("celebrities",JSON.stringify(celebrities));

    display();
    
}


function openModal(index)
{
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display="block";
    copyCelebs(index);
}

function closeModal(event)
{
    if(event.target.className=="modal")
    {
        let modal=document.getElementsByClassName("modal")[0];
        modal.style.display="none";   
    }
}