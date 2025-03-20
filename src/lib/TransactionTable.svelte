<script>
    import TransactionEntry from "./TransactionEntry.svelte"
</script>

<h2>History</h2>
<div class="container">
    <table>
        <caption>Month</caption>
        <thead>
            <tr>
                <th class="income">Date</th>
                <th class="income">Description</th>
                <th class="expense">Category</th>
                <th class="income">Amount</th>
            </tr>
        </thead>
        <tbody>
            <TransactionEntry />
        </tbody>
    </table>
</div>

<style>
    .container {
        border: 2px solid #2C3E50;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
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