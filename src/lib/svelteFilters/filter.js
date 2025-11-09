import { writable } from "svelte/store";

const filter = writable({
    acceptedExams: [],
    countries: [],
    degrees: [],
    durations: [],
    fees: [],
    scholarships: [],
    specializations: [],
    time: []
})

export { filter }