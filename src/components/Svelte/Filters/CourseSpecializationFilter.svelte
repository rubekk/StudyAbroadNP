<script>
    export let filterFunction;

    const specializations = [
        "Business",
        "Engineering",
        "Computer Science & IT",
        "Healthcare",
        "Social Sciences",
        "Arts & Humanities",
        "Natural Sciences",
        "Law"
    ];
</script>

<div class="filter-options">
    {#each specializations as specialization}
        <label class="filter-option">
            <input
                type="checkbox"
                value={specialization}
                on:change={(e) => filterFunction(e.target.value, e.target.checked)}
            />
            <span>{specialization}</span>
        </label>
    {/each}
</div>

<style>
.filter-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.4rem 0;
    font-size: 0.9rem;
    color: #374151;
}

.filter-option input[type="checkbox"] {
    cursor: pointer;
    width: 16px;
    height: 16px;
}

.filter-option:hover {
    color: #2a73f4;
}
</style>
