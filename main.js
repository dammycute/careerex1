// 1. Introduction of myself using different variables 
const name = "Damilola"
const age = 26
const nationality = "Nigerian"
const introduce = `My name is ${name}, I am ${age} years old and I am from ${nationality}`

// 2. Using uppercase and lowercase method on my favorite lyrics 
const lyrics = "Almond eyes, Beaming through the crowd like piercing bright blue lights. A glow like angels, girl, you had me hypnotized. I could never look away"
const uppercase = lyrics.toUpperCase()
const lowercase = lyrics.toLowerCase()

// 3. Reversing a word and logging it
const word = "JavaScript"
const reversedWord = word.split('').reverse().join('')
console.log(`Original word: ${word}`)
console.log(`Reversed word: ${reversedWord}`)

// 4. Declaring 3 prices and Calculating the total and showing with a message 
const Laptop = 320000
const Socket = 4000
const Wireless_Mouse = 5500
const total = Laptop + Socket + Wireless_Mouse
console.log(`Total price of your gadgets is: ₦${total}`)

// 5. Average of 5 test scores and displaying the result
const test1 = 80
const test2 = 75
const test3 = 90
const test4 = 85
const test5 = 78
const average = (test1 + test2 + test3 + test4 + test5) / 5
console.log(`The average of your test scores is: ${average}`)

// 6. An array of 5 favorite food and displaying the first and last item in the array 
const favoriteFoods = ["Beans", "Semo with Egusi", "Jollof Rice", "Bread and Egg", "Pasta"]
console.log(`The first item in the array is: ${favoriteFoods[0]}`)
console.log(`The last item in the array is: ${favoriteFoods[favoriteFoods.length - 1]}`)

// 7. Adding two more food to the Array, One at the back and one in the front of the array 
const newFood1 = "Fufu and Okra"
const newFood2 = "Amala and Abula"
favoriteFoods.unshift(newFood1)
favoriteFoods.push(newFood2)
console.log(favoriteFoods)

// 8. Arrays with 10 students name each
const jssOne = ["Alechenu Maria", "Adakole Benedicta", "Festus Ochanya", "Chibueze Victor", "Sunday Monday", "Ogunleye Gbeminiyi", "Adetunji James", "Rufus Nani", "Abdulwasia Ibrahim", "Sunday Joy",  ]
const jssTwo = ["Owoicho Justina", "Hammed Muhammed", "Iorkayor Glory", "Adamolekun Eniola", "Agbo Lawrence", "Ogunleye Nifemi", "Adetunji Micheal", "Oreofe Ayanfe", "Ibrahim Chatta", " Agbanaka Success",]
const jssThree = ["Adesina Adeleke", "Erudite Brain", "Gbolahan Osumare", "Adetunji Olaiya", "Ogunleye Babatunde", "Ogagu Chinyere ", "Chuwu Felix", "Alayande Akinkunmi", "Ayanteju Olaifa", "Adeleke Femi",]