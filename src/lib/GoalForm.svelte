<script>

    import { getLocalStorage, setLocalStorage, updateCatergoryList, updateGoalList } from "../js/utils";

    let categoriesList = getLocalStorage("categories")

    function formatCategory(category) {
    return category
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
    let category
    let allowedExpense

    function submitHandler(e) {
        e.preventDefault()

        // Create an object to store the new goal
        let goalObject = {
            "category": category,
            "income_expense": allowedExpense
        }

        // We are expecting the LocalStorage variable to look like so:
        // {"goals": [ {"category": category, "income_expense": income_expense, ...},{...} ]}

        // Update the goal list
        updateGoalList(goalObject)
        
        // Reset the form 
        document.getElementsByTagName('form')[0].reset()
    }



</script>

<div class="container">
    <h2>Set you spending goal</h2>
    <form onsubmit={submitHandler}>

        <div class="form-group">
            <label for="category">Category:</label>
            <select id="category" name="category" bind:value={category} required>
                <option value="" disabled selected>Select a category</option>
                {#each categoriesList as cat}
                    <option value={cat}>{formatCategory(cat)}</option>
                {/each}
            </select>
        </div>

        <div class="form-group">
            <label for="allowedExpense">Amount:</label>
            <input type="number" id="allowedExpense" name="allowedExpense" bind:value={allowedExpense} required step="0.50" min="0">
        </div>

        <button type="submit">Save</button>
    </form>
</div>

<style>

    .container {
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
    form{
        max-width:max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 32px auto;
    }
    .form-group {
        margin: auto;
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
    button:active {
        scale: 90%;
    }
</style>