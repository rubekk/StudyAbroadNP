<script>
    export let filterFunction;

    const options = [
        "Fully funded",
        "Partially funded",
        "Free accomodation",
    ];
</script>

<section>
    <h3>Scholarship</h3>

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
