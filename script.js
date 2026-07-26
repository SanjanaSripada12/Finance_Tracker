let income = 0;
let expense = 0;

function addTransaction() {

    let description = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(description == "" || amount <= 0){
        alert("Enter valid details");
        return;
    }

    let table = document.getElementById("tableBody");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = description;
    cell2.innerHTML = type;
    cell3.innerHTML = "₹" + amount;

    if(type == "Income"){
        income = income + amount;
    }
    else{
        expense = expense + amount;
    }

    document.getElementById("income").innerHTML = "₹" + income;
    document.getElementById("expense").innerHTML = "₹" + expense;
    document.getElementById("balance").innerHTML = "₹" + (income - expense);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}
