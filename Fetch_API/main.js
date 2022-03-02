const getDataBtn = document.querySelector('#getDataBtn')
const info = document.querySelector('#info')

function getData(){
    // console.log('hi')

    // Get API
    // results=自定義筆數
    fetch('https://randomuser.me/api/?results=30')
    .then(res=>res.json())
    .then(obj => {
        console.log(obj)

        let author = obj.results
        console.log(author)

        // Get Data Value
        let output = "<h2><center>Get User Data</center></h2>"

        author.forEach(function(el){
            output += `
            <div class="container">
                <div class="card">
                    <ul class="list-group">
                        <li class="list-group-item"><h2>Name: ${el.name.first}</h2></li>
                        <li class="list-group-item"><img src="${el.picture.large}"></li>
                        <li class="list-group-item">Mobile: ${el.cell}</li>
                        <li class="list-group-item">DOB: ${el.dob.date}</li>
                        <li class="list-group-item">Age: ${el.dob.age}</li>
                        <li class="list-group-item">Email: ${el.email}</li>
                        <li class="list-group-item">Gender: ${el.gender}</li>
                        <li class="list-group-item">City: ${el.location.city}</li>
                        <li class="list-group-item">Country: ${el.location.country}</li>
                        <li class="list-group-item">PostCode: ${el.location.postcode}</li>
                    </ul>
                </div>
            </div>`
        });

        info.innerHTML = output
    })
}
getDataBtn.addEventListener('click',getData)