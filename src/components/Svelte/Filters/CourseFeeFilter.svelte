<script>
    export let filterFunction;

    const feeRanges = [
        { label: "Under 20 lakhs", value: "0-20" },
        { label: "20-30 lakhs", value: "20-30" },
        { label: "30-40 lakhs", value: "30-40" },
        { label: "40-50 lakhs", value: "40-50" },
        { label: "Above 50 lakhs", value: "50+" }
    ];
</script>

<div class="filter-options">
    {#each feeRanges as range}
        <label class="filter-option">
            <input
                type="checkbox"
                value={range.value}
                on:change={(e) => filterFunction(e.target.value, e.target.checked)}
            />
            <span>{range.label}</span>
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
