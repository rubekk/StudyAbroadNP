<script lang="ts">
    import { filterData } from "../../lib/svelteFilters/filterFunctions";
    import { filter } from "../../lib/svelteFilters/filter";
    import UniversityCard from "./UniversityCard.svelte";
    import type { University } from "@/lib/types/university";

    let filteredUniversities: University[] = [];

    filter.subscribe((value) => {
        filteredUniversities = filterData(value);
    });
</script>

<section class="universities-list" aria-labelledby="list-section">
    {#each filteredUniversities as university}
        <UniversityCard universityCardData={university} />
    {/each}
</section>
