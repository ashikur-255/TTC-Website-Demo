/* =========================================================
   TTC WEBSITE - EXTERNAL JAVASCRIPT
========================================================= */


/* =========================================================
   1. CURRENT DATE & TIME
========================================================= */

function updateDateTime() {

    const dateTimeElement =
        document.getElementById("dateTime");

    if (!dateTimeElement) {
        return;
    }


    const now = new Date();


    const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };


    const formattedDate =
        now.toLocaleDateString(
            "en-US",
            dateOptions
        );


    const formattedTime =
        now.toLocaleTimeString(
            "en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );


    dateTimeElement.textContent =
        `${formattedDate} | ${formattedTime}`;
}


/*
    Run immediately
*/
updateDateTime();


/*
    Update every second
*/
setInterval(
    updateDateTime,
    1000
);


/* =========================================================
   2. CONTACT FORM CONFIRMATION POPUP
========================================================= */

function handleContactSubmit(event) {

    /*
        Prevent actual form submission
    */
    event.preventDefault();


    const form =
        document.getElementById("contactForm");


    if (!form) {
        return;
    }


    const firstName =
        document
            .getElementById("firstName")
            .value
            .trim();


    const lastName =
        document
            .getElementById("lastName")
            .value
            .trim();


    const email =
        document
            .getElementById("email")
            .value
            .trim();


    const subject =
        document
            .getElementById("subject")
            .value
            .trim();


    /*
        Confirmation popup
    */

    const confirmation =
        confirm(
            "Please confirm your message.\n\n" +

            "Name: " +
            firstName +
            " " +
            lastName +

            "\nEmail: " +
            email +

            "\nSubject: " +
            subject +

            "\n\nDo you want to submit this message?"
        );


    /*
        If user clicks OK
    */

    if (confirmation) {

        alert(
            "Thank you, " +
            firstName +
            "!\n\n" +
            "Your message has been submitted successfully."
        );


        /*
            Clear form
        */

        form.reset();

    }


    /*
        If user clicks Cancel,
        nothing is submitted.
    */
}


/* =========================================================
   3. COLLAPSIBLE FAQ
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const faqQuestions =
            document.querySelectorAll(
                ".faq-question"
            );


        faqQuestions.forEach(
            function (question) {


                question.addEventListener(
                    "click",
                    function () {


                        const currentItem =
                            question.closest(
                                ".faq-item"
                            );


                        /*
                            Close other FAQ items
                        */

                        const allItems =
                            document.querySelectorAll(
                                ".faq-item"
                            );


                        allItems.forEach(
                            function (item) {

                                if (
                                    item !== currentItem
                                ) {

                                    item.classList.remove(
                                        "open"
                                    );

                                }

                            }
                        );


                        /*
                            Toggle current FAQ
                        */

                        currentItem.classList.toggle(
                            "open"
                        );

                    }
                );

            }
        );

    }
);