let users = []
const render = (s) =>{
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-header">
      ${s.id}
    </div>
    <ul class="list-group list-group-flush">
      <li id="s" class="list-group-item">${s.name}</li>
      <li id="d" class="list-group-item">${s.username}</li>
      <li id="w" class="list-group-item">${s.email}</li>
      <li id="q" class="list-group-item">${s.address.street}</li>
      <li id="a" class="list-group-item">${s.address.suite}</li>
      <li id="v" class="list-group-item">${s.address.city}</li>
      <li id="z" class="list-group-item">${s.address.zipcode}</li>
      
    </ul>
  </div>
    `
}
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((array)=>{
       array.map(item =>{
        let el = render(item)
        users.push(el)
       })
       console.log(users)
    })
    .then(()=>{
        users.join('')
        document.getElementById('bl').innerHTML= users
    })
};   
loadUsers()
