const employees = [{
  id: 1,
  name: "John",
  age: 18,
  address: "New York"
},
{
  id: 2,
  name: "Mike",
  age: 22,
  address: "Canada"
},
{
  id: 3,
  name: "Linda",
  age: 19,
  address: "California"
},
{
  id: 4,
  name: "Peter",
  age: 25,
  address: "London"
},
{
  id: 5,
  name: "Tony",
  age: 17,
  address: "New York"
},
];

const tbody = document.getElementById("employeeTableBody");

employees.forEach((emp, index) => {
const row = document.createElement("tr");
row.innerHTML = `
<td>${index + 1}</td>
<td>${emp.name}</td>
<td>${emp.age}</td>
<td>${emp.address}</td>
`;
tbody.appendChild(row);
});