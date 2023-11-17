let itemList = document.getElementById("items");
let form = document.getElementById("add-form");
    
form.addEventListener('button', onsignup);
itemList.addEventListener("click",removeItem);
let myObj_Ser;
const createElement = (user) => {
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  li.className = 'list-group';
  li.id = user._id;
  li.innerText = `${user.name} -> ${user.email} -> ${user.phone} -> ${user.date} -> ${user.time}`;
  deleteBtn.className = 'delete';
  editBtn.className = 'edit';
  const deleteText = document.createTextNode('Delete');
  const editText = document.createTextNode('Edit');
  deleteBtn.appendChild(deleteText);
  editBtn.appendChild(editText);
  li.append(deleteBtn, editBtn);
  itemList.append(li);
  deleteItem(deleteBtn,user._id);
  editItem(editBtn, user);
}

const deleteItem = (deleteBtn,id) =>{
  deleteBtn.onclick = () =>{
      deleteDataFromCrudCrud(id);
  }
}

const editItem = (editBtn,user) =>{
  editBtn.onclick = () =>{
      let itemName = document.getElementById("name");
      itemName.value = user.name;
      let itemEmail = document.getElementById("email");
      itemEmail.value = user.email;
      let itemPhone = document.getElementById("phone");
      itemPhone.value = user.phone;
      let itemDate = document.getElementById("date");
      itemDate.value = user.date;
      let itemTime = document.getElementById("time");
      itemTime.value = user.time;
      deleteDataFromCrudCrud(user._id);
  }
}

function onsignup(event){
    event.preventDefault();
    let myObj = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        date: event.target.date.value,
        time: event.target.time.value
    }
    // myObj_Ser = JSON.stringify(myObj);
    // localStorage.setItem(myObj.email, myObj_Ser);
    postDataToCrudCrud(myObj);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  // window.addEventListener("DOMContentLoaded", () => {
  //   axios.get('https://crudcrud.com/api/415d78d4d19d4835be848cd04116adc0/appointmentData')
  //     .then((res) => {
  //         res.data.forEach(element => {
  //             createElement(element);
  //         });
  //     })
  //     .catch((err) => console.log(err))
  // })
  
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
    if(e.target.classList.contains('edit')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

  const postDataToCrudCrud = (myObj) => {
    axios.post('https://crudcrud.com/api/02421ce2aeb240069646059303b337c6/appointmentData', myObj)
      .then((res) => {
        createElement(res.data);
      })
      .catch((err) => console.log(err));
  }

  // const updateDataToCrudCrud = (id) => {
  //   axios.put(`https://crudcrud.com/api/02421ce2aeb240069646059303b337c6/appointmentData/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err))
  // }

  const deleteDataFromCrudCrud = (id) => {
    axios.delete(`https://crudcrud.com/api/02421ce2aeb240069646059303b337c6/appointmentData/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch ((err) => console.log(err))
  }

  const printAllDataFromCrudCrud = () => {
    axios.get('https://crudcrud.com/api/02421ce2aeb240069646059303b337c6/appointmentData')
        .then((res) => {
            res.data.forEach(element => {
                createElement(element);
            });
        })
        .catch((err) => console.log(err))
  }

  printAllDataFromCrudCrud();
