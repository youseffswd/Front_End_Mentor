const ratingBtns = document.querySelectorAll(".buttons button")
const submitBtn = document.querySelector(".submit")
const card = document.querySelector(".card")
const selectedValue = document.getElementById("selected_value")
let activeBtn;
ratingBtns.forEach(btn => {
    btn.onclick = () => {
        if(activeBtn) activeBtn.classList.remove("active")
        activeBtn = btn
        activeBtn.classList.add("active")
    }
})
submitBtn.onclick = () => {
    card.classList.add("active")
    selectedValue.textContent = activeBtn.textContent
}