// http://www.icndb.com/api/
//https://api.chucknorris.io/jokes/random
// https://api.chucknorris.io/jokes/categories
//https://api.chucknorris.io/jokes/random?category={category}

// API
// RESTful API
document.getElementById('get_data').addEventListener('click', loadJokes);
function loadJokes(e) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.chucknorris.io/jokes/random`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            let jokes = data.value;
            console.log(jokes);
        }
    }
    xhr.send();
    let category = document.getElementById('categoryJokes').value;
    console.log(category);

    let xhr1 = new XMLHttpRequest();
    // categories are ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]
    xhr1.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`, true);
    xhr1.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }
    xhr1.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            let jokes = data.value;
            console.log(jokes);
        }
    }
    xhr1.send();

    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', `https://api.chucknorris.io/jokes/categories`, true);
    xhr2.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }
    xhr2.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
        }
    }
    xhr2.send();
}