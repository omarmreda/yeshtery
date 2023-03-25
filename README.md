# Yeshtery Task developed by Omar Reda

## Table of Contents

1- Running project  
2-Project Description  
3- Feautres.

### Running Project

You can run the project by command:  
`npm install`  
Followed by:  
`npm start`

### Project Description

This project is a task submitted to YesPays Co  
Kindly find below project implementation pictures:
![Project](/public/images/project.png 'My Image')  
As Mentioned in the requirments of the task Add to cart button functionality is working ,by clicking the button the number of the items in the cart increaed by 1 each time it is clicked.  
The data is passed as a props to the products in similar products section as no API was provided with the task.  
The cart quantity updates and the total price in the cart is updated also.  
Kindly Find below Cart Implementation image.  
![Cart](/public/images/cart-project.png 'My Image')

Lazy loading is applied to similar products section I used simple div as a fallback.

Similar Products section contains 7 items 4 are shown and 3 overflow scroll apear by moving the bar under the items.

Favourite Icon is replaced with brand Item

gray filter is made on the page when cart icon is clicked and scrolling through page is disabled

note : There was an error with the product main image so I replaced it with another provided image.

note : The implementation isnot responsive on mobile screen as mobile screen design was not provided.

### feautres

The project features that is working as mentioned in the requirements is add to cart button.  
Two cases of cart if the cart is empty empty cart message is shown.  
If there is products .Products is shown.  
Two colors are used as a variables in scss as mentioned.  
No hooks nor Redux was used.  
Popup message apear when item is added to cart for 2 seconds.

#### Copywrights

&copy; Omar Reda
