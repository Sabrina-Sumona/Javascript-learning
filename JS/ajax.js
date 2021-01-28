// Asynchronous Programming
// In Asynchronous Programming Programes do not run sequentially and one is not wait because of another one is late
// AJAX = Asynchronous JavaScript And XML
//but we use here JSON not XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object (Xml Http Request)
    let xhr = new XMLHttpRequest();
    // Open function to access datas
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function () {
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            console.log(this.status);
            console.log(this.responseText);
            //show on the page
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
        }
        console.log(xhr);
    }
    xhr.send();

    // another old technique
    xhr.onreadystatechange = function () {
        // readyState Values
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready
        console.log(this.readyState);
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }

    //seen if loading
    xhr.onprogress = function () {
        console.log(xhr.readyState);
    }
}