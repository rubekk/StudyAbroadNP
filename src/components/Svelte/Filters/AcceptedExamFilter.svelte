<script>
    export let filterFunction;

    const options = ["IELTS", "SAT", "TOEFL", "PTE", "GRE", "GMAT"];
</script>

<section>
    <h3>Exams</h3>

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
