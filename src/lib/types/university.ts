export interface University {
    name: string;
    slug: string;
    city: string;
    country: string;
    min_fee: number;
    max_fee: number;
    specializations: string[];
    min_duration: number;
    max_duration: number;
    scholarships: string[];
    time: string[];
    degrees: string[];
    acceptedExams: string[];
    image_url: string;
}

export interface UniversityCard {
    name: string;
    slug: string;
    city: string;
    country: string;
    image_url: string;
}

export interface UniversitiesResponse {
    data?: University[];
    error?: string;
}

export interface UniversityResponse {
    data?: University;
    error?: string;
}