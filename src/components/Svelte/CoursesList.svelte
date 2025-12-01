<script>
    import coursesData from "../../lib/data/courses.json";

    // This would be filtered based on active filters
    // For now, showing all courses
    let filteredCourses = coursesData;
</script>

{#each filteredCourses as course}
    <article class="card course">
        <div class="card-image">
            <img src={course.image_url} alt={course.name} loading="lazy" />
        </div>
        
        <div class="card-content">
            <div class="card-meta">
                <span class="degree-badge">{course.degree}</span>
                <span class="duration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {course.duration}
                </span>
            </div>
            
            <h3>{course.name}</h3>
            
            <p class="description">{course.description}</p>
            
            <div class="tuition">
                <span class="tuition-label">Average Tuition</span>
                <span class="tuition-value">{course.average_tuition}</span>
            </div>
            
            <a href={`/courses/${course.slug}`} class="view-details">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </article>
{/each}

<style>
/* Course card styles are in global.scss */
</style>
