const button = document.querySelector('.search');
button.addEventListener('click', () => {
    let language = document.querySelector('.username').value;
    console.log(language);

    fetch(`https://opentdb.com/api.php?amount=1&category=14`)
    .then((result) => {
        console.log(result);
        return result.json();  // Return the JSON promise
    })
    .then((data) => {
        console.log(data);  // This will log the actual JSON data from GitHub
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
    });

});

function randomfinder(size){
    let result = Math.floor(Math.random() *size) -1;
    return result;
}