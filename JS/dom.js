//dom 
// document object model
let val;
val = this;
console.log(val);
val = window;
console.log(val);
val = window.document;
console.log(val);
val = document;
console.log(val);
val = document.all;//as array
console.log(val);
val = document.all[2];//indexing
console.log(val);
val = document.all.length;
console.log(val);
val = document.head;
console.log(val);
val = document.body;
console.log(val);
val = document.doctype;
console.log(val);
val = document.domain;
console.log(val);
val = document.URL;
console.log(val);
val = document.characterSet;
console.log(val);
val = document.contentType;
console.log(val);
val = document.forms;
console.log(val);
val = document.forms[0];
console.log(val);
val = document.forms[0].method;
console.log(val);
val = document.forms[0].action;
console.log(val);
val = document.links;
console.log(val);
val = document.links[0];
console.log(val);
val = document.links[0].href;
console.log(val);
val = document.links[0].className;//as string
console.log(val);
val = document.links[0].classList;//as array
console.log(val);
val = document.images;
console.log(val);
val = document.scripts;
console.log(val);
val = document.scripts[0];
console.log(val);
val = document.scripts[1];
console.log(val);
val = document.scripts[1].src;
console.log(val);
val = document.scripts[1].getAttribute('src');
console.log(val);
links = document.links;
console.log(links);
let linkArr = Array.from(links);
console.log(linkArr);
linkArr.forEach(function (link) {
    console.log(link.getAttribute('href'));
});
console.log(links);
console.log(val);

// document.getElementById
//getting an element
val = document.getElementById("hd");//if there are multiple elements have same id, then takes the 1st one
console.log(val);
val = document.getElementById("hd").id;
console.log(val);
val = document.getElementById("hd").className;
console.log(val);
val = document.getElementById("hd").classList;
console.log(val);
//changing style
val = document.getElementById("hd");
val.style.background ="lightblue";
val.style.color ="darkblue";
val.style.padding ="10px";
val.style.margin ="10px";
val.style.display ="inline";
val.textContent = "New";
console.log(val.textContent = "<i>Hello!!<i>");//change the text but not style & return the text with spaces in the place of inner tags
console.log(val.innerText = "<i>Hi!!<i>");//does not change the text or style but return the text without any space or inner tag
console.log(val.innerHTML = "<i>Welcome!!<i>");//change the text but not style & return the text with inner tag but not the spaces
//document.querySelector(tagname/class/id)
val = document.querySelector("#hd");
console.log(val);
val = document.querySelector(".title");
console.log(val);
val = document.querySelector("h3");
console.log(val);
val = document.querySelector("ol");
console.log(val);
val = document.querySelector("li");//1st li in the document
console.log(val);
val = document.querySelector("ol li");//1st li in ol
console.log(val);
val = document.querySelector("ul li");//1st li in ul
console.log(val);
val.style.background="lightblue";
val = document.querySelector("ul li:last-child");//last li in ul
console.log(val);
val.style.background="lightgreen";
val = document.querySelector("ol li:nth-child(3)");//last li in ol
console.log(val);
val.style.background="purple";
val = document.querySelector("ol li:nth-child(odd)");//1st odd li in ol
console.log(val);
val = document.querySelector("ol li:nth-child(even)");//1st even li in ol
console.log(val);

// Multiselector 
// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
console.log(list);
console.log(list[0]);
list[0].style.background = 'red';
console.log(list[0]);
list[0].style.color = 'white';
console.log(list[0]);
list[0].style.padding = '10px';
console.log(list[0]);
list[0].textContent = 'Hello World!';
console.log(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
console.log(list);
console.log(list[0]);
list = document.querySelector('ul').getElementsByTagName('li');
console.log(list);
console.log(list[0]);
let lis = Array.from(list);//converts into array
lis.forEach(function(item){
    console.log(item);
});

// // document.querySelectorAll()
// // id -> #
// // classname -> .
// // tagname -> nothing
list = document.querySelectorAll('li');
console.log(list);
list = document.querySelectorAll('ol li');
console.log(list);//querySelectorAll converts into array itself
list.forEach(function(item){
    console.log(item);
});
let liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd);
let liEve = document.querySelectorAll('li:nth-child(even)');
console.log(liEve);
liOdd.forEach(function(item){
    item.style.background = 'grey';
    item.style.color = 'white';
    console.log(item);
});
liEve.forEach(function(item){
    item.style.background = 'red';
    item.style.color = 'white';
    console.log(item);
});

// Traversing the DOM
list = document.querySelector('ul');
val = list;
console.log(val);
listItem = document.querySelector('ul li');
val = listItem;
console.log(val);
listItem = document.querySelector('ul li:last-child');
val = listItem;
console.log(val);
listItem = document.querySelector('ul li:first-child');
val = listItem;
console.log(val);

// Get Child Nodes
val = list;
console.log(val);
val = list.childNodes;// show text as enter used between each li
console.log(val);
val = list.childNodes[0];
console.log(val);
val = list.childNodes[1];
console.log(val);
val = list.childNodes[2];
console.log(val);
val = list.childNodes[1].nodeName;
console.log(val);
val = list.childNodes[1].nodeType;//return 1 as it is element
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
console.log(val);
val = list.childNodes[0].nodeType;//return 3 as it is text
console.log(val);

// Get Child Nodes without text nodes
val = list;
console.log(val);
val = list.children;
console.log(val);
val = list.children[1];
console.log(val);
list.children[0].textContent = "Hi";
val = list.children[1].children;
console.log(val);
val = list.children[1].children[0];
console.log(val);
val = list.children[1].children[0].id;
console.log(val);
val = list.children[1].children[0].href;
console.log(val);

//direct child access
val = list;
console.log(val);
val = list.firstChild;
console.log(val);
val = list.firstElementChild;
console.log(val);
val = list.lastChild;
console.log(val);
val = list.lastElementChild;
console.log(val);
//count
val = list.childElementCount;
console.log(val);

//parent access
val = listItem;
console.log(val);
val = listItem.parentElement;
console.log(val);
val = listItem.parentNode;//same as parentElement
console.log(val);
val = listItem.parentElement.parentElement;
console.log(val);

//siblings access
val = listItem;
console.log(val);
val = listItem.nextSibling;
console.log(val);
val = listItem.nextSibling.nextSibling;
console.log(val);
val = listItem.nextSibling.nextSibling.nextSibling.nextSibling;
console.log(val);
val = listItem.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
console.log(val);
val = listItem.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(val);
val = val.previousSibling;
console.log(val);
val = val.previousElementSibling;
console.log(val);
val = val.previousElementSibling.previousElementSibling;
console.log(val);

// Adding Element to DOM
// Create Element for ol
list = document.querySelector('ol');
console.log(list);
let olItem = document.createElement('li');
console.log(olItem);
console.log(list);
// Add Id and Class
olItem.className = "a new another-class";
console.log(olItem);
olItem.id = "new-element";
console.log(olItem);
// Add Attribute
olItem.setAttribute('title', 'A title to new Element');
console.log(olItem);
//Add text 
olItem.appendChild(document.createTextNode('JavaScript'));
console.log(olItem);
//insert into ol
val = document.querySelector('ol').appendChild(olItem);
console.log(val);
list = document.querySelector('ol');
console.log(list);

// Create Element for ul
list = document.querySelector('ul');
console.log(list);
let ulItem = document.createElement('li');
console.log(ulItem);
console.log(list);
// Create link
let link = document.createElement('a');
console.log(link);
//Add text 
link.appendChild(document.createTextNode('LinkedIn'));
console.log(link);
//Add href 
link.setAttribute('href', 'https://www.linkedin.com');
console.log(link);
//insert link into ulitem
ulItem.appendChild(link);
console.log(ulItem);
//insert ulitem into ul
val = document.querySelector('ul').appendChild(ulItem);
console.log(val);
console.log(ulItem);
list = document.querySelector('ul');
console.log(list);


// // Replacing Elements
//create heading
let newHeading = document.createElement('h1');
//add text
newHeading.appendChild(document.createTextNode('H1 New Heading'));
//add class
newHeading.className = "sumple-class";
//call old heading
let oldHeading = document.querySelector('h3');//1st h3 selected
//call old heading's parent
let parent = document.querySelector('.container');//call by class
//parent = oldHeading.parentElement; // same 
//replace child
parent.replaceChild(newHeading, oldHeading);
console.log(newHeading);
console.log(oldHeading);
console.log(parent);


//Remove element
//call all
listItem = document.querySelectorAll('li');
console.log(listItem);
//remove 5th element from li
listItem[5].remove();
list = document.querySelector('ul');
console.log(list);
//remove 3rd child element from ul
list.removeChild(lis[3]);
//add class
list.classList.add("test");
console.log(list);
list.classList.add("test-new");
console.log(list);
// remove class
list.classList.remove("test-new");
console.log(list);
// check Attribute if exist
val = list.hasAttribute('title');
console.log(val);
val = list.hasAttribute("class");
console.log(val);
// add Attribute
list.setAttribute("title", "New title");
console.log(list);
// remove Attribute
list.removeAttribute("title");
console.log(list);