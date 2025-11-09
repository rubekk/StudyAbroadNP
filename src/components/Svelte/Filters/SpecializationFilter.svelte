<script>
    export let filterFunction;

    const options = [
        "Information Technology",
        "Accounting",
        "Engineering",
        "Business",
        "Economics",
        "Computer Science",
        "Data Science",
        "Philosophy",
        "Cyber Security",
        "Artificial Intelligence",
        "Entrepreneurship",
    ];
</script>

<section>
    <h3>Specializations</h3>

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
