window.onload=function()
{
    let buses=[];
    if(localStorage.getItem("buses")==null)
    {
     let busesstring=JSON.stringify(buses);
     localStorage.setItem("buses",busesstring);
    }
}

function display(data){
    let tabledata="";
    let buses;
    if(data==undefined)
    {
       buses=JSON.parse(localStorage.getItem("buses"));
    }
    else{
        buses=data;
    }
    buses.forEach(function(bus) {
        let row=`<tr>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passanger}</td>
       <td>${bus.capacity}</td>
        
        </tr>`;
        tabledata=tabledata+row;
        
    });
    document.getElementById("data").innerHTML=tabledata;
}

display();

function addBus(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let source=document.getElementById("source").value;
    let destination=document.getElementById("destination").value;
    let number=document.getElementById("number").value;
    let passanger=document.getElementById("passanger").value;
    let capacity=document.getElementById("capacity").value;


    let newBus={};
    newBus.name=name;
    newBus.source=source;
    newBus.destination=destination;
    newBus.number=number;
    newBus.passanger=Number(passanger);
    newBus.capacity=Number(capacity);
   
    
    let buses=JSON.parse(localStorage.getItem("buses"));
    buses.push(newBus);
    localStorage.setItem("buses",JSON.stringify(buses));

    display();

    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("passanger").value="";
    document.getElementById("capacity").value="";

}

function searchSource(){
    let searchsrc=document.getElementById("searchSource").value;
    let buses=JSON.parse(localStorage.getItem("buses"));
    let getbussrc=buses.filter(function(bus){
        return bus.name.toUpperCase().indexOf(searchsrc.toUpperCase()) != -1;
    })
    display(getbussrc);
}

function searchDesti(){
     let searchdesti=document.getElementById("searchDesti").value;
     console.log(searchdesti);
    let buses=JSON.parse(localStorage.getItem("buses"));
     let getbusd=buses.filter(function(bus){
         return bus.name.toUpperCase().indexOf(searchdesti.toUpperCase()) !=-1;
     })

     display(getbusd);
}

