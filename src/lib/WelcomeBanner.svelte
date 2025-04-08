<script>
    import { getLocalStorage, setLocalStorage } from "../js/utils";
    let showBanner = (localStorage.getItem('visited')== null);

    function closeBanner() {
        showBanner = false;
        setLocalStorage('visited', true)
    }
</script>

{#if showBanner}
    <div class="welcome-overlay">
        <div class="welcome-banner">
            <button class="close-btn" on:click={closeBanner}>&times;</button>
            <h2>First Steps</h2>
            <p>Before you start, take some time to create budgeting goals and assign them a category.</p>
            <p>Once you are done, fill out the entry form and you are all set.</p>
        </div>
    </div>
{/if}

<style>
    .welcome-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(6px);
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .welcome-banner {
        background-color: #fff;
        padding: 24px 32px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        max-width: 500px;
        text-align: center;
        position: relative;
        border: 2px solid rgb(34, 34, 145);
    }

    .welcome-banner h2 {
        margin-bottom: 12px;
    }

    .welcome-banner p {
        margin: 8px 0;
        font-size: 1.05rem;
    }

    .close-btn {
        position: absolute;
        top: 8px;
        right: 12px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #333;
    }

    .close-btn:hover {
        color: #000;
    }
</style>