<script>
    import coursesData from "../../lib/data/courses.json";
    import { onMount } from "svelte";

    let filteredCourses = coursesData;

    function applyFiltersFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const countryParam = params.get("country");
        const degreeParam = params.get("degree");
        const fieldParam = params.get("field");

        const countriesSelected = countryParam
            ? countryParam.split(",").map(v => v.trim()).filter(Boolean)
            : [];

        filteredCourses = coursesData.filter(c => {
            const countryOk = countriesSelected.length
                ? c.countries.some(cty => countriesSelected.includes(cty))
                : true;
            const degreeOk = degreeParam ? c.degree === degreeParam : true;
            const fieldOk = fieldParam ? c.field === fieldParam : true;
            return countryOk && degreeOk && fieldOk;
        });
    }

    onMount(() => {
        applyFiltersFromUrl();
    });
</script>

{#each filteredCourses as course}
    <article class="course-card">
        <a href={`/courses/${course.slug}`} class="card-link">
            <div class="card-content">
                <div class="card-badges">
                    <span class="field-badge">{course.field}</span>
                    <span class="degree-badge">{course.degree}</span>
                </div>

                <h3 class="course-name">{course.name}</h3>

                <div class="course-meta">
                    <div class="duration">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {course.duration}
                    </div>

                    <div class="tuition">
                        <span class="tuition-value">{course.average_tuition}</span>
                    </div>
                </div>

                <div class="card-footer">
                    <span class="view-link">
                        View Details
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    </article>
{/each}

<style>
/* Card styles are defined in src/styles/course.scss and page layout in src/styles/courses.scss */
</style>
