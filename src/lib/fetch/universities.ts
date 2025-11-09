import type { UniversitiesResponse, University, UniversityResponse } from "../types/university";
import universitiesJson from "../data/universities.json"

const getAllUniversities = async (): Promise<UniversitiesResponse> => {
    try {
        const universitiesData: University[] = universitiesJson;
        
        return {
            data: universitiesData
        };
    } catch (error: any) {
        console.error("Error accessing universities data:", error);
        return { error: error.message };
    }
};

const getUniversityBySlug = async (slug: string): Promise<UniversityResponse> => {
    try {
        const universitiesData = await getAllUniversities();

        if (universitiesData.error) {
            throw new Error(universitiesData.error);
        }

        const universityBySlug = universitiesData.data?.find((university) => university.slug === slug);

        if (!universityBySlug) {
            throw new Error("University not found");
        }

        return {
            data: universityBySlug
        };
    } catch (error: any) {
        return { error: error.message };
    }
};

export {
    getAllUniversities,
    getUniversityBySlug
}