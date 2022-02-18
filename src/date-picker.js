import datepicker from "js-datepicker";

const dateBtn = document.getElementById("dueDate");
const dateSelect = datepicker(dateBtn, {
    formatter : (input, date, instance) => {
        const value = date;
        input.value = value.toLocaleDateString('en-GB', {day: 'numeric', month: "short", year:'numeric'});
    }
});

