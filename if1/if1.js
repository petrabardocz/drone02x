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
  const plantDisplay = document.getElementById('plantDisplay');
  plantDisplay.textContent = `${plantValue.toFixed(1)}`;

  const pavementDisplay = document.getElementById('pavementDisplay');
  pavementDisplay.textContent = `${pavementValue.toFixed(1)}`;
}

