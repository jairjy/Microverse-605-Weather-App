import weatherKey from './helper/weatherKey';

export default async function fetchWeather(query, unit = 1) {
  try {
    const fetchString = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit === 1 ? 'metric' : 'imperial'}&APPID=${weatherKey()}`;
    const fetchData = await fetch(fetchString, { mode: 'cors' });
    const data = await fetchData.json();
    // console.log(data);
    return [data, unit];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return null;
  }
}