import Category from '../category/Category'
import moment from 'moment'

export default class Product {
  contructor () {}

  constructor (description = '', image = '', purchaseDate = 0, price = 0.0, category = new Category(''), origin, priceUS = 0.0) {
    this.description = description
    this.image = image
    this.price = price
    this.priceUS = priceUS
    this.purchaseDate = purchaseDate
    this.category = category
  }

  formatedDate () {
    let date = new Date(this.purchaseDate)
    return moment(date).format('DD/MM/YYYY')
  }

  createProduct () {
    return new Product('', '', 0, 0, Category(), '', 0)
  }
}
