import CountriesListItem from '../../features/CountriesListItem';
import { ICountry } from '../../entities/country';

interface ICountriesList {
  countries: ICountry[];
}

const CountriesList = ({ countries }: ICountriesList) => {
  return (
    <ul className="space-y-2">
      {countries.map((country) => (
        <li key={country.name.common}>
          <CountriesListItem country={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
