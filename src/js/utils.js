import { mount } from 'svelte';
import Header from '../lib/Header.svelte';
import Footer from '../lib/Footer.svelte';

// retrieve data from localstorage
export function getLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        const parsedData = JSON.parse(data);
  
        // Ensure the returned data is an array, even if it's a single object
        return Array.isArray(parsedData) ? parsedData : [parsedData];
      } catch (e) {
        return 'Parsing Error'
      }
    }
    return []; // Return empty array if nothing is in localStorage
}

// save data to local storage
export function setLocalStorage(key, data) {
localStorage.setItem(key, JSON.stringify(data));
}

export function updateCatergoryList(category) {

  let categoriesList = getLocalStorage('categories')
  
  // Verify that the list exists in local storage
  if (categoriesList == null){

    categoriesList = [category]

  } // Check if the category is already on the list 
  else if (!categoriesList.includes(category)){

    // @ts-ignore
    categoriesList.push(category);
  }
  
  setLocalStorage('categories', categoriesList)
}
export function addGoalToList(goalObject) {

  let goalsList = getLocalStorage('goals')
  
  // Verify that the list exists in local storage
  if (goalsList == null){

    goalsList = [goalObject]

  } // Check if the goal is already on the list 
  else if (!goalsList.some(goal => goal['category'] === goalObject['category'])){

    // @ts-ignore
    goalsList.push(goalObject);
  }
  
  setLocalStorage('goals', goalsList)
}

export function updateGoalExpense(category, amount) {
  let goalsList = getLocalStorage('goals') || [];

  goalsList.forEach((goal) => {
    if (goal.category.toLowerCase() === category.toLowerCase()) {
      goal.currentExpense = (parseFloat(goal.currentExpense) || 0) + parseFloat(amount);
    }
  });

  setLocalStorage('goals', goalsList);
}

export function renderHeaderFooter(){
  //something that will render our header and footer from svelte 
  const header = mount(Header, {
    target: document.querySelector('#header'),
  });

  const footer = mount(Footer, {
    target: document.querySelector('#footer'),
  });

};

