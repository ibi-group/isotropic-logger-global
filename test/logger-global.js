import '../js/logger-global.js';
import _Bunyan from 'bunyan';
import _chai from 'chai';
import _mocha from 'mocha';

_mocha.describe('logger-global', () => {
    _mocha.it('should represent a logger instance', () => {
        _chai.expect(__logger).to.be.an.instanceOf(_Bunyan);
    });
});
