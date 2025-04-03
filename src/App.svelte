<script>
  import InputForm from './lib/InputForm.svelte';
  import TransactionTable from './lib/TransactionTable.svelte';
  import Hero from './lib/Hero.svelte';
  import GoalDisplay from './lib/GoalDisplay.svelte';
  import { getLocalStorage } from './js/utils.js';
  import GoalList from './lib/GoalList.svelte';

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  

</script>

<header id="header">
</header>

<main>
  
  <div class="hero">
    <Hero />
  </div>
  <div class="main"></div>
  <div>
    <GoalList />
  </div>
  <div class="listings">
    <h2>History</h2>
    <div class="income">
      {#each  months as month}
        <TransactionTable month={month} income_expense={'income'} />
        {/each}
    </div>
    <div class="expense">
      {#each  months as month}
        <TransactionTable month={month} income_expense={'expense'} />
        {/each}
    </div>
  </div>

  <div id="inputForm">
    <InputForm />
  </div>

</main>

<footer id="footer"></footer>

<style>
  
</style>
