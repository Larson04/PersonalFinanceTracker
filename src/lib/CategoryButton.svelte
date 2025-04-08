<script>

    let { category } = $props()
    function formatCategory(category) {
        return category
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
        .split(" ") // Split into words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" "); // Join words with a space
    }
    const formattedCategory = formatCategory(category)

    function handleClick(e){
        // get the inner text of the given element
        console.log(e.target.value);
    }

</script>


<input type="button" class="button" value={formattedCategory} onclick={handleClick}/>

<style>
    .button {
        width: auto;
        padding: 10px;
        background-color: #559c58;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
    }
    .button:hover {
        background-color: #45a049;
    }
    .button:active {
        scale: 90%;
    }

</style>