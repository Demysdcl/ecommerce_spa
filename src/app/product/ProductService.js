import HttpService from '../../http/HttpService'

export default class ProductService extends HttpService {
  constructor () {
    super('products')
  }
}
