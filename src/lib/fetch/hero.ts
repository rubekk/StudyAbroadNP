import type { Hero, HeroResponse } from "../types/hero";
import heroJson from "../data/hero.json"

const getHero = async (): Promise<HeroResponse> => {
    try {
        const heroData: Hero = heroJson as Hero;

        return {
            data: heroData
        };
    } catch (error: any) {
        console.error("Error accessing hero data:", error);
        return { error: error.message };
    }
};

export { getHero }