import { useLocation } from "react-router-dom"
import { Country } from "../../App";
import { Link } from "react-router-dom";

export const CountryPage = function () {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const state: Country = JSON.parse((searchParams.get('state'))!);
    const natName = state.name.common !== 'Antarctica' ? Object.keys(state.name.nativeName)[0] : 'none';
    const curFirst = state.name.common !== 'Antarctica' ? Object.keys(state.currencies)[0] : 'none';
    return (
        <div>
            <Link to='/'>Back</Link>
            {
                state.name.common !== 'Antarctica' &&
                <div>
                    <img src={state.flags.png} alt="countryimg" />
                    <h1>{state.name.common}</h1>
                    {natName && <h2>Native Name: {state.name.nativeName[`${natName}`].common}</h2>}
                    <p>Population: {state.population}</p>
                    <p>Region: {state.region}</p>
                    <p>Sub region: {state.subregion}</p>
                    <p>Capital: {state.capital}</p>
                    <p>Top Level Domain: {state.tld[0]}</p>
                    <p>Currensies: {state.currencies[`${curFirst}`].name}</p>
                </div>
            }

            {state.name.common === 'Antarctica' &&
                <div>
                    <img src={state.flags.png} alt="antarctica flag" />
                    <h1>{state.name.common}</h1>
                </div>}

        </div>
    );
}