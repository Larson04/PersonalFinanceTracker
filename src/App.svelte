<script>
  import InputForm from './lib/InputForm.svelte';
  import TransactionTable from './lib/TransactionTable.svelte';
</script>

<header id="header">
  <div class="navigation"></div>
</header>

<main>
  
  <div class="hero">
    <h1>Personal Finance Tracker</h1>
  </div>
  <div class="main"></div>
  <div class="listings">
    <TransactionTable />
  </div>

  <div id="inputForm">
    <InputForm />
  </div>

</main>

<footer id="footer"></footer>

<style>

</style>
