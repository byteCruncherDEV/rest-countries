import CountriesList from '../../widgets/CountriesList';
import { useEffect, useState } from 'react';
import { ICountry } from '../../entities/country';

const CountriesPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
      {!isLoading && countries.length <= 0 ? (
        <div>Countries not found</div>
      ) : (
        <CountriesList countries={countries} />
      )}
    </>
  );
};

export default CountriesPage;
