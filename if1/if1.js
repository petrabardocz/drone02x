// Get the temperature and emissivity sliders
const temperatureSlider = document.getElementById('temperature');
const emissivitySlider = document.getElementById('emissivity');

// Emmissivity values are not continous


// Display current values of sliders
const temperatureValue = document.getElementById('temperatureValue');
const emissivityValue = document.getElementById('emissivityValue');

temperatureValue.textContent = temperatureSlider.value;
emissivityValue.textContent = emissivitySlider.value;

// Update values when sliders are moved
temperatureSlider.addEventListener('input', updateValues);
emissivitySlider.addEventListener('input', updateValues);

function updateValues() {
  temperatureValue.textContent = temperatureSlider.value;
  emissivityValue.textContent = emissivitySlider.value;

  // Calculate values based on the combination of temperature and emissivity
  const pavementValue = calculatePavementValue(parseFloat(temperatureSlider.value), parseFloat(emissivitySlider.value));
  const plantValue = calculatePlantValue(parseFloat(temperatureSlider.value), parseFloat(emissivitySlider.value));

  // Display the calculated values
  displayValues(pavementValue, plantValue);
}

function calculatePavementValue(temperature, emissivity) {
  // Your pavement value calculation logic goes here
  // For example, a simple calculation based on temperature and emissivity
  return temperature * emissivity * 1.5; // Adjust as needed
}

function calculatePlantValue(temperature, emissivity) {
  // Your plant value calculation logic goes here
  // For example, a simple calculation based on temperature and emissivity
  return temperature * emissivity * 0.8; // Adjust as needed
}

function displayValues(pavementValue, plantValue) {
  const pavementDisplay = document.getElementById('pavementDisplay');
  pavementDisplay.textContent = `Pavement Value: ${pavementValue.toFixed(2)}`;

  const plantDisplay = document.getElementById('plantDisplay');
  plantDisplay.textContent = `Plant Value: ${plantValue.toFixed(2)}`;
}
