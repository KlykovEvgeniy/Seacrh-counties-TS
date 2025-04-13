import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../../../App';
export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (build) => {
        return {
            getCountryByName: build.query<Country[], string[]>({
                query: ([name, region]) => {
                    if(name.trim() === ''){
                        return `/all`
                    }

                    if(region.trim() !== ''){
                        return `/subregion/${region}`
                    }

                    return `/name/${name}`
                }
            }),
        }
    },
})

export const { useGetCountryByNameQuery } = countryApi;