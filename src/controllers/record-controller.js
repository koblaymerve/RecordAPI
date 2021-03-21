const { search } = require("../services/record-service");
const { clientError, success, serverError } = require("../helpers/response-helper");
const { validationResult } = require('express-validator');

exports.getRecords = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return clientError(res, errors.array());
        }

        search(new Date(req.body.startDate), new Date(req.body.endDate), req.body.minCount, req.body.maxCount)
            .then((records) => {
                let result = {
                    records: []
                };

                if (records !== null && records.length > 0) {
                    records.forEach((record) => {
                        result.records.push({
                            key: record.key,
                            createdAt: record.createdAt,
                            totalCount: record.totalCount
                        });
                    });
                }
                return success(res, result);
            })
            .catch((err) => {
                console.error(err);
                return serverError(res, err);
            });
    } catch (err) {
        console.error(err);
        return serverError(res, err);
    }
}