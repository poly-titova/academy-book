// Подготовим произвольный объект для записи в cookies
const arbitrary = {
  name: `Иван Денисович`,
  coordinates: {
    lat: 65.302287,
    lon: 52.920382
  }
};

// Функция для установки cookie
const storeData = (content) => {
  const dataString = encodeURIComponent(JSON.stringify(content));
  document.cookie = `some_data=${dataString}; Max-Age=36000`;
}

// Чтение cookie 
const retrieveData = () => {
  const dataString = document.cookie.match(/some_data=([^;$]+)/)[1];
  return JSON.parse(decodeURIComponent(dataString));
}
