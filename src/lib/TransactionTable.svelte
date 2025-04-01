<script>
    import TransactionEntry from "./TransactionEntry.svelte"
    import { getLocalStorage } from '../js/utils.js';

    let { month, income_expense} = $props();
    

    let entries = [];

    entries = getLocalStorage(income_expense);

    let sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    let filteredEntries = sortedEntries.filter(entry => entry.month === month);
</script>


<div class="container">
    <table>
        <caption>{month}</caption>
        <thead>
            <tr>
                <th class:income={income_expense === "income"} class:expense={income_expense === "expense"}>Date</th>
                <th class:income={income_expense === "income"} class:expense={income_expense === "expense"}>Description</th>
                <th class:income={income_expense === "income"} class:expense={income_expense === "expense"}>Category</th>
                <th class:income={income_expense === "income"} class:expense={income_expense === "expense"}>Amount</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredEntries as entry}
                <TransactionEntry entry={entry} />
            {/each}
        </tbody>
    </table>
</div>

<style>
    
    .container {
        border: 2px solid #2C3E50;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 65%;
        padding: 4px 0px 8px 0px;
        margin: auto;
        margin-top: 8px;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    caption{
        font-weight: bold;
        font-size: 1.25rem;
        padding: 4px;
        text-align: center;
    }
    
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        color: #2C3E50;
    }

    
    .income {
        background-color: #1ABC9C;
        
    }

    .expense {
        background-color: #f37b12;
        
    }
</style>