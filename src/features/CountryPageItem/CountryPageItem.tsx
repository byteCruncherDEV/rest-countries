import { ICountryExtended } from '../../entities/country';
import { toNativeName, toStringMaps } from './utils/utils';

interface ICountryPageItem {
  country: ICountryExtended;
}

const CountryPageItem = ({ country }: ICountryPageItem) => {
  const nativeName = toNativeName(country.name.nativeName);
  console.log(country.maps);
  return (
    <>
      <div className="lg:grid grid-cols-2 border p-2 items-center">
        <div>
          <img className="" src={country.flags.svg} />
        </div>
        <div className="px-2 mt-2 lg:0">
          <h1 className="text-3xl font-semibold text-center">{country.name.common}</h1>
          <h2 className="text-2xl">Native name</h2>
          <p>Official: {nativeName.official}</p>
          <p>Common: {nativeName.common}</p>
        </div>
      </div>
      <div>
        <div className="border mt-2 p-2">
          <h2 className="text-2xl font-medium">Map links</h2>
          <ul>
            {toStringMaps(country.maps).map((map) => (
              <li>
                <a target="_blank" href={map[1]}>
                  {map[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border mt-2 p-2">
          <h2 className="text-2xl font-medium">Capitals:</h2>
          <ul>
            {country.capital.map((cap) => (
              <li>{cap}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CountryPageItem;
