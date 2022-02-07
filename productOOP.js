class Product{
    constructor(ID, name, description, price, brand, quantity, date, reviews, images){
        this.ID = ID
        this.name = name
        this.description = description
        this.price = parseFloat(price)
        this.brand = brand
        this.quantity = parseInt(quantity)
        this.date = new Date(date[0], date[1], date[2], date[3], date[4], date[5])
        this.reviews = reviews
        this.images = images
    }

    getID = () => this.ID
    setID = (newID) => this.ID = newID


    getName = () => this.name
    setName = (newName) => this.name = newName


    getDescription = () => this.description
    setDescription = (newDescription) => this.description = newDescription


    getPrice = () => this.price
    setPrice = (newPrice) => this.price = parseFloat(newPrice)

    getBrand = () => this.brand
    setBrand = (newBrand) => this.brand = newBrand


    getQuantity = () => this.quantity
    setQuantity = (newQuantity) => this.quantity = parseInt(newQuantity)

    getDate = () => this.date
    setDate = (newYear, newMonth, newDay, newHours, newMinutes, newSeconds) => this.date = new Date(newYear, newMonth, newDay, newHours, newMinutes, newSeconds)


    addReview = (review) => this.reviews.splice(this.reviews.length, 0, new Reviews(review[0], review[1], review[2], review[3], review[4]) )
    getReviewByID = (key) => {for (let i = 0; i < this.reviews.length; i++){
        if (key === this.reviews[i]["ID"]) return this.reviews[i]
    }}

    getAverageRating = function (){
        let sumRating = 0, countRating = 0
        for (let i = 0; i < this.reviews.length; i++){
            for(let k of this.reviews[i]["rating"]){
                sumRating += k[1]
                countRating++
            }
        }
        return sumRating / countRating;
    }

    getImages = () => this.images
    addImages = (image) => this.images.splice(this.images.length, 0, image)

    getFullInformation = () => {
        let str = ""
        for (let i in this){
            if (!(this[i] instanceof Function)){
                str += `${i}: ${this[i]}\n`
            }
        }
        return str;
    }

    getPriceForQuantity = (int) => {
        return (this.price * int);
    }

    getUniversal = function (name, args){
        if (!args){
            for (let i in this) {
                if (name === i){
                    return this[name].call()
                }
                if (name === "getAverageRating"){
                    return this.getAverageRating()
                }
            }
        }
        else {
            for (let i in this) {
                if (name === i){
                    if (name === "getReviewByID"){
                        return this.getReviewByID(args)
                    }
                    if (name === "addReview"){
                        return this.addReview(args)
                    }
                    if (typeof args === 'string') {
                        this[name].call(name, args)
                        break
                    }
                    if (Array.isArray(args)){
                        this[name].apply(name, args)
                        break
                    }
                }
            }
        }
    }
}

class Clothes extends Product{
    constructor(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images, material, color) {
        super(ID, name, description, price, brand, quantity, date, reviews, images)
        this.sizes = sizes
        this.activeSize = activeSize
        this.material = material
        this.color = color
    }
    getSizes = () => this.sizes
    deleteSize = (key) => {for(let i = 0; i < this.sizes.length; i++){
        if (key === this.sizes[i]) {
            this.sizes.splice(i, 1)
            break
        }
    }}
    addSizes = (newSize) => this.sizes.splice(this.sizes.length, 0, newSize)

    getActiveSize = () => this.activeSize
    setActiveSize = (newActiveSize) => this.activeSize = newActiveSize

    getMaterial = () => this.material
    setMaterial = (newMaterial) => this.material = newMaterial

    getColor = () => this.color
    setColor = (newColor) => this.color = newColor
}

class Electronics extends Product{
    constructor(ID, name, description, price, brand, quantity, date, reviews, images, warranty, power) {
        super(ID, name, description, price, brand, quantity, date, reviews, images)
        this.warranty = Number(warranty)
        this.power = Number(power)
    }

    getWarranty = () => this.warranty
    setWarranty = (newWarranty) => this.warranty = newWarranty

    getPower = () => this.power
    setPower = (newPower) => this.power = newPower
}

function Reviews(ID, author, date, comment, rating){
    this.ID = ID
    this.author = author
    this.date = new Date(date[0], date[1], date[2], date[3], date[4], date[5])
    this.comment = comment
    this.rating = new Map([["service", rating[0]], ["price", rating[1]], ["value", rating[2]], ["quality", rating[3]]])
}

let images1 = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
let images2 = ["image1.jpg", "image2.jpg", "image3.jpg"]
let review1 = ["1", "John", [2022, 0, 27, 2, 31, 12], "Good", [4, 5, 5, 5]]
let review2 = ["2", "Daniel", [2022, 0, 28, 14, 13, 0], "Bad", [1, 1, 1, 1]]
let review3 = ["3", "Viktor", [2022, 0, 29, 6, 44, 53], "Not Bad", [3, 4, 3, 3]]
let reviews1 = [
    (new Reviews(review1[0], review1[1], review1[2], review1[3], review1[4])),
    (new Reviews(review2[0], review2[1], review2[2], review2[3], review2[4])),
    (new Reviews(review3[0], review3[1], review3[2], review3[3], review3[4]))
]
review1 = ["1", "Vlad", [2022, 0, 27, 4, 43, 2], "Trash", [0, 0, 0, 0]]
review2 = ["2", "Anton", [2022, 0, 27, 4, 44, 32], "Good", [4, 5, 5, 5]]
review3 = ["3", "Alex", [2022, 0, 27, 4, 44, 50], "Perfect", [5, 5, 5, 5]]
let review4 = ["4", "Steve", [2022, 0, 27, 4, 45, 0], "Bad", [1, 1, 2, 3]]
let reviews2 = [
    (new Reviews(review1[0], review1[1], review1[2], review1[3], review1[4])),
    (new Reviews(review2[0], review2[1], review2[2], review2[3], review2[4])),
    (new Reviews(review3[0], review3[1], review3[2], review3[3], review3[4])),
    (new Reviews(review4[0], review4[1], review4[2], review4[3], review4[4]))
]
let product1 = new Clothes("1", "T-shirt", "Green T-shirt", "49.50", "GUCCI",  ['XS', 'S', 'M', 'L', 'XL', 'XXL'], "L", "20", [2022, 0, 27, 2, 31, 30], reviews1, images1, "Cotton", "Green")
let product2 = new Electronics("2", "Cape", "Red Cape", "15.23", "Adidas", "5", [2022, 0, 27, 4, 40, 0], reviews2, images2, 50, 100)
let products = [product1, product2]
function searchProducts(products, search){
    let result = [], stringProducts = []
    for (let i = 0; i < products.length; i++){
        let temp = []
        for (let k in products[i]){
            if (typeof products[i][k] === 'string'){
                temp.splice(temp.length, 0, products[i][k])
            }
        }
        stringProducts.push(temp)
    }
    for (let i = 0; i < stringProducts.length; i++){
        for (let k = 0; k < stringProducts[i].length; k++){
            if (stringProducts[i][k].includes(search)){
                result.push(products[i])
                break
            }
        }
    }
    return result;
}
function sortProducts(products, sortRule){
    for (let j = products.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (products[i][sortRule] > products[i + 1][sortRule]) {
                let temp = products[i];
                products[i] = products[i + 1];
                products[i + 1] = temp;
            }
        }
    }
    return products;
}