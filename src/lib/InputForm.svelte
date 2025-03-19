<script>
    let description
    let category
    let income_expense
    let amount
    let date
    let month

    function loginHandler(e) {
        e.preventDefault()

        console.log(description, category, income_expense, amount, date, month)

        document.getElementsByTagName('form').reset()
    }

</script>

<div class="container">
    <h2>Income/Expense Tracker</h2>
    <form onsubmit={loginHandler}>
        <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" bind:value={description} required>
        </div>

        <div class="form-group">
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" bind:value={category} required>
        </div>

        <div class="form-group">
            <label for="income_expense">Income or Expense:</label>
            <select id="income_expense" name="income_expense" bind:value={income_expense} required>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>

        <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount" bind:value={amount} required step="0.01" min="0">
        </div>

        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" bind:value={date} required>
        </div>

        <div class="form-group">
            <label for="month">Month:</label>
            <input type="text" id="month" name="month" bind:value={month} required>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
    }
    .container {
        max-width: 600px;
        margin: auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    form{
        max-width:max-content
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input, select {
        width: 34em;
        padding: 8px;
        margin: 5px 0;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
    }
    button:hover {
        background-color: #45a049;
    }
</style>