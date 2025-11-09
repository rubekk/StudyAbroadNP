<script>
    export let filterFunction;

    const options = [
        "<= 1 year",
        "<= 2 years",
        "<= 3 years",
        "<= 4 years",
        "5 years",
    ];
</script>

<section>
    <h3>Duration</h3>

    <ul>
        {#each options as option}
            <li>
                <label>
                    <input
                        on:click={(e) =>
                            filterFunction(e.target.checked, option)}
                        type="checkbox"
                    />
                    {option}
                </label>
            </li>
        {/each}
    </ul>
</section>
