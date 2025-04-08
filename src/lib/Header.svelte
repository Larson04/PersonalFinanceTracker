<script>
    import { openModal } from '../js/modal.mjs';
    import InputForm from './InputForm.svelte';

    setTimeout(() => {
        const inputForm = document.querySelector(".show");
        const entryButton = document.getElementById("entry-button");

        entryButton.addEventListener("click", () => {
            inputForm.style.display = "flex";
        })
    }, 20);

</script>

<div class="logo">
    <img src="src/assets/pft-icon.png" alt="personal finance tracker logo">
</div>

<div class="buttons">
    <button id="entry-button" onclick={openModal}>New Entry</button>
    <button>Import</button>
    <button>Export</button>
</div>

<style>
    .logo {
        margin-left: 64px;
    }
    .logo img {
        width: 48px;
    }
    .buttons {
        display: flex;
        gap: 32px;
        margin-right: 64px;
    }
    .buttons button {
        font-size: 14px;
        width: 120px;
        height: 32px;
        border: none;
        border-radius: 4px;
        background: #5AB0C1;
        color: #FCF8F0;
    }
    .buttons button:hover {
        background: #4c95a3;
    }
    .buttons button:active {
        scale: 90%;
    }
    #entry-button {
        margin-right: 64px;
        background: #99BC85;
    }
    #entry-button:hover {
        background: #85a373;
    }
</style>