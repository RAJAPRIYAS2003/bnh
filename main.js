/* header toogle */
$(document).ready(function(){
    $('#menubtn').click(function(){
        $('.nav-left').toggleClass('show');
        this.classList.toggle('fa-xmark')
    });
});







// add to cart and favourtie
$(document).ready(function() {
    
    let cartCount = 0;
    let favoritesCount = 0;

    // Add to Cart
    $(".add-to-cart").click(function() {
        cartCount++;
        updateNavbarCounts();
        alert("Item added to cart!");
    });

    // Add to Favorites
    $(".add-to-favorites").click(function() {
        favoritesCount++;
        updateNavbarCounts();
        alert("Item added to favorites!");
    });

    // Navbar Counts Update
    function updateNavbarCounts() {
        $(".cart-count").text(cartCount);
        $(".favorites-count").text(favoritesCount);
    }

    // Cart Icon Click
    $(".fa-shopping-cart").click(function() {
        displayModal("cart");
    });

    // Favorites Icon Click
    $(".fa-heart").click(function() {
        displayModal("favorites");
    });

    


    
    
    
    
    // Order Form Submit
    $("#orderDetails").submit(function(e) {
        e.preventDefault();
        
        // Get order details
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();

        // Send order details to server
        // ...

        alert("Order placed successfully!");
        $("#orderForm").removeClass("show-modal");
    });

});







//place-order btn opend and close//
document.getElementById("place-order-btn").addEventListener("click", function() {
    var contactDetails = document.getElementById("contact-details");
    
    // Toggle display
    if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
});







//container scroll images
const duration = 10; // in seconds
const speed = 100; // in pixels

const imageContainer = document.querySelector('.image-container');

function scrollImages() {
  const containerHeight = imageContainer.offsetHeight;
  const totalHeight = imageContainer.scrollHeight;
  const distance = containerHeight / (duration * 60) * speed;
  
  let position = imageContainer.scrollTop;
  
  position += distance;
  if (position >= totalHeight) {
    position = 0;
  }
  
  imageContainer.scrollTop = position;
}

setInterval(scrollImages, 1000 / 30);



