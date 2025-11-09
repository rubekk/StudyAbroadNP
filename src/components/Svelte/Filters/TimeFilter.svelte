<script>
    export let filterFunction;

    const options = ["Full time", "Part time"];
</script>

<section>
    <h3>SpecializaTimetions</h3>

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
