let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let totalAmount = 0;

function toggleBtn(btn, name, price){
    document.getElementById('empty-row')?.remove();

    let existingItem = cart.find(item=> item.name === name)

    if(!existingItem){
        cart.push({name, price})
        localStorage.setItem('cart', JSON.stringify(cart))
        
        btn.innerHTML = `RemoveItem`;
        btn.classList.remove('btn-primary')
        btn.classList.add('btn-secondary')
    } else {
        cart = cart.filter(item=> item.name !== name)
        localStorage.setItem('cart', JSON.stringify(cart))

        btn.innerHTML = `<i class="fas fa-cart-plus"></i>AddItem`;
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary')
    }

    updateCart();
}

function clearCart(){
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    

    document.querySelectorAll('.service-btn button').forEach(btn=>{

        btn.innerHTML = `<i class="fas fa-cart-plus"></i>AddItem`;
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
    })
    updateCart();
}

function updateCart(){
    let cartItem = document.getElementById('cart-items');
    cartItem.innerHTML = '';
    totalAmount = 0;

    if (cart.length === 0) {
        cartItem.innerHTML = `
        <tr id="empty-row">
            <td colspan="9" class="empty-msg">No items added</td>
        </tr>`;
    } else {
        cart.forEach((item, index) => {
            cartItem.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td colspan="7">${item.name}</td>
                <td>₹${item.price}</td>
            </tr>`;
            totalAmount += item.price;
        });
    }

    document.getElementById('total-amount').innerText = `₹${totalAmount}`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCart();
}); 


document.getElementById('booking-form').addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email =  document.getElementById('email').value.trim();
    let confirmationMsg = document.getElementById('confirmation-message')

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');


    // will not execute becoz the fiel are set to required and will automatically validate
    if (!name || !phone || !email) {
        confirmationMsg.innerHTML = `<p>Please fill in all required fields</p>`
        confirmationMsg.style.color = "red";
        return;
    }

    if(cart.length === 0){
        confirmationMsg.innerHTML = `<p><i class="fas fa-info-circle" style="color: blue; margin-right: 5px;"></i>Add the items to the cart to book</p>`
        confirmationMsg.style.color = "red";
        return;
    }

    let cart_items = cart.map(item => ({
        service_name: item.name,
        service_price: item.price
    }));
    let total_amount = cart.reduce((sum, item) => sum + item.price, 0);

    let templateParams = {
        name: name,
        phone: phone,
        email: email,
        cart_items: cart_items,
        total:  total_amount
    }

    emailjs.send('service_pqxlwrg', 'template_73bom3l', templateParams)
    .then((response)=>{
        console.log('SUCCESS', response.status, response.text);
        document.getElementById('confirmation-message').innerHTML = 
         "Thank you For Booking the Service! We will get back to you soon!";
        document.getElementById('confirmation-message').style.display = 'block';
    }, (error)=>{
        console.log('FAILED...', error);
        
    })

    })
    document.getElementById('sub-form').addEventListener('submit', (e)=>{
        e.preventDefault();

        let name = document.getElementById('sub-name').value.trim();
        let email = document.getElementById('sub-email').value.trim();
        let msg = document.getElementById('sub-msg');

        let templateParams = {
            name: name,
            email: email
        }

        emailjs.send('service_f87t139', "template_6x5dwv5", templateParams)
        .then((success)=>{
            console.log('SUCCESS', success.status, success.text);
            msg.innerHTML = `<p><i class="fas fa-info-circle" style="color: blue; margin-right: 5px;"></i>You have successfully subscribed and will be updated!</p>`
            msg.style.display = 'block'
        }, (error)=>{
            console.log("FAILED...",error);
            
        })
     })

     function noRefresh(e){
        e.preventDefault()
     }
     function bookingSection(){
        document.getElementById("booking").scrollIntoView({behavior: 'smooth'})
     }
