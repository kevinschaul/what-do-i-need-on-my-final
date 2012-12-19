function handleSubmit() {
    var current_grade = $("#current-grade").val();
    var hopefull_grade = $("#hopefull-grade").val();
    var final_worth = $("#final-worth").val();

    // Convert these from percentage to floats
    current_grade = current_grade / 100.0;
    hopefull_grade = hopefull_grade / 100.0;
    final_worth = final_worth / 100.0;

    var answer = (hopefull_grade - (current_grade * (1 - final_worth))) / (1 * final_worth);
    console.log(answer);

    html = "";
    html += "<p>";
    html += "You must get at least a ";
    html +=  100 * answer.toFixed(2);
    html += "% on your final.";
    $("#result-target").html(html);

    return false; // Prevent default submit button behavior
}

$(document).ready(function() {
    $("#finals-form").submit(handleSubmit);
});

