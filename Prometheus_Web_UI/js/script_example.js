(function() {
    let child = document.createElement("li"); 
    let text = document.createTextNode("Fifth");
    child.appendChild(text);    
    let parent = document.getElementById("list"); 
    parent.appendChild(child);
})();