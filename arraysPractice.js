//Once you complete a problem, open up Chrome and check the answer in the console.


var myArray = [10,20,30];

console.log(myArray);
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

  //Code Here
function first(arr){
 return arr[0];
}

console.log(first(myArray));
//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.


  //Code Here
  function last (myArr) {
    return myArr[2];
  }

  console.log(last(arr));
//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
function looper(myFam) {
  for(var i = 0; i <= myFam.length-1; i++ ) {
    alert(myFam[i]);
  }
}

looper(family);
//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.



  //Code Here
function reversedLooper(myLetters) {
  var b = [], counter = 0;
  for(var i = myLetters.length-1; i >= 0; i-= 1) {
    b[counter] = alert(myLetters[i]);
    counter += 1;
  }
  
    return b;

}

reversedLooper(letters);

//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
  function evenFinder(myNums) {
    var even = [];
    for (var i = 0; i < myNums.length; i++ ){
      if(myNums[i] % 2 === 0) {
        even.push(myNums[i]);
      }
      
    }
    return even;
  }
  
  console.log(evenFinder(nums));



  



// =============================================
// =============================================
// EXTRA PRACTICE PROBLEMS BELOW
// =============================================
// =============================================






//Next problem


var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//Write a function called divider that is given one argument, numbersArray.
//Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).



  //Code Here
  

function divider(arr){
  var evens = [];
  var odds = [];

  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      evens.push(arr[i]);
    }
    else if (!arr[i] % 2 === 0) {
      odds.push(arr[i])
    }

  }
  return [evens, odds];
}

divider(numbersArray);
console.log(divider(numbersArray));
//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here
function finder(arr){
  var myNew = getRandomArbitrary();
  if (arr.indexOf(myNew) !== -1 ) {
    return true;
  } else {
    return false;
  }
}
console.log(finder(numbers));


//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.

  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
*/

  //Code Here
function removeItem(myGroceryList, item){
  for (var i = 0; i < myGroceryList.length; i++){
    if(myGroceryList[i] === item){
      myGroceryList.splice(myGroceryList[i], 1);
    }
  }
  return myGroceryList;
}

console.log(removeItem(myGroceryList, 'chips'));

function addItem(myGroceryList, item) {
  var addThis = myGroceryList.indexOf(item);
  if (myGroceryList[addThis] !== item) {
    myGroceryList.push(item);
  }
  return myGroceryList
}

console.log(addItem(myGroceryList, 'Jerky'));


//removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
  function maker(){
    var myArray =[];
    for(var i = 1; myArray.length <= 214; i++) {
      myArray.push(i);
    }
    return myArray;
  }
  
  console.log(maker());


//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here

  function addTen(arr) {
    var emptyArr = [];
    for(var i = 0; i < arr.length; i++){
      emptyArr.push(parseInt(arr[i]) + 10);
    }
    return emptyArr;
  }
 
  // console.l2('Add another ten', addTen([1, '2', 3]));



//Next Problem



var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

  //Code Here
  function longer(param1, param2) {
    if (param1.length > param2.length){
      return param1
    } else {
      return param2;
    }
  }

  var longerArray = longer(arr1, arr2);
  console.log(longerArray);


/*
As a continuation of the previous problem, write another function called 'both'.

Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).

'both' should return a new array with the matching numbers found in both arr1 and arr2.

Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

  //Code Here
var bothTest = [1, 2, 3, 4, 5, 6, 7, 8];
var bothTest2 = [2, 4, 6, 8, 10, 12, 14];  
function both(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

console.log(both(bothTest, bothTest2));





//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here
  devMountainEmployees = [tyler, cahlan, ryan, colt];
  console.log(devMountainEmployees);

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
  // function breakDown(arr, removeItem){
    devMountainEmployees = arr.filter(function(employee){
      return employee !== removeItem;
    })
  // }
  
  // console.log("The Breakdown", breakDown(devMountainEmployees, cahlan));
  // breakDown(devMountainEmployees, cahlan);
    



//NEXT PROBLEM


/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here
var users = [];
/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/
user.push( {name: "Landon", email: "landonwjohnson", password: "ILoveCats", username: "CatGuy5"});
console.log(users);
//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

//Your Code Here

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

  //Code Here

//The activity we just did is very much how data works in 'the real world'.
