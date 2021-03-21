const supertest = require('supertest')
const app = require('../../app')
const mongoose = require('mongoose');

describe('Get Records', () => {
    it('should get record', async (done) => {
        const res = await supertest(app)
            .post('/records')
            .send({
                startDate: "2015-01-26",
                endDate: "2015-02-02",
                minCount: 309,
                maxCount: 500
            })
            .expect(200);

        expect(res.body).toHaveProperty('code')
        expect(res.body.code).toEqual(0)
        done();

    });
})
