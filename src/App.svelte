<script>
  import InputForm from './lib/InputForm.svelte';
  import Hero from './lib/Hero.svelte';
  import GoalList from './lib/GoalList.svelte';
  import TableContainer from './lib/TableContainer.svelte';
  import GoalForm from './lib/GoalForm.svelte';
  import WelcomeBanner from './lib/WelcomeBanner.svelte';
</script>

<header id="header">
</header>

<main>
  
  <div class="hero">
    <Hero />
  </div>
  <div class="main">

    <WelcomeBanner />
    <GoalList />
    <TableContainer />

    <div id="inputForm">
      <InputForm />
    </div>

    <div id="goalForm">
      <GoalForm />
    </div>
  </div>


</main>

<footer id="footer"></footer>

<style>
  
</style>
