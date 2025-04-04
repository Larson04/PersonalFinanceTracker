<script>
  import TransactionTable from './TransactionTable.svelte';
  import CategotyFilter from './CategoryFilter.svelte';

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  

</script>

<h2>History</h2>
<CategotyFilter />
<div class="listings">
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

<style>
    .listings{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .income, .expense {
        width: 50%;
    }

</style>