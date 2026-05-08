function showStep(stepId, event) {
    let contents = document.querySelectorAll(".step-content");
    contents.forEach(c => c.classList.remove("active"));

    document.getElementById(stepId).classList.add("active");

    let tabs = document.querySelectorAll(".step-nav span");
    tabs.forEach(t => t.classList.remove("active"));

    event.target.classList.add("active");
}
function showStep(stepId, event) {
    let contents = document.querySelectorAll(".step-content");
    contents.forEach(c => c.classList.remove("active"));

    document.getElementById(stepId).classList.add("active");

    let tabs = document.querySelectorAll(".step-nav span");
    tabs.forEach(t => t.classList.remove("active"));

    event.target.classList.add("active");
}
