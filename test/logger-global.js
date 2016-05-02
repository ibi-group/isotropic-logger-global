import '../js/logger-global.js';

import {
    describe,
    it
} from 'mocha';

import Bunyan from 'bunyan';

import {
    expect
} from 'chai';

describe('logger-global', () => {
    it('should represent a logger instance', () => {
        expect(__logger).to.be.an.instanceOf(Bunyan);
    });
});
