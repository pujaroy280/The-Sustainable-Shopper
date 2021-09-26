    var submitBtn = $('.submit-button')
    
  var container = $('.comment-container')

   submitBtn.on("click", commentList)

    function commentList() {

        var comment = $('.comment-types').val()

      console.log(comment)

        container.append(`
         <div>
           <p> Your comment: ${comment}!</p>

           <img class = "card" src = "https://i.pinimg.com/originals/ac/d2/46/acd246695150e1b1a81bfc641ba76fb2.gif">
          
         </div>`)

           event.preventDefault()
    }

   container.on("click", deleteCard);

    function deleteCard() {
      
    if (event.target.className==="card"){
        
      event.target.parentNode.remove()
      }
      
}
      
var quiz_outcome = [
  { name: "Faithfull The Brand",
    description: "sources and produces their products in Bali, Indonesia, by using handmade techniques such as hand-dying and hand printing, which we're sure you'll love!",
  },
  { name: "Thredup",
    description: "is an online consignment and thrift store where you can buy and sell high-quality secondhand clothes for discounted prices! Sounds like a steal!",
  },
  { name: "Selfless by Hyram",
    description: "was created by Hyram Yarbro, a skincare influncer. Every product purchased from Selfless directly supports the company's partners in their work to fight the climate and water crisis.",
  },
  { name: "Lush",
    description: "is devoted to creating fresh, ethically-sourced, cruelty-free, vegetarian, handmade, low-waste and effective products. With intricately detailed and amazingly scented products, we're sure you'll love Lush!",
  },
  { name: "Kellogs",
    description: "is known for many of their products, including cereal, protein bars, potato chips, biscuits and beverages! They have many agricultural projects to help support farmers, and 76% of their packaging is recyclable globally. ",
  }
]
console.log(quiz_outcome[0].description
);

//Access the empty results container
var resultText = $(".results-container");
//Access the buttom
var submitQuiz = $(".submit-quiz");

//Event listener 
submitQuiz.on("click", getResult);

//Function run when the button is clicked
function getResult() {  
  var total = 0;  
  
  //Creates a loop to go through each question (i <= 3 because there are 3 questions if you have more questions, change this number)
  for (var i = 1; i <= 3; i++) {
    //Conditional that checks the class of each option for each question and then adds a value to the total depending on the option that was selected
    if ($(`.Q${i}OP1:checked`).val()) {
      total += 0;
    } else if ($(`.Q${i}OP2:checked`).val()) {
      total += 1;
    } else if ($(`.Q${i}OP3:checked`).val()) {
      total += 2;
    } else if ($(`.Q${i}OP4:checked`).val()) {
      total += 3;
    } else if ($(`.Q${i}OP5:checked`).val()) {
      total += 4;
    }
  }
  
  // divide by number of questions
  var result = (total / 3)
  //rounds total to a whole number
  var round = Math.round(result)

  //checks the numbers calculated
  console.log(total)
  console.log(result)
  console.log(round)

  //use the number as an index to select the results from the results Object (the very first thing we coded at the top)
  resultText.append(`Based on your answers, we think ${quiz_outcome[round].name} is the company for you! This company ${quiz_outcome[round].description}`);
}