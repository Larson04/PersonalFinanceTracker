<script>
  import InputForm from './lib/InputForm.svelte';
  import TransactionTable from './lib/TransactionTable.svelte';
  import Hero from './lib/Hero.svelte';
  import GoalDisplay from './lib/GoalDisplay.svelte';
  import { getLocalStorage } from './js/utils.js';
  import GoalList from './lib/GoalList.svelte';
  import TransactionEntry from './lib/TransactionEntry.svelte';
  import TableContainer from './lib/TableContainer.svelte';

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  

</script>

<header id="header">
</header>

<main>
  
  <div class="hero">
    <Hero />
  </div>
  <div class="main">

    <GoalList />
    <TableContainer />

    <div id="inputForm">
      <InputForm />
    </div>
  </div>


</main>

<footer id="footer"></footer>

<style>
  
</style>
