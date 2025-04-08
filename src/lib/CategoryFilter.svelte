<script>
    import CaregoryButton from './CategoryButton.svelte'
    import {getLocalStorage, updateCatergoryList} from "../js/utils"
  import CategoryButton from './CategoryButton.svelte';
    let categories = getLocalStorage('categories')

</script>


<form>
    
    <h3>Categories</h3>
    <p>Select a category to filter the tables</p>
    <div class="buttonContainer">
        <CategoryButton category="See All"/>
        {#each categories as category}
            <CaregoryButton category={category} />
        {/each}
    </div>
    <button>Show all</button>

</form>


<style>

.buttonContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-evenly;

}

</style>