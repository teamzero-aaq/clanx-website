
const formInputWrappers = document.querySelectorAll(
  '[calc-element="input-wrapper"]'
);
function mirrorAttributes(wrapper) {
  const input = wrapper.querySelector('[calc-element="input"]');
  const initialValue = input.getAttribute("calc-input-initial");
  const minValue = input.getAttribute("min");
  const maxValue = input.getAttribute("max");

  if (initialValue !== null) {
    input.value = initialValue;
  }
  if (minValue !== null) {
    input.setAttribute("min", minValue);
  }
  if (maxValue !== null) {
    input.setAttribute("max", maxValue);
  }
}

formInputWrappers.forEach((wrapper) => {
  mirrorAttributes(wrapper);

  const input = wrapper.querySelector('[calc-element="input"]');
  input.addEventListener("change", () => {
    input.setAttribute("calc-input-initial", input.value);
  });

  // Add event listener to increase button
  const increaseButton = wrapper.querySelector('[calc-element="increase"]');
  increaseButton.addEventListener("click", () => {
    input.value = Math.min(
      parseInt(input.value) + 1,
      parseInt(input.getAttribute("max"))
    );
    input.setAttribute("calc-input-initial", input.value);
  });

  // Add event listener to decrease button
  const decreaseButton = wrapper.querySelector('[calc-element="decrease"]');
  decreaseButton.addEventListener("click", () => {
    input.value = Math.max(
      parseInt(input.value) - 1,
      parseInt(input.getAttribute("min"))
    );
    input.setAttribute("calc-input-initial", input.value);
  });
});

//Calculations on page

// Function to calculate and update the values
function calculateAndDisplay() {
  // Developer Calculation
  const devCountInput = document.querySelector('[calc-input="dev-count"]');
  const devCount = parseFloat(devCountInput.value) || 0;

  const devExpInput = document.querySelector('[calc-input="dev-exp"]');
  const devExp = parseFloat(devExpInput.value) || 3;

  let devBaseSalary;

  if (devExp >= 3 && devExp <= 5) {
    devBaseSalary = 6400;
  } else if (devExp >= 6 && devExp <= 9) {
    devBaseSalary = 8000;
  } else if (devExp > 9) {
    devBaseSalary = 13600;
  }

  const devTotalSalary = devBaseSalary * devCount;

  const platformServiceFeeDev = 0.08 * devBaseSalary;

  const devSubtotal = devTotalSalary + platformServiceFeeDev;

  const monthDevDiscount = 0.1 * devSubtotal;
  let monthDevTotal = devSubtotal - monthDevDiscount;

  if (devCount === 0) {
    monthDevTotal = 0;
  }

  // Designer Calculation
  const desCountInput = document.querySelector('[calc-input="des-count"]');
  const desCount = parseFloat(desCountInput.value) || 0;

  const desExpInput = document.querySelector('[calc-input="des-exp"]');
  const desExp = parseFloat(desExpInput.value) || 3;

  let desBaseSalary;

  if (desExp >= 3 && desExp <= 5) {
    desBaseSalary = 5600;
  } else if (desExp >= 6 && desExp <= 9) {
    desBaseSalary = 7200;
  } else if (desExp > 9) {
    desBaseSalary = 12800;
  }

  const desTotalSalary = desBaseSalary * desCount;

  const platformServiceFeeDes = 0.08 * desBaseSalary;

  const desSubtotal = desTotalSalary + platformServiceFeeDes;

  const monthDesDiscount = 0.1 * desSubtotal;
  let monthDesTotal = desSubtotal - monthDesDiscount;

  if (desCount === 0) {
    monthDesTotal = 0;
  }

  // Product Manager Calculation
  const pmCountInput = document.querySelector('[calc-input="pm-count"]');
  const pmCount = parseFloat(pmCountInput.value) || 0;

  const pmExpInput = document.querySelector('[calc-input="pm-exp"]');
  const pmExp = parseFloat(pmExpInput.value) || 3;

  let pmBaseSalary;

  if (pmExp >= 3 && pmExp <= 5) {
    pmBaseSalary = 7200;
  } else if (pmExp >= 6 && pmExp <= 9) {
    pmBaseSalary = 8800;
  } else if (pmExp > 9) {
    pmBaseSalary = 14400;
  }

  const pmTotalSalary = pmBaseSalary * pmCount;

  const platformServiceFeePm = 0.08 * pmBaseSalary;

  const pmSubtotal = pmTotalSalary + platformServiceFeePm;

  const monthPmDiscount = 0.1 * pmSubtotal;
  let monthPmTotal = pmSubtotal - monthPmDiscount;

  if (pmCount === 0) {
    monthPmTotal = 0;
  }

  // Growth Expert Calculation
  const grexCountInput = document.querySelector('[calc-input="grex-count"]');
  const grexCount = parseFloat(grexCountInput.value) || 0;

  const grexBaseSalary = 4800;

  const grexTotalSalary = grexBaseSalary * grexCount;

  const platformServiceFeeGrex = 0.08 * grexBaseSalary;

  const grexSubtotal = grexTotalSalary + platformServiceFeeGrex;

  const monthGrexDiscount = 0.1 * grexSubtotal;
  let monthGrexTotal = grexSubtotal - monthGrexDiscount;

  if (grexCount === 0) {
    monthGrexTotal = 0;
  }

  // GenAI Expert Calculation
  const geaiCountInput = document.querySelector('[calc-input="geai-count"]');
  const geaiCount = parseFloat(geaiCountInput.value) || 0;

  const geaiBaseSalary = 32000;

  const geaiTotalSalary = geaiBaseSalary * geaiCount;

  const platformServiceFeeGeai = 0.08 * geaiBaseSalary;

  const geaiSubtotal = geaiTotalSalary + platformServiceFeeGeai;

  const monthGeaiDiscount = 0.1 * geaiSubtotal;
  let monthGeaiTotal = geaiSubtotal - monthGeaiDiscount;

  if (geaiCount === 0) {
    monthGeaiTotal = 0;
  }

  // Web3 Engineer Calculation
  const webeCountInput = document.querySelector('[calc-input="webe-count"]');
  const webeCount = parseFloat(webeCountInput.value) || 0;

  const webeBaseSalary = 24000;

  const webeTotalSalary = webeBaseSalary * webeCount;

  const platformServiceFeeWebe = 0.08 * webeBaseSalary;

  const webeSubtotal = webeTotalSalary + platformServiceFeeWebe;

  const monthWebeDiscount = 0.1 * webeSubtotal;
  let monthWebeTotal = webeSubtotal - monthWebeDiscount;

  if (webeCount === 0) {
    monthWebeTotal = 0;
  }

  // Total Calculation
  const monthAllTotal =
    monthDevTotal +
    monthDesTotal +
    monthPmTotal +
    monthGrexTotal +
    monthGeaiTotal +
    monthWebeTotal;
  const roundedMonthAllTotal = Math.ceil(monthAllTotal * 83);
  const formattedMonthAllTotal = roundedMonthAllTotal.toLocaleString();

  const calcResultElement = document.querySelector(
    '[calc-result="monthly-all-cost"]'
  );
  calcResultElement.innerHTML = formattedMonthAllTotal;
// console.log("month", formattedMonthAllTotal, "round",roundedMonthAllTotal);
  // Quarterly Calculation
  const quarterAllTotal = Math.ceil(monthAllTotal * 3 * 0.85 * 83);
  const formattedQuarterAllTotal = quarterAllTotal.toLocaleString();
  const calcResultQuarterElement = document.querySelector(
    '[calc-result="quarter-all-cost"]'
  );
  calcResultQuarterElement.innerHTML = formattedQuarterAllTotal;

  // Annual Calculation
  const annualAllTotal = Math.ceil(monthAllTotal * 12 * 0.8 * 83);

  const formattedAnnualAllTotal = annualAllTotal.toLocaleString();
  const calcResultAnnualElement = document.querySelector(
    '[calc-result="annual-all-cost"]'
  );
  calcResultAnnualElement.innerHTML = formattedAnnualAllTotal;

  return monthAllTotal; // Return the total value
}

// Attach input input event listeners to input fields
document.addEventListener("input", function (event) {
  if (
    event.target.getAttribute("calc-input") === "dev-count" ||
    event.target.getAttribute("calc-input") === "dev-exp" ||
    event.target.getAttribute("calc-input") === "des-count" ||
    event.target.getAttribute("calc-input") === "des-exp" ||
    event.target.getAttribute("calc-input") === "pm-count" ||
    event.target.getAttribute("calc-input") === "pm-exp" ||
    event.target.getAttribute("calc-input") === "grex-count" ||
    event.target.getAttribute("calc-input") === "geai-count" ||
    event.target.getAttribute("calc-input") === "webe-count"
  ) {
    calculateAndDisplay();
  }
});

// Attach click event listener to the whole HTML document
document.addEventListener("click", function () {
  calculateAndDisplay();
});

// Initial calculation and display
calculateAndDisplay();

//New Code added here for Quarter and Annual
document.querySelectorAll("[calc-input]").forEach((input) => {
  input.addEventListener("input", calculateSalaries); // Recalculate on input change
});

document.addEventListener("click", calculateSalaries); // Recalculate on any click on the document
document.addEventListener("DOMContentLoaded", calculateSalaries); // Calculate initial cost after page load

function calculateSalaries() {
  // Traditional designer calculation
  const traDesCount =
    parseInt(document.querySelector("[calc-input=des-count]").value) || 0;
  const traDesMonthlySalary = 27365;
  let monthTraDesTotalSalary =
    traDesCount === 0 ? 0 : traDesMonthlySalary * traDesCount;
  const quarterTraDesTotalSalary = 3 * monthTraDesTotalSalary;
  const annualTraDesTotalSalary = 12 * monthTraDesTotalSalary;

  // Traditional developer calculation
  const traDevCount =
    parseInt(document.querySelector("[calc-input=dev-count]").value) || 0;
  const traDevMonthlySalary = 31445;
  let monthTraDevTotalSalary =
    traDevCount === 0 ? 0 : traDevMonthlySalary * traDevCount;
  const quarterTraDevTotalSalary = 3 * monthTraDevTotalSalary;
  const annualTraDevTotalSalary = 12 * monthTraDevTotalSalary;

  // Traditional product manager calculation
  const traPmCount =
    parseInt(document.querySelector("[calc-input=pm-count]").value) || 0;
  const traPmMonthlySalary = 31445;
  let monthTraPmTotalSalary =
    traPmCount === 0 ? 0 : traPmMonthlySalary * traPmCount;
  const quarterTraPmTotalSalary = 3 * monthTraPmTotalSalary;
  const annualTraPmTotalSalary = 12 * monthTraPmTotalSalary;

  // Traditional growth expert calculation
  const traGrexCount =
    parseInt(document.querySelector("[calc-input=grex-count]").value) || 0;
  const traGrexMonthlySalary = 26005;
  let monthTraGrexTotalSalary =
    traGrexCount === 0 ? 0 : traGrexMonthlySalary * traGrexCount;
  const quarterTraGrexTotalSalary = 3 * monthTraGrexTotalSalary;
  const annualTraGrexTotalSalary = 12 * monthTraGrexTotalSalary;

  // Traditional GenAI expert calculation
  const traGeaiCount =
    parseInt(document.querySelector("[calc-input=geai-count]").value) || 0;
  const traGeaiMonthlySalary = 25189;
  let monthTraGeaiTotalSalary =
    traGeaiCount === 0 ? 0 : traGeaiMonthlySalary * traGeaiCount;
  const quarterTraGeaiTotalSalary = 3 * monthTraGeaiTotalSalary;
  const annualTraGeaiTotalSalary = 12 * monthTraGeaiTotalSalary;

  // Traditional Web3 Engineer calculation
  const traWebeCount =
    parseInt(document.querySelector("[calc-input=webe-count]").value) || 0;
  const traWebeMonthlySalary = 30901;
  let monthTraWebeTotalSalary =
    traWebeCount === 0 ? 0 : traWebeMonthlySalary * traWebeCount;
  const quarterTraWebeTotalSalary = 3 * monthTraWebeTotalSalary;
  const annualTraWebeTotalSalary = 12 * monthTraWebeTotalSalary;

  // Total calculations
  const traMonthAllTotal = Math.round(
    monthTraDesTotalSalary +
      monthTraDevTotalSalary +
      monthTraPmTotalSalary +
      monthTraGrexTotalSalary +
      monthTraGeaiTotalSalary +
      monthTraWebeTotalSalary
  );
  const traQuarterAllTotal = Math.round(
    quarterTraDesTotalSalary +
      quarterTraDevTotalSalary +
      quarterTraPmTotalSalary +
      quarterTraGrexTotalSalary +
      quarterTraGeaiTotalSalary +
      quarterTraWebeTotalSalary
  );
  const traAnnualAllTotal = Math.round(
    annualTraDesTotalSalary +
      annualTraDevTotalSalary +
      annualTraPmTotalSalary +
      annualTraGrexTotalSalary +
      annualTraGeaiTotalSalary +
      annualTraWebeTotalSalary
  );

  // Apply to HTML
  document.querySelector("[calc-result=tra_monthly-all-cost]").innerHTML =
    traMonthAllTotal.toLocaleString();
  document.querySelector("[calc-result=tra_quarter-all-cost]").innerHTML =
    traQuarterAllTotal.toLocaleString();
  document.querySelector("[calc-result=tra_annual-all-cost]").innerHTML =
    traAnnualAllTotal.toLocaleString();
}

//new code for savings -------------------------

// Function to get the value as a number from an attribute
function getValue(attribute) {
  const value = document.querySelector(
    `[calc-result='${attribute}']`
  ).innerHTML;
  return Number(value.replace(/[^0-9.-]+/g, ""));
}

// Function to calculate savings
function calculateSavings() {
  const traMonthAllTotal = getValue("tra_monthly-all-cost");
  const monthAllTotal = getValue("monthly-all-cost");
  const monthlySavings = traMonthAllTotal - monthAllTotal;
  document.querySelector('[calc-result="monthly-all-savings"]').innerHTML =
    monthlySavings.toLocaleString();

  const traQuarterAllTotal = getValue("tra_quarter-all-cost");
  const quarterAllTotal = getValue("quarter-all-cost");
  const quarterlySavings = traQuarterAllTotal - quarterAllTotal;
  document.querySelector('[calc-result="quarter-all-savings"]').innerHTML =
    quarterlySavings.toLocaleString();

  const traAnnualAllTotal = getValue("tra_annual-all-cost");
  const annualAllTotal = getValue("annual-all-cost");
  const annuallySavings = traAnnualAllTotal - annualAllTotal;
  document.querySelector('[calc-result="annual-all-savings"]').innerHTML =
    annuallySavings.toLocaleString();
}

// Calculate and assign initial values on page load
window.onload = calculateSavings;

// Update results when there is a click on the HTML document
document.addEventListener("click", calculateSavings);

//new code for savings ---------------

// Function to calculate savings percentage
function calculateSavingsPercentage(total, savings) {
  return (savings / total) * 100;
}

// Function to calculate savings and update the HTML
function calculateSavings() {
  const traMonthAllTotal = getValue("tra_monthly-all-cost");
  const monthAllTotal = getValue("monthly-all-cost");
  const monthlySavings = traMonthAllTotal - monthAllTotal;
  const monthlySavingsPercentage = calculateSavingsPercentage(
    traMonthAllTotal,
    monthlySavings
  );
  document.querySelector('[calc-result="monthly-all-savings"]').innerHTML =
    monthlySavings.toLocaleString();
  document.querySelector(
    '[calc-result="monthly-all-savings-percentage"]'
  ).innerHTML = monthlySavingsPercentage.toFixed(0) + "%";

  const traQuarterAllTotal = getValue("tra_quarter-all-cost");
  const quarterAllTotal = getValue("quarter-all-cost");
  const quarterlySavings = traQuarterAllTotal - quarterAllTotal;
  const quarterlySavingsPercentage = calculateSavingsPercentage(
    traQuarterAllTotal,
    quarterlySavings
  );
  document.querySelector('[calc-result="quarter-all-savings"]').innerHTML =
    quarterlySavings.toLocaleString();
  document.querySelector(
    '[calc-result="quarter-all-savings-percentage"]'
  ).innerHTML = quarterlySavingsPercentage.toFixed(0) + "%";

  const traAnnualAllTotal = getValue("tra_annual-all-cost");
  const annualAllTotal = getValue("annual-all-cost");
  const annuallySavings = traAnnualAllTotal - annualAllTotal;
  const annuallySavingsPercentage = calculateSavingsPercentage(
    traAnnualAllTotal,
    annuallySavings
  );
  document.querySelector('[calc-result="annual-all-savings"]').innerHTML =
    annuallySavings.toLocaleString();
  document.querySelector(
    '[calc-result="annual-all-savings-percentage"]'
  ).innerHTML = annuallySavingsPercentage.toFixed(0) + "%";
}

// Assigning initial values on page load
window.onload = calculateSavings;

// Updating the results on a click event
document.addEventListener("click", calculateSavings);


