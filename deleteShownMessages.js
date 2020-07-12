function deleteMessagesShown() {

    var deleteMessageButtons = document.querySelectorAll('span.icon_nf.icon_refuse.js_actionKill.tooltip.js_hideTipOnMobile');

    for (let i = 0; i < deleteMessageButtons.length; i++) {
        deleteMessageButtons[i].click();
    }
};

let trash_box = document.querySelector('.trash_box');
var node      = trash_box.createElement("button");
var textnode = document.createTextNode("Water");

trashBox
trash_box.addEventListener('click', deleteMessagesShown);


var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"