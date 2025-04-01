<script>




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
    
    let expensePercentage = (goal['currentExpense'] * budgetPercentage) / monthlyBudget;
    return expensePercentage;
  }

  function calculateGoals() {
    // let goals = getLocalStorage('goals');
    let goal = {"category": "monthlyBudget", "allowedExpense": 2000, "currentExpense": 450}
    let goalPercentage = getTotalPercentage(goal);

    console.log(goalPercentage);

    const circle = document.querySelector('.circle');
    if (circle) {
      // 1. Create and inject the keyframes rule before applying animation
      setCSSAnimation(goalPercentage);

      // 2. Set an initial "empty" gradient (everything at 0%)
      let initialGradient = '';
      Object.entries(goalPercentage).forEach(([key, value], index) => {
        if (key !== 'monthlyBudget') {
          initialGradient += `lightgray 0% 0%, `;
        }
      });

      circle.style.background = `conic-gradient(at center, ${initialGradient.slice(0, -2)})`;

      // 3. Delay applying the animated gradient to allow the keyframes to take effect
      setTimeout(() => {
        let newGradient = '';
        let startAngle = 0;

        Object.entries(goalPercentage).forEach(([key, value], index) => {
          if (key !== 'monthlyBudget') {
            let endAngle = startAngle + value;
            newGradient += `${getColorForGoal(index)} ${startAngle}% ${endAngle}%, `;
            startAngle = endAngle;
          }
        });

        // 4. Apply the final conic-gradient and start the animation
        circle.style.background = `conic-gradient(at center, ${newGradient.slice(0, -2)})`;
        circle.style.animation = 'progress 2s linear 1 forwards';
      }, 100); // Short delay allows animation to start smoothly
    }
  }

  function getColorForGoal(index) {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange']; // Colors for goals
    return colors[index % colors.length]; // Cycle through colors
  }

  setTimeout(calculateGoals, 300);

</script>


<div class="circleContainer">
    <div class="circle"></div>
    <div class="textWrapper">
      <p>Goal Progress</p>
      <span class="totalProgress">$0</span>
    </div>
</div>

<style>

@property --goal {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}


/* @keyframes progress {
  from {
    --merit: 0%;
    --RM: 0%
  }

  to {
    --merit: 50%;
    --RM: 75%
  }
} */

.circle {
  --goal: 0%; 
  background: conic-gradient(
    at center,
    rgb(57, 174, 57) var(--goal),
    calc(var(--goal)),
    red calc(var(--goal)),
    rgb(220, 217, 217)calc(var(--goal))
  );
  /* background: conic-gradient(at center, #dcd9d9 0deg); Placeholder */
  animation: progress 2s linear 1 forwards;
  border-radius: 50%;
  mask: radial-gradient(circle at center, transparent 55%, black 55%);
  position: absolute;
  inset: 0;
}

.circleContainer {
  /* filter: drop-shadow(0 0 0.8vmin hsla(0, 0, 0%, 1)); */
  position: relative;
  width: 200px;
  margin: 15px;
  aspect-ratio: 1;

}
.circle{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.textWrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: 1;
  color:  #656565;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.textWrapper p{
  margin: .3rem ;
}

.totalProgress{
  color: #363636;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;

}

.circle.animate {
  animation: progress 2s linear 1 forwards;
}
</style>