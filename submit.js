const submitBtn = document.querySelector("#submit");
const formElements = document.querySelectorAll(".form > *")
submitBtn.addEventListener("click", () => {

    formElements.forEach((element) => {
        if (element.value ==  "") {
            document.querySelector("#error").style.opacity = "100";
            return;
        }
        document.querySelector("#thankYou").style.opacity = "100";
    })
})