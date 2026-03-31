
const menuCategories = [
    {title: "Burgers", image:"/images/burger-image.jpg",},
    {title: "Pastries", image:"/images/pizza-image.jfif"},
    {title: "Spaghetti", image:"/images/meatballs.webp"},
    {title: "Breakfast", image:"/images/breakfast.webp"},
    {title: "Drinks", image:"/images/Beverages.jpg"},
]

const categoryData = {
    "Burgers": [
        {name: "Cheeseburger", price: "$5.99", img: "/images/cheeseburger.jpg"},
        {name: "Bacon Burger", price: "$6.99", img: "/images/bacon-burger.jpg"},
        {name: "Veggie Burger", price: "$5.49", img: "/images/veggie-burger.jpg"},
        {name: "Double Burger", price: "$7.99", img: "/images/double-burger.jpg"}
    ],
    "Pastries": [
        {name: "buns", price: "$2.99", img: "/images/buns.jpg"},
        {name: "Panetone", price: "$3.49", img: "/images/panetone.jpg"},
        {name: "Croissant", price: "$2.49", img: "/images/croissant.jpg"},
        {name: "Bread", price: "$3.99", img: "/images/bread.jpg"}
    ],
    "Spaghetti": [
        {name: "Spaghetti Bolognese", price: "$8.99", img: "/images/bolognese.jpg"},
        {name: "Spaghetti Carbonara", price: "$9.49", img: "/images/carbonara.jpg"},
        {name: "Spaghetti Aglio e Olio", price: "$7.99", img: "/images/aglioolio.jpg.avif"},
        {name: "Spaghetti Pesto", price: "$8.49", img: "/images/spaghetti-pesto.jpg"}
    ],
    "Breakfast": [
        {name: "Pancakes", price: "$4.99", img: "/images/pancakes.jpg"},
        {name: "Omelette", price: "$5.49", img: "/images/omelette.jpg"},
        {name: "French Toast", price: "$4.49", img: "/images/french-toast.jpg"},
        {name: "Bacon and Eggs", price: "$6.99", img: "/images/bacon-eggs.jpg"}
    ],
    "Drinks": [
        {name: "Coca-Cola", price: "$1.99", img: "/images/cola.jpg"},
        {name: "Lemonade", price: "$2.49", img: "/images/lemonade.jpg"},
        {name: "Iced Tea", price: "$2.99", img: "/images/iced-tea.jpg"},
        {name: "Coffee", price: "$1.49", img: "/images/coffee.jpg"},
        {name: "Orange Juice", price: "$2.99", img: "/images/orange-juice.jpg"}
    ]

}

export { menuCategories, categoryData };