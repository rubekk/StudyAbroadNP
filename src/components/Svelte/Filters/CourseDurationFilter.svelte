<script>
    export let filterFunction;

    const durations = [
        { label: "Less than 1 year", value: "0-1" },
        { label: "1-2 years", value: "1-2" },
        { label: "2-3 years", value: "2-3" },
        { label: "3-4 years", value: "3-4" },
        { label: "4+ years", value: "4+" }
    ];
</script>

<div class="filter-options">
    {#each durations as duration}
        <label class="filter-option">
            <input
                type="checkbox"
                value={duration.value}
                on:change={(e) => filterFunction(e.target.value, e.target.checked)}
            />
            <span>{duration.label}</span>
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
