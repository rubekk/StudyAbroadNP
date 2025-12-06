import type { ConsultanciesResponse, Consultancy, ConsultancyResponse } from "../types/consultancy";
import consultanciesJson from "../data/consultancies.json"

const getAllConsultancies = async (): Promise<ConsultanciesResponse> => {
    try {
        const consultanciesData: Consultancy[] = consultanciesJson;

        return {
            data: consultanciesData
        };
    } catch (error: any) {
        console.error("Error accessing consultancies data:", error);
        return { error: error.message };
    }
};

const getConsultancyBySlug = async (slug: string): Promise<ConsultancyResponse> => {
    try {
        const consultanciesData = await getAllConsultancies();

        if (consultanciesData.error) {
            throw new Error(consultanciesData.error);
        }

        const consultancyBuSlug = consultanciesData.data?.find((consultancy) => consultancy.slug === slug);

        if (!consultancyBuSlug) {
            throw new Error("Consultancy not found");
        }

        return {
            data: consultancyBuSlug
        };
    } catch (error: any) {
        return { error: error.message };
    }
};

export {
    getAllConsultancies,
    getConsultancyBySlug
}