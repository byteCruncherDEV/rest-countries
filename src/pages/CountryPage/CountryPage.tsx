import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ICountryExtended } from '../../entities/country';
import CountryPageItem from '../../features/CountryPageItem';

const CountryPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryError, setCountryError] = useState<string | null>(null);
  const [country, setCountry] = useState<ICountryExtended>();

  const { name } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${name}/?fields=name,flags,capital,maps`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((e) => setCountryError(e.message));
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {countryError && <div>{countryError}</div>}

      {country && <CountryPageItem country={country} />}
    </div>
  );
};

export default CountryPage;
