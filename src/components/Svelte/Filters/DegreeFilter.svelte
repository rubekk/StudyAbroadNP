<script>
    export let filterFunction;

    const options = ["Diploma", "Bachelors", "Masters"];
</script>

<section>
    <h3>Degrees</h3>

    <ul>
        {#each options as options}
            <li>
                <label>
                    <input
                        on:click={(e) =>
                            filterFunction(e.target.checked, options)}
                        type="checkbox"
                    />
                    {options}
                </label>
            </li>
        {/each}
    </ul>
</section>
