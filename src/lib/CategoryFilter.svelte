<script>
    import CaregoryButton from './CategoryButton.svelte'
    import {getLocalStorage, updateCatergoryList} from "../js/utils"
  import CategoryButton from './CategoryButton.svelte';
    let categories = getLocalStorage('categories')

</script>


<form>
    
    <h2>Categories</h2>
    <hr>
    <p>Select a category to filter the tables</p>
    <div class="filters">
        <div class="buttonContainer">
            <CategoryButton category="See All"/>
            {#each categories as category}
                <CaregoryButton category={category} />
            {/each}
        </div>
    </div>
</form>


<style>

h2 {
    margin-bottom: 0px;
    font-size: 32px;
}

p {
    margin-bottom: 32px;
}

.buttonContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-evenly;

}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.filters {
    width: 100%;
}

hr {
    width: 25%;
    margin-bottom: 8px;
    border: 2px solid black;
    border-radius: 4px;
}
</style>