const records = require("../models/record-model");

exports.search = (startDate, endDate, minCount, maxCount) => {
    return records.aggregate([
        {
            $project: {
                "key": 1, "value": 1, "createdAt": 1, "totalCount": { "$sum": "$counts" }
            }
        },
        {
            $match: {
                "createdAt": { $gte: startDate, $lte: endDate },
                "totalCount": { $gt: minCount, $lt: maxCount }
            }
        }
    ]);
}