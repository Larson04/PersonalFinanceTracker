<script>
  import InputForm from './lib/InputForm.svelte';
  import TransactionTable from './lib/TransactionTable.svelte';
  import Hero from './lib/Hero.svelte';
  import GoalDisplay from './lib/GoalDisplay.svelte';
</script>

<header id="header">
</header>

<main>
  
  <div class="hero">
    <Hero />
  </div>
  <div class="main"></div>
  <div class="listings">
    <TransactionTable />
  </div>
  <div>
    <GoalDisplay />
  </div>

  <div id="inputForm">
    <InputForm />
  </div>

</main>

<footer id="footer"></footer>

<style>
  
</style>
