import Category from '../category/Category'

export default class Product {
  constructor (description = '', image = '', purchaseDate = 0, price = 0.0, category = Category(), origin, priceUS = 0.0) {
    this.description = description
    this.image = image
    this.price = price
    this.priceUS = priceUS
    this.purchaseDate = new Date(purchaseDate)
    this.category = category
  }
}
