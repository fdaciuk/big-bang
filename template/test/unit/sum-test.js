'use strict';

let expect = require('chai').expect;
let sum = require('../modules/sum');

describe('#SUM', () => {
	it('Sum 1 + 1 = 2', () => {
		expect(sum(1, 1)).to.be.equal(2);
	});
});
