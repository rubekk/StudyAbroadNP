<script>
    export let filterFunction;

    const options = [
        "USA",
        "Europe",
        "Germany",
        "UK",
        "Australia",
        "New Zealand",
        "Japan",
        "South Korea",
        "Singapore",
        "Canada",
    ];
</script>

<section>
    <h3>Country</h3>

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
