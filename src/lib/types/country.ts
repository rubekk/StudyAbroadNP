export interface Country {
    country: string;
    data: {
        slug: string;
        title: string;
        meta_description: string;
        introduction: string[];
        required_documents: {
            title: string;
            starting_description: string;
            ending_description: string;
            documents: {
                document_title: string;
                document_info: string;
            }[];
        };
        featured_image: {
            url: string;
            alt: string;
        };
        conclusion: string[];
        cost_to_study_table: {
            title: string;
            starting_description: string;
            ending_description: string;
            headings: string[];
            table_data: {
                programs: string;
                tuition_fees: string;
            }[];
        };
        language_score_requirements_table: {
            title: string;
            starting_description: string;
            ending_description: string;
            headings: string[];
            table_data: {
                test: string;
                diploma: string;
                undergraduate: string;
                graduate: string;
            }[];
        };
        courses_and_cost_table: {
            title: string;
            starting_description: string;
            ending_description: string;
            headings: string[];
            table_data: {
                course: string;
                tuition_fees: string;
                popular_universities: string[];
            }[];
        };
    };
}

export interface CountryCard {
    country: string;
    data: {
        slug: string;
        featured_image: {
            url: string;
            alt: string;
        }
    };
}

export interface CountriesResponse {
    data?: Country[];
    error?: string;
}

export interface CountryResponse {
    data?: Country;
    error?: string;
}
