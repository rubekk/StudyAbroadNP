export interface Consultancy {
    id: number
    name: string
    slug: string
    location: string
    services: string[]
    rating: number
    countries: string[]
    description: string
    contact: {
        phone: string
        email: string
        address: string
    }
    image_url: string
    established: number
    successful_cases: number
}

export interface ConsultanciessResponse {
    data?: Consultancy[]
    error?: string
}

export interface ConsultancyResponse {
    data?: Consultancy
    error?: string
}
