var _ = require('underscore');
var Browser = require('zombie');
var browser = new Browser();
var products = require('../data/product.json');

const server = 'http://localhost:7777/';

describe('Product Project', function(){

  beforeEach(function(done) {
    browser.visit(server, done);
  });

  it('should have a title Product Project', function(done){
    browser.assert.text('title', 'Product Project');
    done();
  });

  it('should start with 11 products on page', function(done){
    browser.assert.elements('.product', 11);
    done();
  });

  it('should start with 11 images on page', function(done){
    browser.assert.elements('.product img', 11);
    done();
  });

  it('should have at dropdown menu with two types', function(done){
    browser.assert.elements('#type', 1);
    browser.assert.elements('#type > *', {atLeast: 2});
    done();
  });

  it('should have at least one input field', function(done){
    browser.assert.elements('#query', 1);
    done();
  });

  it('should have at least one button', function(done){
    browser.assert.elements('#search', 1);
    done();
  });

  it('should find four items when "iphone" searched', function(done){
    browser.assert.elements('.product', 11);
    browser.fill('#query', 'iphone');
    browser.click('#search');
    browser.assert.elements('.product', 4);
    done();
  });

  it('should find seven items when "samsung" searched', function(done){
    browser.assert.elements('.product', 11);
    browser.fill('#query', 'samsung');
    browser.click('#search');
    browser.assert.elements('.product', 7);
    done();
  });

  it('should find seven item when "gold" searched', function(done){
    browser.assert.elements('.product', 11);
    browser.fill('#query', 'gold');
    browser.click('#search');
    browser.assert.elements('.product', 7);
    done();
  });

});
