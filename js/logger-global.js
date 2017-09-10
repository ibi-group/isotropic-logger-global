import _Bunyan from 'bunyan';

(global || window || {}).__logger = _Bunyan.createLogger({
    name: 'isotropic'
});

export default __logger;
