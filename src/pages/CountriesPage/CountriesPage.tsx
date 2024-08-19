import CountriesList from '../../widgets/CountriesList';
import { useEffect, useState } from 'react';
import { ICountry } from '../../entities/country';

const CountriesPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countriesError, setCountriesError] = useState<string>('');
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((e) => setCountriesError(e.message));
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {countriesError && countriesError}
      {countries.length > 0 ? (
        <CountriesList countries={countries} />
      ) : (
        <div>Countries not found</div>
      )}
    </>
  );
};

export default CountriesPage;
