// Fetch API
// Fetch API Uses JavaSript Promise

document.getElementById("get_data").addEventListener('click', getData);

// function getData() {
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(function (res) {
//             // console.log(res);
//             // console.log(res.text());
//             // console.log(res.json());
//             return res.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// }

// Arrow Function
function getData() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => { console.log(err); })
}