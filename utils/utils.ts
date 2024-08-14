async function getAllCountry() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  const countryData = data.map((country: any) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital,
      region: country.region,
      population: country.population,
      area: country.area,
      timezones: country.timezones[0],
      latlong: country.latlng,
      map: country.maps.googleMaps,
    };
  });
  return countryData;
}

async function getCountryName(countryName: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
    );
    const data = await response.json();

    const countryData = data.map((country: any) => {
      return {
        name: country.name.common,
        flag: country.flags.png,
        capital: country.capital,
        region: country.region,
        population: country.population,
        area: country.area,
        timezones: country.timezones[0],
        latlong: country.latlng,
        map: country.maps.googleMaps,
      };
    });
    return countryData;
  } catch (error) {
    return [];
  }
}
export default getAllCountry;
export {getCountryName};
