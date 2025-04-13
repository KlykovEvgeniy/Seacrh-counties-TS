import { useEffect, useState } from "react";
import { Country } from "../../../../App"
import { useGetCountryByNameQuery } from "../../../../features";
import { CountryCard } from "../../../../entities/CountryCard/CountryCard";
import { SearchInput } from "../../../../features/components/SearchInput/SearchInput";
import { Filter } from "../../../../features/components/Filter/Filter.";
export const CountryList = function () {
    const [countries, setCountries] = useState<Country[]>();
    const [name, setName] = useState<string>('');
    const [region, setRegion] = useState<string>('')
    const { data, isError } = useGetCountryByNameQuery([name, region]);

    useEffect(() => {
        if (!data) return;
        const sorted = [...data].sort((a, b) => {
            if (a.name.common < b.name.common) {
                return -1;
            }
            if (a.name.common > b.name.common) {
                return 1;
            }
            return 0;
        })

        setCountries(sorted)
    }, [data]);

    const handleChange = (value: string) => {
        setName(value)
    }

    const handleFilter = (value: string) => {
        setRegion(value)
    }

    return (
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <SearchInput fn={handleChange} />
            <Filter fn={handleFilter}/>
        </div>
            {
                !isError ?
                    <div style={{ display: "grid", gridTemplateColumns: 'repeat(3, minmax(0, auto))', justifyContent: 'space-between', alignItems: 'start', rowGap: '20px' }}>
                        {countries?.map(item => {
                            return <CountryCard key={item.name.common} country={item} />
                        })}
                    </div>
                    : <h1>Error</h1>
            }
        </>
    )
}