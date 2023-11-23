
// Обработчик события отправки формы
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    let api_key = '784b6aa8319e639080f53150b0d20e4d'
    var inputCityName = document.getElementById('seach_city_input').value;
  
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.openweathermap.org/data/2.5/find?q=" + inputCityName + "&appid=" + api_key + "&units=metric&type=like");
    request.onload = function() {
      if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        var cities = response.list;
  
        var table = document.getElementById('responseTable');
        table.innerHTML = ''; // Очищаем содержимое таблицы перед обновлением
  
        // Добавляем строки в таблицу для каждого города
        cities.forEach(function(city) {
          var row = document.createElement('tr');
  
          var nameCell = document.createElement('td');
          nameCell.textContent = city.name;
          row.appendChild(nameCell);
  
          var coordsCell = document.createElement('td');
          coordsCell.textContent = '(' + city.coord.lat + ', ' + city.coord.lon + ')';
          row.appendChild(coordsCell);
  
          var temperatureCell = document.createElement('td');
          temperatureCell.textContent = city.main.temp + '°C';
          row.appendChild(temperatureCell);
  
          var windCell = document.createElement('td');
          windCell.textContent = city.wind.speed + ' м/с';
          row.appendChild(windCell);
  
          var cloudinessCell = document.createElement('td');
          cloudinessCell.textContent = city.weather[0].description;
          row.appendChild(cloudinessCell);
  
          var weatherButtonCell = document.createElement('td');
          var weatherButton = document.createElement('button');
          weatherButton.textContent = 'Погода';
          weatherButton.addEventListener('click', function() {
            // Обработчик события клика на кнопку  "Погода"
            showWeather(city);
          });
          weatherButtonCell.appendChild(weatherButton);
          row.appendChild(weatherButtonCell);
  
          table.appendChild(row);
        });
      } else {
        alert("Ошибка при получении данных");
      }
    };
    request.send();
  });
  
  // Функция для отображения информации о погоде
  function showWeather(city) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = ''; // Очищаем содержимое блока перед обновлением
  
    var cityName = document.createElement('h4');
    cityName.textContent = 'Город и его местоположение: ' + city.name + ' (' + city.coord.lat + ', ' + city.coord.lon + ')';
    weatherInfo.appendChild(cityName);
  
    var temperature = document.createElement('p');
    temperature.textContent = 'Температура: ' + city.main.temp + '°C';
    weatherInfo.appendChild(temperature);
  
    var wind = document.createElement('p');
    wind.textContent = 'Ветер: ' + city.wind.speed + ' м/с';
    weatherInfo.appendChild(wind);
  
    var cloudiness = document.createElement('p');
    cloudiness.textContent = 'Облачность: ' + city.weather[0].description;
    weatherInfo.appendChild(cloudiness);
  }
  