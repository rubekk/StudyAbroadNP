export interface Hero {
    images: string[],
    title: string,
    subTitle: string,
    buttonText: string
}

export interface HeroResponse {
    data?: Hero;
    error?: string;
}