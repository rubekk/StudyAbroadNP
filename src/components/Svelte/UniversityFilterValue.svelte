<script>
    import { filter } from "../../lib/svelteFilters/filter";
    import { convertToText } from "../../lib/svelteFilters/filterFunctions";

    let filterText = "";

    filter.subscribe((value) => {
        if (value) filterText = convertToText(value);
    });
</script>

<strong> {filterText} </strong>
