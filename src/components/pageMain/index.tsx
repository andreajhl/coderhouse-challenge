import { getContries } from '../../queries';
import React, { useEffect, useState } from 'react'
import { Country } from './index.d';
import Card from '../card';

const PageMain = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState({ show: false, text: ''});

  const getData = async () => {
    const res = await getContries();

    if (res.ok && res.data) setCountries(res.data);
    setError({ show: true, text: 'No hemos podido cargar los paises'})
  };

  useEffect(() => { getData() }, []);

  return (
    <main className='px-4 py-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {countries.map(country => (
        <Card
          key={country.title}
          {...country}
        />
      ) )}
    </main>
  )
}

export default PageMain;
