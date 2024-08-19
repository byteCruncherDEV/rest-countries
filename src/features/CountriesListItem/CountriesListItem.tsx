import { Link } from 'react-router-dom';
import { toLinkCountry } from './utils/utils';
import { ICountry } from '../../entities/country';

interface ICountryListItem {
  country: ICountry;
}

const CountriesListItem = ({ country }: ICountryListItem) => {
  return (
    <Link
      to={toLinkCountry(country.name.common)}
      className="flex border rounded items-center justify-between p-2 flex-col sm:flex-row">
      <div className="flex items-center">
        <div className="md:w-[100px] flex justify-center">
          <img loading="lazy" className="h-[1rem]" src={country.flags.svg} />
        </div>
        <div className="ml-2 md:ml-0">{country.name.common}</div>
      </div>
      <div>
        <button className="border rounded p-2 hover:bg-gray-200">Подробнее</button>
      </div>
    </Link>
  );
};

export default CountriesListItem;
