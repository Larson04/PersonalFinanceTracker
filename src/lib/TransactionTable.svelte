<script>
    import TransactionEntry from "./TransactionEntry.svelte"
    import { getLocalStorage } from '../js/utils.js';

    let { month, income_expense} = $props();
    
    let category = '';

    let entries = [];
    let displayEntries = [];

    entries = getLocalStorage(income_expense);

    let sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    let filteredEntries = sortedEntries.filter(entry => entry.month === month.toLowerCase());

    displayEntries = filteredEntries;

</script>

{#if displayEntries.length > 0}
<div class="container">
    <table>
        <caption>{month}</caption>
        <thead>
            <tr>
                <th style="width: 25%" class:income={income_expense === "income"} 
                class:expense={income_expense === "expense"}>
                    Date
                </th>
                <th style="width: 45%" class:income={income_expense === "income"} 
                class:expense={income_expense === "expense"}>
                    Description
                </th>
                <th style="width: 15%" class:income={income_expense === "income"} 
                class:expense={income_expense === "expense"}>
                    Category
                </th>
                <th style="width: 5%" class:income={income_expense === "income"} 
                class:expense={income_expense === "expense"}>
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
            {#each displayEntries as entry}
                <TransactionEntry entry={entry} />
            {/each}
        </tbody>
    </table>
</div>
{/if}

<style>

    .container {
        border: 2px solid #2C3E50;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 80%;
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
    
    th {
        margin: 8px;
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