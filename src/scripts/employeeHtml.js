const html = {

employeesToHtml (employeeObj) {
return `
<div class="card" id="${employeeObj.id} "style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item">${employeeObj.employeeName}</li>
  <li class="list-group-item">${employeeObj.department.department}</li>
  <li class="list-group-item">${employeeObj.computer.computer}</li>
</ul>
</div> 
<br>`
}
}

export default html