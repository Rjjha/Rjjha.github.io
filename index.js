
function setandupdate() {
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    console.log("Updating list..")
    if (localStorage.getItem('itemsJson') == null) {//local storage is used for finding any element in dom
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update() {
    if (localStorage.getItem('itemsJson') == null) {//local storage is used for finding any element in dom
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    let body_ = document.querySelector('.tablebody');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
       <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr
       `
    });
    body_.innerHTML = str;
}
let add = document.getElementById('add');
add.addEventListener('click', setandupdate);
update();

let x = document.getElementById('clear');
x.addEventListener('click', function () {
    if (confirm("Do you really want to clear")) {
        console.log("Clearing the storage");
        localStorage.clear();
        update();
    }
})

function deleted(index) {
    console.log("Delete", index);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(index, 1);//splice is used to delete a certain element in array
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

