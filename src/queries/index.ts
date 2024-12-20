import { GetCountries } from './index.d';

const BASE_URL = 'https://restcountries.com/v3.1/all';

const formatCountry = (countries: Record<string, any>) => (
  countries.map(country => ({
    title: country.name.common,
    image: country.flags.png,
    url: country.maps.googleMaps
  }))
);

export const getContries: GetCountries = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    if (!res.ok) throw Error('Search Error');

    return { ok: true, data: formatCountry(data)};
  } catch (error) {
    console.log(error);
    return { ok: false }
  }
};