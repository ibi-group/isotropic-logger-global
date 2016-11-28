import {
    createLogger as _createLogger
} from 'bunyan';

(global || window || {}).__logger = _createLogger({
    name: 'isotropic'
});

export default __logger;
