<script>
    export let filterFunction;

    const degrees = [
        "Bachelor's",
        "Master's",
        "PhD",
        "Diploma",
        "Certificate"
    ];
</script>

<div class="filter-options">
    {#each degrees as degree}
        <label class="filter-option">
            <input
                type="checkbox"
                value={degree}
                on:change={(e) => filterFunction(e.target.value, e.target.checked)}
            />
            <span>{degree}</span>
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
