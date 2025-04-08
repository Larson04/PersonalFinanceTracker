<script>
  import TransactionTable from './TransactionTable.svelte';
  import CategotyFilter from './CategoryFilter.svelte';

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  

</script>

<CategotyFilter />
<div class="listings">
  <h2>History</h2>
  <hr>
  <div class="income-container">
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
</div>

<style>
  .listings{
    display: flex;
    flex-direction: row;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 24px;
  }

  .income-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .listings h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 0px;
  }

  .income, .expense {
    width: 50%;
  }

  .listings hr {
    width: 25%;
    margin-bottom: 24px;
    border: 2px solid black;
    border-radius: 4px;
  }

</style>