const faker = require('faker');
const { zh_CN } = require('faker/lib/locales');

  class ProductService {

    constructor() {
      this.products = [];
      this.generate();
    }


    generate() {
      const limit = 100;
      for (let i = 0; i < limit; i++){
        this.products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(),10),
          image: faker.image.imageUrl(),
        });
      }
    }

    async create( data ) {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.products.push( newProduct );
      return newProduct
    }

    find() {
      return new Promise(( resolve, reject ) => {
        setTimeout(() => {
          resolve(this.products);
        },4000);
      })
      // return this.products;
    }

    async findOne(id) {
      return this.products.find( item => item.id === id );
    }

    async update(id, changes) {
      const index = this.products.findIndex( item => item.id === id );
      if ( index === -1 ) {
        throw new Error('Sorry, we can not found the product');
      }
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }

    async delete(id) {
      const index = this.products.findIndex( item => item.id === id );
      if( id === -1 ){
        throw new Error('Product no found');
      }
      this.products.splice( index, 1 );
      return id
    }

  }

  module.exports = ProductService;
