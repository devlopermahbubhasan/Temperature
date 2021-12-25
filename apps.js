const search = document.getElementById('search-btn');
search.addEventListener('click', function () {
    const input = document.getElementById('input_btn').value; 
    fetch('https:api.openweathermap.org/data/2.5/weather?q='+input+'&appid=d8da2f2335e3f1abf4d1e7d33cad740f')
  .then(response => response.json())
  .then(data => {
    const name = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const description = data.weather[0].description;
    document.getElementById('name').innerText = name;
    document.getElementById('team').innerText = temp.toFixed(2);
    document.getElementById('description').innerText = description;
  })
  

})

