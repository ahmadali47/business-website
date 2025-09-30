// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted!');
// });


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        service : document.getElementById("service").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_ks224eg","template_kl2be5t",parms).then(alert("Email Sent!"))

}



const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('click', () => {
    popupMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !popupMenu.contains(event.target)) {
        popupMenu.classList.add('hidden');
    }
});
