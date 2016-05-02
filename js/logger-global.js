import {
    createLogger as _createLogger
} from 'bunyan';

(GLOBAL || window || {}).__logger = _createLogger({
    name: 'isotropic'
});

export default __logger;
