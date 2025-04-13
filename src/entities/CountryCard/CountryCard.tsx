import { FC } from "react"
import { Country } from "../../App";
import { Link } from "react-router-dom";

interface CountryCardProps {
    country: Country
}

export const CountryCard: FC<CountryCardProps> = function ({ country }) {
    return (
        <Link style={{maxWidth: '320px', display: 'flex', flexDirection: 'column'}} to={`/receive-state?state=${encodeURIComponent(JSON.stringify(country))}`}>
            <img style={{height: '180px', width: '100%'}} src={country.flags.png} alt="country flag" />
            <div style={{padding: '15px', backgroundColor: '#2222'}}>
                <h2>{country.name.common}</h2>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </Link>
    )
}