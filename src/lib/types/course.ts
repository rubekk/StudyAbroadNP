export interface Course {
    id: number
    name: string
    slug: string
    field: string
    degree: string
    duration: string
    countries: string[]
    description: string
    average_tuition: string
    career_prospects: string[]
    popular_universities: string[]
    entry_requirements: {
        academic: string
        work_experience: string
        test_scores: string
        language: string
    }
}

export interface CoursesResponse {
    data?: Course[]
    error?: string
}

export interface CourseResponse {
    data?: Course
    error?: string
}