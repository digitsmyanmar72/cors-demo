document.getElementById('fetchData').addEventListener('click', () => {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});