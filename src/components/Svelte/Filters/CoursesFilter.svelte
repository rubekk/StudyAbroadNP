<script>
    import { slide } from 'svelte/transition';
    import CourseSpecializationFilter from "./CourseSpecializationFilter.svelte";
    import CourseDegreeFilter from "./CourseDegreeFilter.svelte";
    import CourseFeeFilter from "./CourseFeeFilter.svelte";
    import CourseDurationFilter from "./CourseDurationFilter.svelte";

    // State for collapsible filters
    let expandedSections = {
        specialization: true,
        degree: true,
        fee: false,
        duration: false
    };

    function toggleSection(section) {
        expandedSections[section] = !expandedSections[section];
    }

    // Placeholder filter functions - implement actual filtering logic
    const updateSpecialization = (value, checked) => {
        console.log('Specialization:', value, checked);
        // Implement filter logic
    };

    const updateDegree = (value, checked) => {
        console.log('Degree:', value, checked);
        // Implement filter logic
    };

    const updateFee = (value, checked) => {
        console.log('Fee:', value, checked);
        // Implement filter logic
    };

    const updateDuration = (value, checked) => {
        console.log('Duration:', value, checked);
        // Implement filter logic
    };

    // Filter categories with metadata
    const filterCategories = [
        {
            id: 'specialization',
            title: 'Specialization',
            component: CourseSpecializationFilter,
            filterFunction: updateSpecialization,
        },
        {
            id: 'degree',
            title: 'Degree Level',
            component: CourseDegreeFilter,
            filterFunction: updateDegree,
        },
        {
            id: 'fee',
            title: 'Tuition Fee',
            component: CourseFeeFilter,
            filterFunction: updateFee,
        },
        {
            id: 'duration',
            title: 'Duration',
            component: CourseDurationFilter,
            filterFunction: updateDuration,
        }
    ];
</script>

<aside class="filters-sidebar">
    {#each filterCategories as category}
        <div class="filter-section" class:expanded={expandedSections[category.id]}>
            <button 
                class="filter-header" 
                on:click={() => toggleSection(category.id)}
                aria-expanded={expandedSections[category.id]}
            >
                <h4 class="filter-title">{category.title}</h4>
                <span class="expand-icon" class:rotated={expandedSections[category.id]}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            
            {#if expandedSections[category.id]}
                <div class="filter-content" transition:slide={{duration: 200}}>
                    <svelte:component 
                        this={category.component} 
                        filterFunction={category.filterFunction} 
                    />
                </div>
            {/if}
        </div>
    {/each}
</aside>

<style>
.filters-sidebar {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.filter-section {
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
}

.filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: white;
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: left;
}

.filter-header:hover {
    background: #fafafa;
}

.filter-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
}

.expand-icon {
    display: flex;
    align-items: center;
    color: #9ca3af;
    transition: transform 0.2s ease;
}

.expand-icon.rotated {
    transform: rotate(180deg);
}

.filter-content {
    padding: 0 1rem 1rem 1rem;
    background: white;
}
</style>
