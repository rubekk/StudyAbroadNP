<script>
    export let filterFunction;

    const options = [
        "upto 10 lakhs",
        "upto 20 lakhs",
        "upto 30 lakhs",
        "upto 40 lakhs",
        "> 40 lakhs",
    ];
</script>

<section>
    <h3>Fees</h3>

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


