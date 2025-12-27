<script>
    import coursesData from "../../lib/data/courses.json";

    // This would be filtered based on active filters
    // For now, showing all courses
    let filteredCourses = coursesData;
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
/* Course card styles are in src/styles/course.scss, included via global.scss */
</style>
