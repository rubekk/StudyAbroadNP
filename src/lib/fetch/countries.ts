import type { CountriesResponse, Country, CountryResponse } from "../types/country";
import countriesJson from "../data/countries.json"

const getAllCountries = async (): Promise<CountriesResponse> => {
    try {
        const countriesData: Country[] = countriesJson as Country[];

        return {
            data: countriesData
        };
    } catch (error: any) {
        console.error("Error accessing universities data:", error);
        return { error: error.message };
    }
};

const getCountryBySlug = async (slug: string): Promise<CountryResponse> => {
    try {
        const countriesData = await getAllCountries();

        if (countriesData.error) {
            throw new Error(countriesData.error);
        }

        const countryBySlug = countriesData.data?.find((country) => country.data.slug === slug);

        if (!countryBySlug) {
            throw new Error("Country not found");
        }

        return {
            data: countryBySlug
        };
    } catch (error: any) {
        return { error: error.message };
    }
};

export {
    getAllCountries,
    getCountryBySlug
}