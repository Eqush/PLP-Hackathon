document.getElementById('energy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const electricityUsage = document.getElementById('electricity').value;
    const gasUsage = document.getElementById('gas').value;

    // Basic AI logic for optimization (example logic)
    const totalUsage = parseFloat(electricityUsage) + parseFloat(gasUsage);
    let optimizationMessage = '';

    if (totalUsage > 1000) {
        optimizationMessage = 'High energy usage detected. Consider upgrading to energy-efficient appliances and optimizing your heating/cooling systems.';
    } else {
        optimizationMessage = 'Your energy usage is within optimal levels. Keep up the good work!';
    }

    document.getElementById('optimization-message').textContent = optimizationMessage;
    document.getElementById('results').style.display = 'block';
});
