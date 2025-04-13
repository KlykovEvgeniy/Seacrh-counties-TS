interface NativeName {
    [key: string]: {
        common: string
    }
}

interface Currencies {
    [key: string]: {
        name: string,
    }
}

interface Languages {
    [key: string]: string,
}

interface Flag {
    png: string,
}


export interface Country {
    name: {
        common: string,
        nativeName: NativeName,
    },
    population: number,
    region: string,
    subregion: string,
    tld: string[],
    capital: string,
    currencies: Currencies,
    languages: Languages,
    flags: Flag,
}