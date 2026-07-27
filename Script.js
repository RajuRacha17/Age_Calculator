//getting the button element from HTML with its id "btn"
const button = document.getAnimations("btn")

//getting the date of birth input field from the user its id "value"
const birthdayInput = document.getElementById("birthday")

//getting the element where the result will be displayed to the user its id "result"
const result = document.getElementById("result")


// creating a function named with calculateAge,this function will executed when the button is clicked
function calculateAge() {
    //get the value entered by the user in input filed
    const birthDate = birthdayInput.value;

    //checking if the input filed is empty ,then display something
    if(birthDate ===""){
        //then showing a alert pop message
        alert("Please Enter Your Date Of Birth");

       //Stopping the function here...
       return;

    }


    //creating an object of current date and time
    const today = new Date;
    
    //getting the user's Date of Birth through input...
    const userBirthday = new Date(birthDate)

    //Calculating the basic age i.e 2026-2020..
    let age = today.getFullYear() - userBirthday.getFullYear()

    //now calculating the current month and user birth month difference
    const monthDifference = today.getMonth - userBirthday.getMonth()

    //checking that if the birthday is not yet came this year
    if (
        //if still the birth month is remaining
       (monthDifference < 0 || 

        //if the birth month is current month 
        //but if it's still reamining
        (monthDifference === 0 && 
        today.getDate() < userBirthday.getDate())

        )
    ) 
    
    {// Reduce age by 1
        age--;
    
    }
    
    //getting result of age via text on web 
    //ex- your age is 21 years

     result.innerText= "Your age is " +  age  + " years.."
     

}

// adding the click event button ,, user get the required data when clicked on the button
btn.addEventListener("click", calculateAge)