let count = 0;
const button = document.getElementById("myButton");
const countDisplay = document.getElementById("count");
button.addEventListener('click', function(){
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            jokebox.innerHTML = data.joke;
        })
});
  
