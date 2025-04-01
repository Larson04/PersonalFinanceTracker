<script>
  export let goal;
  export let key;

  import { onMount } from "svelte";

  let goalPercentage = 0;
  let category = "";
  let currentExpense = 0;

  function setCSSAnimation(goal) {
    const styleSheet = document.styleSheets[1];

    // Create the new keyframes rule dynamically
    const keyframesRule = `
      @keyframes progress {
        from {
          --goal: 0%;
        }
        to {
          --goal: ${goal}%;
        }
      }
    `;
    
    // Inject the new keyframes rule
    styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
  }

  function getTotalPercentage(goal) {
    const monthlyBudget = goal['allowedExpense'];
    const budgetPercentage = 100;
    return (goal['currentExpense'] * budgetPercentage) / monthlyBudget;
  }

  function formatCategory(category) {
    return category
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before uppercase letters
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join words with a space
  }

  onMount(() => {
    goalPercentage = getTotalPercentage(goal);
    setCSSAnimation(goalPercentage); // Call setCSSAnimation after goalPercentage is defined
    category = formatCategory(goal['category']);
    currentExpense = goal['currentExpense'];
  });
</script>

<div class="circleContainer">
  <div
    class="circle"
    style="--goal: {goalPercentage}%"
  ></div>
  <div class="textWrapper">
    <p class="category">{category}</p>
    <span class="totalProgress">${currentExpense}</span>
  </div>
</div>

<style>
@property --goal {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}

.circle {
  --goal: 0%; 
  background: conic-gradient(
    at center,
    rgb(57, 174, 57) var(--goal),
    calc(var(--goal)),
    red calc(var(--goal)),
    rgb(220, 217, 217) calc(var(--goal))
  );
  animation: progress 2s linear 1 forwards;
  border-radius: 50%;
  mask: radial-gradient(circle at center, transparent 55%, black 55%);
  position: absolute;
  inset: 0;
}

.circleContainer {
  position: relative;
  width: 200px;
  margin: 15px;
  aspect-ratio: 1;
}

.textWrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: 1;
  color: #656565;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.textWrapper p {
  margin: 0.3rem;
}

.totalProgress {
  color: #363636;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
}
</style>