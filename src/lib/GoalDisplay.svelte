<script>

let gpaCols = {"4.00": 0, "3.95": 1,"3.90": 2, "3.85": 3, "3.80": 4, "3.75": 5,"3.70": 6, "3.65": 7, "3.60": 8, "3.55": 9, "3.50": 10}
let actRows= {"36": 0, "35": 1, "34": 2, "33": 3, "32": 4, "31": 5, "30": 6, "29": 7, "28": 8, "27": 9, "26": 10,"25": 11}

let scholarshipMatrix = [ 
  //  0   1   2   3   4   5   6   7   8   9  10
    [100,100,100,100,100,100,100,100,100,100,100], //0
    [100,100,100,100,100,100,100,100,100,50, 50],  //1
    [100,100,100,100,100,100,100,100,50, 50, 50],  //2
    [100,100,100,100,100,100,100,50, 50, 50, 50],  //3
    [100,100,100,100,100,100,50, 50, 50, 50, 25],  //4
    [100,100,100,100,100,50, 50, 50, 50, 25, 25],  //5
    [100,100,100,100,50, 50, 50, 50, 25, 25, 25],  //6
    [100,50, 50, 50, 50, 50, 50, 25, 25, 25, 25],  //7
    [50, 50, 50, 50, 50, 50, 25, 25, 25, 25, 25],  //8
    [50, 50, 50, 50, 50, 25, 25, 25, 25, 25, 25],  //9
    [50, 50, 50, 50, 25, 25, 25, 25, 25, 25, 25],  //10
    [50, 50, 50, 25, 25, 25, 25, 25, 25, 25, 25],  //11
    [25, 25, 25, 25, 25,  0,  0,  0,  0,  0,  0]   //12
]


function getPercentages(){
  let row = 6
  let col = 5
  return scholarshipMatrix[row][col]
}

function setCSSAnimation(meritPercentage, rmPercentage){
  
  const styleSheet = document.styleSheets[1]; 

  // // Remove any existing keyframes rule with the same name
  // for (let i = 0; i < styleSheet.cssRules.length; i++) {
  //   if (styleSheet.cssRules[i].name === 'progress') {
  //     styleSheet.deleteRule(i);
  //     break;
  //   }
  // }

  // Create the new keyframes rule
  const keyframesRule = `
    @keyframes progress {
      from {
        --merit: 0%;
        --RM: 0%;
      }
      to {
        --merit: ${meritPercentage}%;
        --RM: ${meritPercentage + rmPercentage}%;
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


function calculateScholarship(){
  


  const tuition = 2400 
  const tuitionPercentage = 100
  const meritPercentage = getPercentages()
  const merit =  (meritPercentage * tuition)/tuitionPercentage
  const rMissionary = 1000 
  const rmPercentage = (rMissionary * tuitionPercentage)/tuition

  let totalPay = tuition - merit - rMissionary
  let balance = (totalPay > 0) ? totalPay : 0
  let excess = (totalPay < 0) ? totalPay * -1 : 0
  
  
  const circle = document.querySelector('.circle');
  if (circle) {
    // @ts-ignore
    circle.style.setProperty('--tuition', `${meritPercentage}%`);
    // @ts-ignore
    circle.style.setProperty('--merit', `${meritPercentage}%`);
    // @ts-ignore
    circle.style.setProperty('--RM', `${rmPercentage}%`);
    // @ts-ignore
    circle.style.animation = ''; 
  }


  setCSSAnimation(meritPercentage, rmPercentage)


}


const results =  document.querySelector('.results')
const pending =  document.querySelector('.pending')
const resultsContainer = document.querySelector(".resultsContainer")
const calculator = document.querySelector(".calculator")


setTimeout(calculateScholarship,3000)





// document.querySelector('#startOver').addEventListener("click", ()=>{

//   document.getElementById('calculatorForm').reset()
//   resetAnimation(document.querySelector('.circle'))

//   if (calculator.classList.contains('hidden')){
//     calculator.classList.remove('hidden')
//     resultsContainer.classList.add('hidden')
//   }else{
//     results.classList.add('hidden')
//     pending.classList.remove('hidden')
//   }

//   if(window.innerWidth < 1000){
//     resultsContainer.style.visibility = 'hidden' 
//     // calculator.classList.add('hidden')
//     // resultsContainer.style.visibility = 'visible'
//     // resultsContainer.classList.remove('hidden')
//     resultsContainer.style.height = '0';
//     resultsContainer.style.width = '0';
//   }
// })




</script>


<div class="circleContainer">
    <div class="circle"></div>
    <div class="textWrapper">
      <p>Total Scholarships</p>
      <span class="totalScholarships">$0</span>
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

@keyframes progress {
  from {
    --merit: 0%;
    --RM: 50%
  }

  to {
    --merit: 50%;
    --RM: 75%
  }
}

.circle {
  --merit: 0%;
  --RM: 0%;
 
  background: conic-gradient(
    at center,
    var(--merit-color) var(--merit),
    calc(var(--merit)),
    var(--RM-color) calc(var(--RM)),
    calc(var(--RM)),
    var(--total-color) calc(var(--merit))
  );
  animation: progress 2s linear 1 forwards;
  border-radius: 50%;
  mask: radial-gradient(circle at center, transparent 55%, black 55%);
  position: absolute;
  inset: 0;
}

.circleContainer {
  filter: drop-shadow(0 0 0.8vmin hsla(0, 0, 0%, 1));
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

.totalScholarships{
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