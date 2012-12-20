function handleSubmit() {
    var current_grade = $("#current-grade").val();
    var hopeful_grade = $("#hopeful-grade").val();
    var final_worth = $("#final-worth").val();

    if (
        isValidNumber(current_grade)
        && isValidNumber(hopeful_grade)
        && isValidNumber(final_worth)
    ) {
         // Convert these from percentage to floats
        current_grade = current_grade / 100.0;
        hopeful_grade = hopeful_grade / 100.0;
        final_worth = final_worth / 100.0;

        var answer = (hopeful_grade - (current_grade * (1 - final_worth))) / (1 * final_worth);

        html = "";
        html += "<p>";
        html += "You must get at least a ";
        html +=  100 * answer.toFixed(2);
        html += "% on your final.";
        $("#result-target").html(html);

    } else {
        // Numbers were not valid
        html = "";
        html += "<p>";
        html += "Whoops, something isn't right. Are your inputs numbers?";
        $("#result-target").html(html);
    }

    return false; // Prevent default submit button behavior
}

function isValidNumber(n) {
    // TODO upper limit?
    if (!isNaN(n) && n > 0) {
        return true;
    }
    else {
        return false
    }
}

$(document).ready(function() {
    $("#finals-form").submit(handleSubmit);
});

