<script>
    import { slide } from 'svelte/transition';
    import {
        updateSpecialization,
        updateCountry,
        updateDegree,
        updateFee,
        updateExam,
        updateTime,
        updateScholarship,
        updateDuration,
    } from "../../../lib/svelteFilters/filterFunctions";
    import SpecializationFilter from "./SpecializationFilter.svelte";
    import CountryFilter from "./CountryFilter.svelte";
    import DegreeFilter from "./DegreeFilter.svelte";
    import FeeFilter from "./FeeFilter.svelte";
    import AcceptedExamsFilter from "./AcceptedExamFilter.svelte";
    import TimeFilter from "./TimeFilter.svelte";
    import DurationFilter from "./DurationFilter.svelte";
    import ScholarshipFilter from "./ScholarshipFilter.svelte";

    // State for collapsible filters
    let expandedSections = {
        country: true,
        specialization: true,
        degree: false,
        fee: false,
        exam: false,
        time: false,
        scholarship: false,
        duration: false
    };

    function toggleSection(section) {
        expandedSections[section] = !expandedSections[section];
    }

    // Filter categories with metadata
    const filterCategories = [
        {
            id: 'country',
            title: 'Country',
            icon: '🌍',
            component: CountryFilter,
            filterFunction: updateCountry,
            priority: 'high'
        },
        {
            id: 'specialization',
            title: 'Specialization',
            icon: '📚',
            component: SpecializationFilter,
            filterFunction: updateSpecialization,
            priority: 'high'
        },
        {
            id: 'fee',
            title: 'Tuition Fee',
            icon: '💰',
            component: FeeFilter,
            filterFunction: updateFee,
            priority: 'medium'
        },
        {
            id: 'degree',
            title: 'Degree Level',
            icon: '🎓',
            component: DegreeFilter,
            filterFunction: updateDegree,
            priority: 'medium'
        },
        {
            id: 'exam',
            title: 'Accepted Exams',
            icon: '📝',
            component: AcceptedExamsFilter,
            filterFunction: updateExam,
            priority: 'low'
        },
        {
            id: 'time',
            title: 'Intake Time',
            icon: '📅',
            component: TimeFilter,
            filterFunction: updateTime,
            priority: 'low'
        },
        {
            id: 'scholarship',
            title: 'Scholarships',
            icon: '🏆',
            component: ScholarshipFilter,
            filterFunction: updateScholarship,
            priority: 'low'
        },
        {
            id: 'duration',
            title: 'Duration',
            icon: '⏱️',
            component: DurationFilter,
            filterFunction: updateDuration,
            priority: 'low'
        }
    ];
</script>

<aside class="filters-sidebar" role="region" aria-label="University filters">
    <!-- Popular Quick Filters -->
    <div class="quick-filters-section">
        <h3 class="section-title">
            <span class="section-icon">⚡</span>
            Quick Filters
        </h3>
        <div class="quick-filters-grid">
            <button class="quick-filter-btn" data-filter="usa">
                <span class="flag">🇺🇸</span>
                USA
            </button>
            <button class="quick-filter-btn" data-filter="uk">
                <span class="flag">🇬🇧</span>
                UK
            </button>
            <button class="quick-filter-btn" data-filter="canada">
                <span class="flag">🇨🇦</span>
                Canada
            </button>
            <button class="quick-filter-btn" data-filter="australia">
                <span class="flag">🇦🇺</span>
                Australia
            </button>
            <button class="quick-filter-btn" data-filter="scholarship">
                <span class="flag">💰</span>
                With Scholarships
            </button>
            <button class="quick-filter-btn" data-filter="low-cost">
                <span class="flag">💸</span>
                Affordable
            </button>
        </div>
    </div>

    <!-- Advanced Filters -->
    <div class="advanced-filters">
        <div class="filters-header">
            <h3 class="section-title">
                <span class="section-icon">🔍</span>
                Advanced Filters
            </h3>
        </div>

        <!-- High Priority Filters (Always Visible) -->
        <div class="priority-filters">
            {#each filterCategories.filter(cat => cat.priority === 'high') as category}
                <div class="filter-section expanded">
                    <div class="filter-header">
                        <h4 class="filter-title">
                            <span class="filter-icon">{category.icon}</span>
                            {category.title}
                        </h4>
                    </div>
                    <div class="filter-content">
                        <svelte:component 
                            this={category.component} 
                            filterFunction={category.filterFunction} 
                        />
                    </div>
                </div>
            {/each}
        </div>

        <!-- Medium & Low Priority Filters (Collapsible) -->
        <div class="collapsible-filters">
            {#each filterCategories.filter(cat => cat.priority !== 'high') as category}
                <div class="filter-section" class:expanded={expandedSections[category.id]}>
                    <button 
                        class="filter-header" 
                        on:click={() => toggleSection(category.id)}
                        aria-expanded={expandedSections[category.id]}
                        aria-controls="filter-{category.id}"
                    >
                        <h4 class="filter-title">
                            <span class="filter-icon">{category.icon}</span>
                            {category.title}
                        </h4>
                        <span class="expand-icon" class:rotated={expandedSections[category.id]}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="6,9 12,15 18,9"></polyline>
                            </svg>
                        </span>
                    </button>
                    
                    {#if expandedSections[category.id]}
                        <div class="filter-content" id="filter-{category.id}" transition:slide={{duration: 200}}>
                            <svelte:component 
                                this={category.component} 
                                filterFunction={category.filterFunction} 
                            />
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <!-- Filter Actions -->
    <div class="filter-actions">
        <button class="reset-btn" id="resetAllFilters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
            </svg>
            Reset All Filters
        </button>
        
        <button class="apply-btn" id="applyFilters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            Apply Filters
        </button>
    </div>
</aside>

<style>
.filters-sidebar {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #f1f5f9;
    overflow: hidden;
    height: fit-content;
    position: sticky;
    top: 20px;
}

/* Quick Filters Section */
.quick-filters-section {
    padding: 20px;
    border-bottom: 1px solid #f1f5f9;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 16px 0;
}

.section-icon {
    font-size: 18px;
}

.quick-filters-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.quick-filter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 13px;
    font-weight: 500;
    color: #475569;
    text-align: left;
}

.quick-filter-btn:hover {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.quick-filter-btn.active {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.flag {
    font-size: 16px;
}

/* Advanced Filters */
.advanced-filters {
    padding: 20px;
}

.filters-header {
    margin-bottom: 20px;
}

/* Filter Sections */
.filter-section {
    margin-bottom: 16px;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s ease;
}

.filter-section:hover {
    border-color: #e2e8f0;
}

.filter-section.expanded {
    border-color: #3b82f6;
}

.filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: #f8fafc;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border: none;
    width: 100%;
    text-align: left;
}

.filter-header:hover {
    background: #f1f5f9;
}

.filter-section.expanded .filter-header {
    background: #eff6ff;
}

.filter-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0;
}

.filter-icon {
    font-size: 16px;
}

.expand-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    color: #64748b;
}

.expand-icon.rotated {
    transform: rotate(180deg);
}

.filter-content {
    padding: 16px;
    background: white;
    border-top: 1px solid #f1f5f9;
}

/* Priority Filters */
.priority-filters .filter-section {
    border-color: #e2e8f0;
}

.priority-filters .filter-header {
    background: white;
    cursor: default;
    padding: 12px 16px;
}

.priority-filters .filter-content {
    border-top: none;
    padding: 0 16px 16px 16px;
}

/* Filter Actions */
.filter-actions {
    padding: 20px;
    border-top: 1px solid #f1f5f9;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.reset-btn,
.apply-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.reset-btn {
    background: white;
    color: #64748b;
    border-color: #e2e8f0;
}

.reset-btn:hover {
    background: #f1f5f9;
    color: #475569;
    border-color: #cbd5e1;
}

.apply-btn {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.apply-btn:hover {
    background: #2563eb;
    border-color: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .filters-sidebar {
        position: fixed;
        top: 0;
        left: -100%;
        bottom: 0;
        width: 320px;
        max-width: 85vw;
        z-index: 1000;
        transition: left 0.3s ease;
        border-radius: 0;
        height: 100vh;
        overflow-y: auto;
    }

    .filters-sidebar.active {
        left: 0;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .quick-filters-grid {
        grid-template-columns: 1fr;
    }

    .quick-filter-btn {
        padding: 12px;
        font-size: 14px;
    }

    .filter-actions {
        position: sticky;
        bottom: 0;
        background: white;
        border-top: 2px solid #f1f5f9;
        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.05);
    }
}

/* Animations */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.filter-content {
    animation: slideDown 0.2s ease;
}

/* Focus Styles */
.quick-filter-btn:focus,
.filter-header:focus,
.reset-btn:focus,
.apply-btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .filter-section,
    .quick-filter-btn,
    .filter-header,
    .expand-icon,
    .reset-btn,
    .apply-btn {
        transition: none;
    }
    
    .filter-content {
        animation: none;
    }
}

/* Custom Scrollbar for Mobile */
.filters-sidebar::-webkit-scrollbar {
    width: 4px;
}

.filters-sidebar::-webkit-scrollbar-track {
    background: #f1f5f9;
}

.filters-sidebar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
}

.filters-sidebar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}
</style>
