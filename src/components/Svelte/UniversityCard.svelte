<script lang="ts">
    import type { UniversityCard } from "@/lib/types/university";
    import SvelteIcon from "./SvelteIcon.svelte";
    import { routes } from "@/lib/routes";

    export let universityCardData: UniversityCard = {
        name: "",
        slug: "",
        city: "",
        country: "",
        image_url: "",
        min_fee: 0,
        max_fee: 0,
        time: [],
        specializations: [],
    };

    const icons = {
        mapDot: "/src/icons/mapDot.svg",
        cash: "/src/icons/cash.svg",
        clock: "/src/icons/clock.svg",
    };
</script>

<div class="card university">
    <div class="img">
        <img
            src={universityCardData.image_url || "/images/university-default.jpg"}
            alt={universityCardData.name}
            loading="lazy"
        />
    </div>

    <div class="text">
        <h3 class="name">
            <a href={`${routes.UNIVERSITIES}/${universityCardData.slug}`}>
                {universityCardData.name}
            </a>
        </h3>

        <div class="text-btm">
            <div class="location">
                <SvelteIcon iconUrl={icons.mapDot} />
                <span>{universityCardData.city}, {universityCardData.country}</span>
            </div>

            <div class="fee">
                <SvelteIcon iconUrl={icons.cash} />
                <span>{universityCardData.min_fee} lakhs - {universityCardData.max_fee} lakhs</span>
            </div>

            <div class="time">
                <SvelteIcon iconUrl={icons.clock} />
                <span>3 years - 4 years</span>
            </div>

            <a href={`${routes.UNIVERSITIES}/${universityCardData.slug}`} class="view-details">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<style>
    /* Styles are handled in global.scss for .card.university */
</style>
