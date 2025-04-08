<script>
    import { getLocalStorage, setLocalStorage, addGoalToList } from "../js/utils";
    import {closeGoalModal} from "../js/modal.mjs"

    let categoriesList = getLocalStorage("categories") || [];

    let category = "";
    let allowedExpense = "";
    let newCategory = "";
    let useCustomCategory = false;

    function formatCategory(category) {
        return category
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    function handleCategoryChange(e) {
        category = e.target.value;
        useCustomCategory = (category === "custom");
    }

    function submitHandler(e) {
        e.preventDefault();

        const selectedCategory = useCustomCategory ? newCategory : category;

        let goalObject = {
            category: selectedCategory,
            income_expense: allowedExpense
        };

        addGoalToList(goalObject);

        // Add new category to list and localStorage if it's new
        if (useCustomCategory && newCategory && !categoriesList.includes(newCategory)) {
            categoriesList = [...categoriesList, newCategory];
            setLocalStorage("categories", categoriesList);
        }

        // Reset form
        document.getElementsByTagName("form")[0].reset();
        category = "";
        newCategory = "";
        allowedExpense = "";
        useCustomCategory = false;


        closeGoalModal();
        location.reload()
    }
</script>

<div class="container show goal">
    <h2>Set your spending goal</h2>
    <form on:submit={submitHandler}>
        <div class="form-group">
            <label for="category">Category:</label>
            <select id="category" name="category" on:change={handleCategoryChange} bind:value={category} required>
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
                    name="newCategory"
                    bind:value={newCategory}
                    placeholder="Enter new category"
                    required
                />
            </div>
        {/if}

        <div class="form-group">
            <label for="allowedExpense">Amount:</label>
            <input type="number" id="allowedExpense" name="allowedExpense" bind:value={allowedExpense} required step="0.50" min="0" placeholder="0.0">
        </div>

        <button type="submit">Save</button>
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