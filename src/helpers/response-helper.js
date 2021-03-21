const { ERROR_RESPONSE } = require('../models/enums/response-error');

exports.success = (res, data) => {
    var payload = ERROR_RESPONSE.SUCCESS;
    payload = Object.assign(payload, data);
    return res.status(200).json(payload);
}

exports.clientError = (res, msg) => {
    let payload = ERROR_RESPONSE.CLIENT_ERROR;
    payload.msg = msg;
    return res.status(400).json(payload);
}

exports.notFound = (res) => {
    return res.status(404).json(ERROR_RESPONSE.NOT_FOUND);
}

exports.serverError = (res, err) => {
    return res.status(500).json(ERROR_RESPONSE.SERVER_ERROR);
}