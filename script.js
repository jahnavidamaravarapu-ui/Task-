```javascript
// =============================
// MOBILE NAVIGATION
// =============================

function toggleMenu() {

    const nav =
        document.querySelector(".nav-links");

    nav.classList.toggle("show");

}


// =============================
// CONTACT FORM
// =============================

const form =
    document.getElementById("contactForm");


if (form) {

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value.trim();


            const email =
                document.getElementById("email")
                .value.trim();


            const message =
                document.getElementById("message")
                .value.trim();


            // Check empty fields

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            // Check selected service

            const services =
                document.querySelectorAll(
                    'input[name="service"]:checked'
                );


            if (services.length === 0) {

                alert(
                    "Please select at least one service."
                );

                return;

            }


            alert(
                "Thank you, " +
                name +
                "! Your form has been submitted."
            );


            form.reset();

        }
    );

}
```
