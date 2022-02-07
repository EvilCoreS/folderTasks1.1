function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images){
    this.ID = ID
    this.getID = () => this.ID
    this.setID = (newID) => this.ID = newID

    this.name = name
    this.getName = () => this.name
    this.setName = (newName) => this.name = newName

    this.description = description
    this.getDescription = () => this.description
    this.setDescription = (newDescription) => this.description = newDescription

    this.price = parseFloat(price)
    this.getPrice = () => this.price
    this.setPrice = (newPrice) => this.price = parseFloat(newPrice)

    this.brand = brand
    this.getBrand = () => this.brand
    this.setBrand = (newBrand) => this.brand = newBrand

    this.sizes = sizes
    this.getSizes = () => this.sizes
    this.deleteSize = (key) => {for(let i = 0; i < this.sizes.length; i++){
        if (key === this.sizes[i]) {
            this.sizes.splice(i, 1)
            break
        }
    }}
    this.addSizes = (newSize) => this.sizes.splice(this.sizes.length, 0, newSize)

    this.activeSize = activeSize
    this.getActiveSize = () => this.activeSize
    this.setActiveSize = (newActiveSize) => this.activeSize = newActiveSize

    this.quantity = parseInt(quantity)
    this.getQuantity = () => this.quantity
    this.setQuantity = (newQuantity) => this.quantity = parseInt(newQuantity)

    this.date = new Date(date[0], date[1], date[2], date[3], date[4], date[5])
    this.getDate = () => this.date
    this.setDate = (newYear, newMonth, newDay, newHours, newMinutes, newSeconds) => this.date = new Date(newYear, newMonth, newDay, newHours, newMinutes, newSeconds)

    this.reviews = reviews
    this.addReview = (review) => this.reviews.splice(this.reviews.length, 0, new Reviews(review[0], review[1], review[2], review[3], review[4]) )
    this.getReviewByID = (key) => {for (let i = 0; i < this.reviews.length; i++){
        if (key === this.reviews[i]["ID"]) return this.reviews[i]
    }}

    this.getAverageRating = function (){
        let sumRating = 0, countRating = 0
        for (let i = 0; i < this.reviews.length; i++){
            for(let k of reviews[i]["rating"]){
                sumRating += k[1]
                countRating++
            }
        }
        return sumRating / countRating;
    }

    this.images = images
    this.getImages = () => this.images
    this.addImages = (image) => this.images.splice(this.images.length, 0, image)
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
let product1 = new Product("1", "T-shirt", "Green T-shirt", "49.50", "GUCCI",  ['XS', 'S', 'M', 'L', 'XL', 'XXL'], "L", "20", [2022, 0, 27, 2, 31, 30], reviews1, images1)
let product2 = new Product("2", "Cape", "Red Cape", "15.23", "Adidas", ['XS', 'S', 'M', 'L', 'XL', 'XXL'], "XL", "5", [2022, 0, 27, 4, 40, 0], reviews2, images2)
let products = [product1, product2]
function searchProducts(products, search){
    let count = []
    for (let i = 0, j = 0; i < products.length; i++){
        count[i] = []
        for (let k = 0; k < 3; k++){
            count[i][k] = 0
        }
    }
    for (let i = 0; i < products.length; i++){
        for (let j = 0, p = 0; j < products[i]["name"].length; j++){
            if (search[p] === products[i]["name"][j]){
                count[i][0]++
                if (search[p + 1] !== products[i]["name"][j + 1]){
                    break
                }
                p++
            }
        }
        for (let j = 0, p = 0; j < products[i]["description"].length; j++){
            if (search[p] === products[i]["description"][j]){
                count[i][1]++
                if (search[p + 1] !== products[i]["description"][j + 1]){
                    break
                }
                p++
            }
        }
        for (let j = 0, p = 0; j < products[i]["brand"].length; j++){
            if (search[p] === products[i]["brand"][j]){
                count[i][2]++
                if (search[p + 1] !== products[i]["brand"][j + 1]){
                    break
                }
                p++
            }
        }
    }
    let max = []
    for (let i = 0; i < count.length; i++){
        for (let k = 0; k < count[i].length; k++){
            if (max < count[i][k]){
                max = count[i][k]
            }
        }
    }
    let result = []
    for (let i = 0; i < count.length; i++){
        for (let k = 0; k < count[i].length; k++){
            if (count[i][k] === max) {
                result.splice(result.length, 0, products[i])
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