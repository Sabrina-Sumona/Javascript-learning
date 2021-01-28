//json : javascript object notation, structures similar to js object but works similar to xml
//used in php, js, python to data exchange between different systems

//object format
var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};
console.log(student);
// json format// but js treat it as js object
var student_json = {
    "name": "Rahim",
    "age": 26,
    "hometown": "Dhaka"
};
console.log(student_json);
console.log(student_json.name);// works as object
console.log(student_json.age);
// // JSON.stringify() --> JS object to JSON String
// // JSON.parse() -->  JSON String to JS Object
var student2_json = JSON.stringify(student);//direct conversion from object to json
console.log(student2_json);
var student_new = JSON.parse(student2_json);//conversion from json to object
console.log(student_new);
// var student0_json = JSON.parse(student_json);// as it is not treated as json
// console.log(student0_json);
var student3_json = JSON.stringify(student_json);// as it is treated as js object
console.log(student3_json);


//json datatypes
//varify a json goto https: //jsonlint.com
//json only supports string, number, boolean, null, array and json object
//json does not support undefined, date and function
var person = {
    name: "Karim",//string
    age: 25,//number
    hometown: "Bogra",
    married: false,//boolean
    dob: 1995-05-12,//date// if string then support//here json takes it as number and '-' as minus
    test_null: null,//null
    test_undefined: undefined,//undefined
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};
var person_json = JSON.stringify(person);
console.log(person_json.name);//not works
console.log(person_json.age);

// //json objects & array
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "../json/data.json", true);
xmlhttp.send();
function jsonData(json_obj) {
    console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    console.log(js_obj);
    for (x in js_obj.persons) {
        console.log(`index: ${x}`);
        var persons = js_obj.persons;
        console.log(persons[x]);
        for (y in persons[x]) {
            console.log(y);
            console.log(persons[x][y]);
        } 
    }
}