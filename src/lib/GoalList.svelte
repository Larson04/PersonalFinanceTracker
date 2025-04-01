<script>
    import {getLocalStorage} from "../js/utils"
    import GoalDisplay from "./GoalDisplay.svelte";

    let goalList = getLocalStorage('goals')

</script>


<div class="list">

    {#if goalList && goalList.length > 0}
        {#each goalList as goal,index}
            <GoalDisplay goal={goal} key={index} />
        {/each}
    {:else}
        <p>No goals available.</p>
    {/if}

</div>


<style>
.list{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}


</style>