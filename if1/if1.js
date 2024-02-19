// Get the temperature and emissivity sliders
const temperatureSlider = document.getElementById('temperature');
const emissivitySlider = document.getElementById('emissivity');


// Display current values of sliders
const temperatureValue = document.getElementById('temperatureValue');
const emissivityValue = document.getElementById('emissivityValue');

temperatureValue.textContent = temperatureSlider.value;
emissivityValue.textContent = emissivitySlider.value;

// Update values when sliders are moved
temperatureSlider.addEventListener('input', updateValues);
emissivitySlider.addEventListener('input', updateValues);



// Initialize the displayed values with two decimal places
temperatureValue.textContent = parseFloat(temperatureSlider.value).toFixed(1);
emissivityValue.textContent = parseFloat(emissivitySlider.value).toFixed(2);

// Update values when sliders are moved
temperatureSlider.addEventListener('input', updateValues);
emissivitySlider.addEventListener('input', updateValues);

// Call updateValues function to display results with default values
updateValues();

function updateValues() {
  // Get temperature and emissivity values from sliders
  const temperature = parseFloat(temperatureSlider.value);
  const emissivity = parseFloat(emissivitySlider.value);

  // Update the displayed values with 2 decimal places
  temperatureValue.textContent = temperature.toFixed(1);
  emissivityValue.textContent = emissivity.toFixed(2);

  // Calculate values based on the combination of temperature and emissivity
  const pavementValue = calculatePavementValue(temperature, emissivity);
  const plantValue = calculatePlantValue(temperature, emissivity);

  // Display the calculated values without modifying their underlying data type
  displayValues(pavementValue, plantValue);
}


function calculatePavementValue(temperature, emissivity) {
  const rad = Math.pow(0.8, 0.25) * (temperature + 273.15);
  const IT = (rad / Math.pow(emissivity, 0.25)) - 273.15;
  return IT; // Adjust as needed
}

function calculatePlantValue(temperature, emissivity) {
  const rad = Math.pow(0.98, 0.25) * (temperature + 273.15);
  const IT = (rad / Math.pow(emissivity, 0.25)) - 273.15;
  return IT; 
}

function displayValues(pavementValue, plantValue) {
  // Display the calculated values without modifying their underlying data type
  const plantDisplay = document.getElementById('plantDisplay');
  plantDisplay.textContent = plantValue.toFixed(1); // Display with 1 decimal place

  const pavementDisplay = document.getElementById('pavementDisplay');
  pavementDisplay.textContent = pavementValue.toFixed(1); // Display with 1 decimal place
}

