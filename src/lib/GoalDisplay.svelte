<script>
  import { getLocalStorage } from "../js/utils";

  // function getAllGoalsStart(goals){

  //   let progress = ''

  //   Object.keys(goals).forEach((key) => {

  //     progress += `\n --${key}: 0%;`
  //   })
  //   return progress
  // }

  // function getAllGoalsEnd(goals){

  //   let progress = ''

  //   Object.entries(goals).forEach(([key, value]) => {

  //     progress += `\n --${key}: ${value}%;`
  //   })
  //   return progress
  // }

  // function setCSSAnimation(goalPercentages){
    
  //   const styleSheet = document.styleSheets[1]; 

  //   // Create the new keyframes rule
  //   const keyframesRule = `
  //     @keyframes progress {
  //       from {
  //         ${getAllGoalsStart(goalPercentages)}
  //       }
  //       to {
  //         ${getAllGoalsEnd(goalPercentages)}
  //       }
  //     }
  //   `;

  //   // Inject the new keyframes rule
  //   styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);

  // }



  // function resetAnimation(element) {
  //   element.style.animation = 'none'; 
  //   element.offsetHeight; 
  //   element.style.setProperty('--tuition', '0%');
  //   element.style.setProperty('--merit', '0%');
  //   element.style.setProperty('--RM', '0%');


  // }

  // function getTotalPercentages(goals){

  //   let percentages = {} 

  //   const monthlyBudget = goals[0]['allowedExpense'] 
  //   const budgetPercentage = 100
    
  //   goals.forEach((item) => {
      
  //     let goalPercentage = (item['currentExpense'] * budgetPercentage ) / monthlyBudget

  //     percentages[item['category']] = goalPercentage

  //   })
    
  //   percentages['monthlyBudget'] = budgetPercentage

  //   return percentages
  // }

  // function calculateGoals(){

  //   let goals = getLocalStorage('goals')
    
  //   let goalPercentages = getTotalPercentages(goals)

  //   console.log(goalPercentages)

  //   const circle = document.querySelector('.circle');
  //   if (circle) {

  //     Object.entries(goalPercentages).forEach(([key, value]) => {
  //       circle.style.setProperty(`--${key}`, `${value}%`);
  //     });

  //     // circle.computedStyleMap.setProperty('background')
  //     // @ts-ignore
  //     circle.style.animation = ''; 
  //   }
  //   setCSSAnimation(goalPercentages)


  // }


  // setTimeout(calculateGoals,1000)





  // document.querySelector('#startOver').addEventListener("click", ()=>{

  //   resetAnimation(document.querySelector('.circle'))

  // })

  // this is the assumed structure of the goals inside of Local storage  
  // MONTHLY BUDGET SHOULD ALWAYS BE THE FIRST ONE
  // [
  //   {
  //   'category': 'monthlyBudget', 
  //   'allowedExpense': 2000,
  //   'currentExpense': 450
  //  },
  //  {
  //   'category': 'groceries', 
  //   'allowedExpense': 200,
  //   'currentExpense': 150
  //  },
  //  {
  //   'category': 'school', 
  //   'allowedExpense': 300,
  //   'currentExpense': 150
  //  },
  //  {
  //   'category': 'bills', 
  //   'allowedExpense': 500,
  //   'currentExpense': 150
  //  },
  //   {...}
  // ]


  function getAllGoalsStart(goals) {
    let progress = '';

    Object.keys(goals).forEach((key) => {
      progress += `\n --${key}: 0%;`;
    });
    return progress;
  }

  function getAllGoalsEnd(goals) {
    let progress = '';

    Object.entries(goals).forEach(([key, value]) => {
      progress += `\n --${key}: ${value}%;`;
    });
    return progress;
  }

  function setCSSAnimation(goalPercentages) {
    const styleSheet = document.styleSheets[1];

    // Create the new keyframes rule dynamically
    const keyframesRule = `
      @keyframes progress {
        from {
          ${getAllGoalsStart(goalPercentages)}
        }
        to {
          ${getAllGoalsEnd(goalPercentages)}
        }
      }
    `;
    
    // Inject the new keyframes rule
    styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);
  }

  function getTotalPercentages(goals) {
    let percentages = {};
    const monthlyBudget = goals[0]['allowedExpense'];
    const budgetPercentage = 100;
    
    goals.forEach((item) => {
      let goalPercentage = (item['currentExpense'] * budgetPercentage) / monthlyBudget;
      percentages[item['category']] = goalPercentage;
    });
    
    percentages['monthlyBudget'] = budgetPercentage;

    return percentages;
  }

  function calculateGoals() {
  let goals = getLocalStorage('goals');
  let goalPercentages = getTotalPercentages(goals);

  console.log(goalPercentages);

  const circle = document.querySelector('.circle');
  if (circle) {
    // 1. Create and inject the keyframes rule before applying animation
    setCSSAnimation(goalPercentages);

    // 2. Set an initial "empty" gradient (everything at 0%)
    let initialGradient = '';
    Object.entries(goalPercentages).forEach(([key, value], index) => {
      if (key !== 'monthlyBudget') {
        initialGradient += `lightgray 0% 0%, `;
      }
    });

    circle.style.background = `conic-gradient(at center, ${initialGradient.slice(0, -2)})`;

    // 3. Delay applying the animated gradient to allow the keyframes to take effect
    setTimeout(() => {
      let newGradient = '';
      let startAngle = 0;

      Object.entries(goalPercentages).forEach(([key, value], index) => {
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

  setTimeout(calculateGoals, 1000);

</script>


<div class="circleContainer">
    <div class="circle"></div>
    <div class="textWrapper">
      <p>Goal Progress</p>
      <span class="totalProgress">$0</span>
    </div>
</div>

<style>

@property --merit {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}

@property --RM {
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
  /* --merit: 0%;
  --RM: 0%;
 
  background: conic-gradient(
    at center,
    red var(--merit),
    calc(var(--merit)),
    blue calc(var(--RM)),
    calc(var(--RM)),
    rgb(220, 217, 217) calc(var(--merit))
  ); */
  background: conic-gradient(at center, #dcd9d9 0deg); /* Placeholder */
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