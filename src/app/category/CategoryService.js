import HttpService from '../../http/HttpService'

export default class CategoryService extends HttpService {
  constructor () {
    super('categories')
  }
}
