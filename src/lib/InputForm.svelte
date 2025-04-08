<script>
    import { getLocalStorage, setLocalStorage, updateCatergoryList, updateGoalExpense } from "../js/utils";
    import { closeModal } from "../js/modal.mjs";

    let description = "";
    let category = "";
    let income_expense = "";
    let amount = "";
    let date = "";
    let month = "";

    let categoriesList = getLocalStorage("categories") || [];
    let newCategory = "";
    let useCustomCategory = false;

    function formatCategory(category) {
        return category
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    function handleCategoryChange(e) {
        category = e.target.value;
        useCustomCategory = category === "custom";
    }

    function submitHandler(e) {
        e.preventDefault();

        const selectedCategory = useCustomCategory ? newCategory.toLowerCase() : category.toLowerCase();

        let transactionObject = {
            description,
            category: selectedCategory,
            income_expense,
            amount,
            date,
            month: month.toLowerCase()
        };

        let key = (income_expense === "income") ? "income" : "expense";
        let transactions = getLocalStorage(key) || [];
        // @ts-ignore
        transactions.push(transactionObject);
        setLocalStorage(key, transactions);

        // Save new category if needed
        if (useCustomCategory && newCategory && !categoriesList.includes(newCategory)) {
            categoriesList = [...categoriesList, newCategory];
            setLocalStorage("categories", categoriesList);
            updateCatergoryList(newCategory); // optional utility
        }

        if( key == "expense") {updateGoalExpense(category, amount)}

        document.getElementsByTagName("form")[0].reset();
        category = "";
        newCategory = "";
        income_expense = "";
        amount = "";
        date = "";
        month = "";
        useCustomCategory = false;

        closeModal();
        location.reload()
    }
</script>

<div class="container show">
    <h2>Income/Expense Tracker</h2>
    <form onsubmit={submitHandler}>
        <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" id="description" bind:value={description} required placeholder="Brief Description"/>
        </div>

        <div class="form-group">
            <label for="category">Category:</label>
            <select id="category" bind:value={category} onchange={handleCategoryChange} required>
                <option value="" disabled selected>Select a category</option>
                {#each categoriesList as cat}
                    <option value={cat}>{formatCategory(cat)}</option>
                {/each}
                <option value="custom">+ Add new category</option>
            </select>
        </div>

        {#if useCustomCategory}
            <div class="form-group">
                <label for="newCategory">New Category:</label>
                <input
                    type="text"
                    id="newCategory"
                    bind:value={newCategory}
                    placeholder="Enter new category"
                    required
                />
            </div>
        {/if}

        <div class="form-group">
            <label for="income_expense">Income or Expense:</label>
            <select id="income_expense" bind:value={income_expense} required>
                <option value="" disabled selected>Select one</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>

        <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" bind:value={amount} step="0.50" min="0" required placeholder="0.0" />
        </div>

        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" bind:value={date} required placeholder="MM/DD/YYYY"/>
        </div>

        <div class="form-group">
            <label for="month">Month:</label>
            <select id="month" bind:value={month} required>
                <option value="" disabled selected>Select month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
        </div>

        <button id="submit-button" type="submit" onclick={closeModal}>Submit</button>
    </form>
</div>

<style>
    .container {
        border-color: rgb(34, 34, 145);;
        border-style: solid;
        max-width: 600px;
        margin: 32px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        max-width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 32px auto;
    }

    .form-group {
        margin: auto;
        margin-bottom: 15px;
        width: 100%;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input,
    select {
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

    button:active {
        scale: 90%;
    }
</style>