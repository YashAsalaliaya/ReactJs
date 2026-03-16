// import Card from "./components/card";
import Card_1 from "./Components/Card_1";
import Product from "./components/Product";

function App() {

//   const data = [
//   {
//     "photo": "https://randomuser.me/api/portraits/men/11.jpg",
//     "name": "Aarav Patel",
//     "username": "aarav_dev",
//     "bio": "Frontend developer who loves JavaScript and UI design.",
//     "points": 1250,
//     "friends": 210,
//     "joinedAt": "March 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/12.jpg",
//     "name": "Riya Shah",
//     "username": "riya_codes",
//     "bio": "Passionate about React and building modern web apps.",
//     "points": 980,
//     "friends": 180,
//     "joinedAt": "July 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/13.jpg",
//     "name": "Kunal Mehta",
//     "username": "kunal_js",
//     "bio": "JavaScript enthusiast and open source contributor.",
//     "points": 1500,
//     "friends": 320,
//     "joinedAt": "January 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/14.jpg",
//     "name": "Ananya Desai",
//     "username": "ananya_ui",
//     "bio": "UI/UX designer who enjoys creating beautiful interfaces.",
//     "points": 870,
//     "friends": 145,
//     "joinedAt": "May 2024"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/15.jpg",
//     "name": "Dev Joshi",
//     "username": "dev_builder",
//     "bio": "Full stack developer learning new technologies daily.",
//     "points": 1340,
//     "friends": 260,
//     "joinedAt": "September 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/16.jpg",
//     "name": "Priya Trivedi",
//     "username": "priya_design",
//     "bio": "Creative designer and CSS lover.",
//     "points": 760,
//     "friends": 120,
//     "joinedAt": "December 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/17.jpg",
//     "name": "Rahul Verma",
//     "username": "rahul_codes",
//     "bio": "Backend developer focused on Node.js and APIs.",
//     "points": 1680,
//     "friends": 410,
//     "joinedAt": "August 2020"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/18.jpg",
//     "name": "Sneha Kapoor",
//     "username": "sneha_dev",
//     "bio": "Tech blogger and JavaScript mentor.",
//     "points": 1120,
//     "friends": 230,
//     "joinedAt": "April 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/19.jpg",
//     "name": "Yash Sharma",
//     "username": "yash_coder",
//     "bio": "Coding enthusiast who loves solving problems.",
//     "points": 940,
//     "friends": 175,
//     "joinedAt": "November 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/20.jpg",
//     "name": "Neha Singh",
//     "username": "neha_uiux",
//     "bio": "UI/UX designer building user-friendly products.",
//     "points": 1025,
//     "friends": 200,
//     "joinedAt": "February 2021"
//   }
// ]
// const icecream = [
//   {
//     "id": 1,
//     "photo": "https://delightfuladventures.com/wp-content/uploads/2024/09/vegan-vanilla-ice-cream-recipe.jpg",
//     "title": "Vanilla Ice Cream",
//     "tags": ["Vegan", "Gluten Free", "Organic"],
//     "description": "Classic creamy vanilla ice cream made with natural vanilla beans.",
//     "toppings": ["Choco chips", "Nuts"],
//     "price": 10.00,
//     "delivery": 2
//   },
//   {
//     "id": 2,
//     "photo": "https://i.pinimg.com/736x/27/81/3c/27813c5a5ee1a068ac9ec470ba22ca52.jpg",
//     "title": "Chocolate Ice Cream",
//     "tags": ["Organic", "Dairy"],
//     "description": "Rich chocolate ice cream with deep cocoa flavor.",
//     "toppings": ["Chocolate syrup", "Brownie bits"],
//     "price": 11.50,
//     "delivery": 2
//   },
//   {
//     "id": 3,
//     "photo": "https://www.recipetineats.com/tachyon/2018/07/Strawberry-Ice-Cream-No-Churn_3b.jpg",
//     "title": "Strawberry Ice Cream",
//     "tags": ["Gluten", "Fresh Fruit"],
//     "description": "Sweet made with real strawberries.",
//     "toppings": ["Strawberry", "Whipped cream"],
//     "price": 9.75,
//     "delivery": 2
//   },
//   {
//     "id": 4,
//     "photo": "https://images.unsplash.com/photo-1570197788417-0e82375c9371",
//     "title": "Mango Ice Cream",
//     "tags": ["Organic", "Seasonal"],
//     "description": " Made without an ice cream maker, all you need are mangoes, condensed milk and cream to make this homemade.",
//     "toppings": ["Mango cubes", "Honey"],
//     "price": 10.25,
//     "delivery": 2
//   },
//   {
//     "id": 5,
//     "photo": "https://images.unsplash.com/photo-1560008581-09826d1de69e",
//     "title": "Butterscotch Ice Cream",
//     "tags": ["Classic"],
//     "description": "Creamy butterscotch ice cream with crunchy caramel bits.",
//     "toppings": ["Caramel syrup", "Cashews"],
//     "price": 10.50,
//     "delivery": 2
//   },
//   {
//     "id": 6,
//     "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtKAkNr-vD5fJMVCnm-6Bu1IBf4z2VLEw3w&s",
//     "title": "Pistachio Ice Cream",
//     "tags": ["Premium", "Organic"],
//     "description": "Nutty pistachio flavored ice cream with roasted pistachios.",
//     "toppings": ["Pistachio nuts", "Honey drizzle"],
//     "price": 12.00,
//     "delivery": 2
//   },
//   {
//     "id": 7,
//     "photo": "https://images.unsplash.com/photo-1551024601-bec78aea704b",
//     "title": "Cookies & Cream",
//     "tags": ["Popular", "Classic"],
//     "description": "Vanilla ice-cream mixed with crunchy cookie pieces.",
//     "toppings": ["Oreo crumbs", "Chocolate syrup"],
//     "price": 11.00,
//     "delivery": 2
//   },
//  {
//     "id": 8,
//     "photo": "https://hips.hearstapps.com/vidthumb/images/delish-blueberry-no-churn-ice-cream-still002-1530884427.jpg?crop=0.526xw:0.934xh;0.220xw,0.0199xh&resize=1200:*",
//     "title": "Blueberry Ice Cream",
//     "tags": ["Fruit", "Gluten Free"],
//     "description": "Smooth blueberry ice cream with fresh berry taste.",
//     "toppings": ["Blueberry sauce", "Mint leaves"],
//     "price": 10.75,
//     "delivery": 2
//   },
//   {
//     "id": 9,
//     "photo": "https://butternutbakeryblog.com/wp-content/uploads/2023/07/no-churn-vegan-cookie-dough-ice-cream.jpg",
//     "title": "Coffee Ice Cream",
//     "tags": ["Premium", "Organic"],
//     "description": "Creamy coffee flavored ice cream for coffee lovers.",
//     "toppings": ["Chocolate beans", "Caramel drizzle"],
//     "price": 11.25,
//     "delivery": 2
//   },
//   {
//     "id": 10,
//     "photo": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mint-Chip-Ice-Cream_EXPS_TOHcom24_15301_DR_06_25_18b.jpg",
//     "title": "Mint Chocolate Chip",
//     "tags": ["Fresh", "Gluten Free"],
//     "description": "Cool mint ice cream with crunchy chocolate chips.",
//     "toppings": ["Chocolate chips", "Mint leaves"],
//     "price": 10.80,
//     "delivery": 2
//   }
// ]
const abc = [
{
  id:1,
  photo:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60",
  name:"Nike Air Force 1",
  tagline:"Own the Airforce",
  description:"Classic basketball sneaker with durable leather.",
  price:111
},
{
  id:2,
  photo:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60",
  name:"Air Jordan Retro",
  tagline:"Jump Higher",
  description:"Iconic basketball sneaker with premium comfort.",
  price:150
},
{
  id:3,
  photo:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=60",
  name:"Nike Dunk Low",
  tagline:"Street Style",
  description:"Retro basketball design loved by sneaker fans.",
  price:120
},
{
  id:4,
  photo:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=60",
  name:"Nike Air Max",
  tagline:"Maximum Comfort",
  description:"Legendary Air Max cushioning.",
  price:140
},
{
  id:5,
  photo:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
  name:"Nike Blazer Mid",
  tagline:"Vintage Style",
  description:"Old-school basketball design.",
  price:130
},
{
  id:6,
  photo:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
  name:"Nike Air Max 270",
  tagline:"Big Air",
  description:"Bold sneaker with the tallest Air unit.",
  price:160
},
{
  id:7,
  photo:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=60",
  name:"Nike React Infinity",
  tagline:"Run Smooth",
  description:"Responsive running shoe.",
  price:155
},
{
  id:8,
  photo:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=500&q=60",
  name:"Nike Pegasus",
  tagline:"Run Faster",
  description:"Lightweight running shoe.",
  price:145
},
{
  id:9,
  photo:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=500&q=60",
  name:"Nike Vaporfly",
  tagline:"Speed Runner",
  description:"Elite racing shoe built for speed.",
  price:200
},
{
  id:10,
  photo:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=60",
  name:"Nike Court Vision",
  tagline:"Court Style",
  description:"Basketball inspired sneaker.",
  price:110
}
];
  return (
    <>
      {/* <section className="flex flex-wrap justify-center" >
        
       {data.map(function(user){
          console.log(user);
          return <Card data={user}/>;
       })}
      </section> */}
      {/* {
        <section className="flex flex-wrap justify-center gap-10" >
        
       {icecream.map(function(user1){
          console.log(user1);
          return <Product icecream={user1}/>;
       })}
  
      </section> 
      } */}
      {
        <section className="flex flex-wrap justify-center gap-10">

            {abc.map((item)=>(
              <Card_1 key={item.id} data={item}/>
            ))}
       </section>
      }
       

    </>
  )
};

export default App;