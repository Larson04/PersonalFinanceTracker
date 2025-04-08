

export function openModal() {
    const entryButton = document.getElementById("entry-button");
    const inputForm = document.querySelector(".show");

    entryButton.addEventListener("click", () => {
        inputForm.style.display=('flex');
    })
}

export function closeModal() {
    const submitButton = document.getElementById("submit-button");
    const inputForm = document.querySelector(".show");

    submitButton.addEventListener("click", () => {
        inputForm.style.display=('none');
    })
}
export function openGoalModal() {
    const goalForm = document.querySelector(".goal");

    goalForm.style.display=('flex');

}

export function closeGoalModal() {
    const goalForm = document.querySelector(".goal");

    goalForm.style.display=('none');

}