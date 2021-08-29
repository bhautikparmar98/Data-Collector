function onFormSubmit() {
    // call all the below functions here to use this function in the form while implementing onsubmit.
    data = readFormData();
    insertNewRecord(data);
    resetForm();
  }
  
  function readFormData() {
   // return all the input values from three input fields here.
      var x = document.getElementById("formvalue");
      var fname = x.elements[0].value;
      var lname = x.elements[1].value;
      var location =x.elements[2].value;
      var array = [fname,lname,location];
      return array
  }
  
  function insertNewRecord(data) {
  // this function should insert a new row with data in the table.
    //console.log(data[0]);
    if(data[0]==='' || data[1]==='' || data[2]===''){
      window.alert('input field cannot be empty');
      return
    }
    var table = document.getElementById("tabledata");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML=data[0];
    cell2.innerHTML=data[1];
    cell3.innerHTML=data[2];
  }
  function resetForm() {
   // this function should reset the form fields.
   document.getElementById("formvalue").reset();
  }
  if (typeof exports !== "undefined") {
    module.exports = {
      onFormSubmit,
      readFormData,
      insertNewRecord,
      resetForm,
    };
  }
  