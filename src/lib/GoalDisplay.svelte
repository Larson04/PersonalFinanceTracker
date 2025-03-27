<script>
  import { getLocalStorage } from "../js/utils";

  function getAllGoalsStart(goals){

    let progress = ''

    goals.forEach((key) => {

      progress += `\n --${key}: 0}%;`
    })
    return progress
  }

  function getAllGoalsEnd(goals){

    let progress = ''

    Object.entries(goals).forEach(([key, value]) => {

      progress += `\n --${key}: ${value}%;`
    })
    return progress
  }

  function setCSSAnimation(goalPercentages){
    
    const styleSheet = document.styleSheets[1]; 

    // Create the new keyframes rule
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



  function resetAnimation(element) {
    element.style.animation = 'none'; 
    element.offsetHeight; 
    element.style.setProperty('--tuition', '0%');
    element.style.setProperty('--merit', '0%');
    element.style.setProperty('--RM', '0%');


  }

  function getTotalPercentages(goals){

    let percentages = {} 

    const monthlyBudget = goals[0]['allowedExpense'] 
    const budgetPercentage = 100
    
    Object.entries(goals).forEach((item) => {
      
      let goalPercentage = (item['currentExpense'] * budgetPercentage ) / monthlyBudget

      percentages[item['category']] = goalPercentage

    })
    
    percentages['monthlyBudget'] = budgetPercentage

    return percentages
  }

  function calculateGoals(){

    let goals = getLocalStorage('goals')
    
    let goalPercentages = getTotalPercentages(goals)

    console.log(goalPercentages)

    const circle = document.querySelector('.circle');
    if (circle) {
      // @ts-ignore
      circle.style.setProperty('--tuition', `${meritPercentage}%`);
      // @ts-ignore
      circle.style.setProperty('--merit', `${meritPercentage}%`);
      // @ts-ignore
      circle.style.setProperty('--RM', `${rmPercentage}%`);

      // circle.computedStyleMap.setProperty('background')
      // @ts-ignore
      circle.style.animation = ''; 
    }
    setCSSAnimation(goalPercentages)


  }


  setTimeout(calculateGoals,1000)





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
  --merit: 0%;
  --RM: 0%;
 
  background: conic-gradient(
    at center,
    red var(--merit),
    calc(var(--merit)),
    blue calc(var(--RM)),
    calc(var(--RM)),
    rgb(220, 217, 217) calc(var(--merit))
  );
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