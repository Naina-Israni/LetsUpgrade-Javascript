let employee=[
    {
        name: "Alex",
        age: 35,
        city: "New York",
        salary: 35000,
    },
    {
        name: "Suzuki",
        age: 30,
        city: "Tokyo",
        salary: 40000,
    },
    {
        name: "Martin",
        age: 38,
        city: "NewZeland",
        salary: 35000,
    },
];

function display(data)
{
    let tabledata="";
    data.forEach(function(emp,index){
        let row=`<tr><td>${index+1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td><button onclick="deleteEmp(${index})">Delete</button></td>
        </tr>`;
        tabledata=tabledata+row;
    });
    document.getElementById("data").innerHTML=tabledata;
}

display(employee);

function searchByName()
{
    let search=document.getElementById("searchName").value;
    let empname=employee.filter(function(emp){
        return emp.name.toUpperCase().indexOf(search.toUpperCase()) != -1;
    });
display(empname);
}

function searchByCity()
{
  let search=document.getElementById("searchCity").value;
  let empcity=employee.filter(function(emp){
   return emp.city.toUpperCase().indexOf(search.toUpperCase()) != -1;
    
  });
  display(empcity)
}

function deleteEmp(index)
{
  employee.splice(index,1);
  display(employee);
}