import { filter } from "./filter";
import universitiesData from "../data/universitiesShort.json"

// Filter the data
const filterData = (filterObj) => {
    return universitiesData.filter(university => {
        // Specializations match (case-insensitive)
        const specializationsMatch = filterObj.specializations && filterObj.specializations.length > 0
            ? filterObj.specializations.some(spec =>
                university.specializations.some(specialization =>
                    specialization.toLowerCase() === spec.toLowerCase()
                )
            )
            : true;

        // Accepted Exams match (case-insensitive, example placeholder condition)
        const acceptedExamsMatch = filterObj.acceptedExams.length > 0
            ? filterObj.acceptedExams.some(exam =>
                university.acceptedExams.some(acceptedExam =>
                    acceptedExam.toLowerCase() === exam.toLowerCase()
                )
            )
            : true;

        // Countries match (case-insensitive)
        const countriesMatch = filterObj.countries.length > 0
            ? filterObj.countries.some(country =>
                university.country.toLowerCase() === country.toLowerCase()
            )
            : true;

        // Degrees match (case-insensitive)
        const degreesMatch = filterObj.degrees.length > 0
            ? filterObj.degrees.some(degree =>
                university.degrees.some(universityDegree =>
                    universityDegree.toLowerCase() === degree.toLowerCase()
                )
            )
            : true;

        // Fees match (example condition based on range)
        const feesMatch = (filterObj.fees.length > 0)
            ? university.min_fee >= filterObj.fees[0] && university.max_fee <= filterObj.fees[1]
            : true;

        // Time match (case-insensitive)
        const timeMatch = filterObj.time.length > 0
            ? filterObj.time.some(t =>
                university.time.some(universityTime =>
                    universityTime.toLowerCase() === t.toLowerCase()
                )
            )
            : true;

        // Durations match (based on range)
        const durationsMatch = (filterObj.durations.length > 0)
            ? university.min_duration >= filterObj.durations[0] && university.max_duration <= filterObj.durations[1]
            : true;

        // Scholarships match (case-insensitive)
        const scholarshipsMatch = filterObj.scholarships.length > 0
            ? filterObj.scholarships.some(scholarship =>
                university.scholarships.some(universityScholarship =>
                    universityScholarship.toLowerCase() === scholarship.toLowerCase()
                )
            )
            : true;

        // Return true if all criteria match
        return (
            specializationsMatch &&
            acceptedExamsMatch &&
            countriesMatch &&
            degreesMatch &&
            feesMatch &&
            timeMatch &&
            durationsMatch &&
            scholarshipsMatch
        );
    });
}


// Convert filter object to text message
const convertToText = (filters) => {
    if (Object.values(filters).every(arr => arr.length === 0)) {
        return "";
    }

    let message = '';

    Object.keys(filters).forEach(key => {
        if (filters[key].length > 0) {
            message += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${filters[key].join(', ')}. `;
        }
    });

    return message.trim();
};

// Update functions for each filter
const updateFilter = (filterKey, isChecked, value) => {
    const valueLower = value.toLowerCase();

    filter.update((current) => {
        const currentFilter = current[filterKey];
        const includes = currentFilter.includes(valueLower);

        let updatedFilter;
        
        if (isChecked && !includes) {
            updatedFilter = [...currentFilter, valueLower];
        } else if (!isChecked && includes) {
            updatedFilter = currentFilter.filter(item => item !== valueLower);
        } else {
            return current;
        }

        return { ...current, [filterKey]: updatedFilter };
    });
};

// Specific update functions that reuse updateFilter
const updateSpecialization = (isChecked, value) => updateFilter('specializations', isChecked, value);
const updateCountry = (isChecked, value) => updateFilter('countries', isChecked, value);
const updateDegree = (isChecked, value) => updateFilter('degrees', isChecked, value);
const updateFee = (isChecked, value) => updateFilter('fees', isChecked, value);
const updateExam = (isChecked, value) => updateFilter('acceptedExams', isChecked, value);
const updateTime = (isChecked, value) => updateFilter('time', isChecked, value);
const updateScholarship = (isChecked, value) => updateFilter('scholarships', isChecked, value);
const updateDuration = (isChecked, value) => updateFilter('durations', isChecked, value);

export {
    filterData,
    convertToText,
    updateSpecialization,
    updateCountry,
    updateDegree,
    updateFee,
    updateExam,
    updateTime,
    updateScholarship,
    updateDuration
};
