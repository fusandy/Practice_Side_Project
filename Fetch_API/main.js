// const getDataBtn = document.querySelector("#getDataBtn");
const card = document.querySelector(".name-card-wrap");

// {
//     "gender": "female",
//     "name": {
//         "title": "Mrs",
//         "first": "Ömür",
//         "last": "Koyuncu"
//     },
//     "location": {
//         "street": {
//             "number": 2502,
//             "name": "Kushimoto Sk"
//         },
//         "city": "Muş",
//         "state": "Edirne",
//         "country": "Turkey",
//         "postcode": 10089,
//         "coordinates": {
//             "latitude": "76.2365",
//             "longitude": "116.4327"
//         },
//         "timezone": {
//             "offset": "+5:45",
//             "description": "Kathmandu"
//         }
//     },
//     "email": "omur.koyuncu@example.com",
//     "login": {
//         "uuid": "d86c4394-005e-407f-b1cc-f91fae3abebd",
//         "username": "silverzebra659",
//         "password": "shuang",
//         "salt": "au6bD0ne",
//         "md5": "f8cbf9e174d12c0cce6a570df6e49e39",
//         "sha1": "262f0f35fc8adab3663d7357c9ece6a18846e223",
//         "sha256": "86b683a5f1c93cecc752df63e41e5776f78dcadef4e0d91346adf5698bea4039"
//     },
//     "dob": {
//         "date": "1949-08-08T11:12:46.646Z",
//         "age": 73
//     },
//     "registered": {
//         "date": "2019-07-31T19:14:42.101Z",
//         "age": 3
//     },
//     "phone": "(926)-797-8172",
//     "cell": "(420)-607-1780",
//     "id": {
//         "name": "",
//         "value": null
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/women/64.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
//     },
//     "nat": "TR"
// }


window.onload = function () {

    // Get API
    // results=自定義筆數
    fetch("https://randomuser.me/api/?results=30")
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj);

        let author = obj.results;
        console.log(author);

        // Get Data Value

        let output = '';
        author.forEach(function(el){
            output += `
            <div class="col-12 col-md-4 col-lg-3 name-card">
              <div class="picture">
                <img
                  src=${el.picture.large}
                  alt="profile-img"
                />
              </div>
              <div class="profile-info">
                <div class="name">
                  <div class="first-name">${el.name.first}</div>
                  <div class="last-name">${el.name.last}</div>
                </div>
                <div class="country">${el.location.country}</div>
                <div class="cellphone">${el.cell}</div>
                <div class="email">
                  <i class="fas fa-envelope"></i>
                  ${el.email}
                </div>
              </div>
            </div>`
        });

        card.innerHTML = output
      });
};

// getDataBtn.addEventListener('click',getData)
