<script>
  export let goal;
  export let key;

  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let goalPercentage = tweened(0, { duration: 2000, easing: cubicOut }); // Smooth transition
  let category = "";
  let currentExpense = 0;

  function getTotalPercentage(goal) {
    const monthlyBudget = goal["allowedExpense"];
    return (goal["currentExpense"] * 100) / monthlyBudget;
  }

  function formatCategory(category) {
    return category
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
      .split(" ") // Split into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words with a space
  }

  onMount(() => {
    category = formatCategory(goal["category"]);
    currentExpense = goal["currentExpense"];
    goalPercentage.set(getTotalPercentage(goal)); // Start animation
  });
</script>

<div class="circleContainer">
  <div
    class="circle"
    style="background: 
      { $goalPercentage > 0 
        ? `conic-gradient(at center, rgb(57, 174, 57) 0% ${$goalPercentage}%, rgb(220, 217, 217) ${$goalPercentage}% 100%)`
        : `conic-gradient(at center, rgb(220, 217, 217) 0% 100%)` 
      }"
  ></div>
  <div class="textWrapper">
    <p class="category">{category}</p>
    <span class="totalProgress">${currentExpense}</span>
  </div>
</div>

<style>
.circle {
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