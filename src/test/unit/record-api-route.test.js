const request = require('supertest')
const app = require('../../app')
const mongoose = require('mongoose');

describe('Route Path', () => {
    it('should get not found error', async (done) => {
        await request(app)
            .post('/record')
            .send({
                startDate: "2015-01-26",
                endDate: "2015-02-02",
                minCount: 309,
                maxCount: 500
            }).
            expect(404);
        done();
    })

    it('should get not found error', async (done) => {
        await request(app)
            .get('/records')
            .send({
                startDate: "2015-01-26",
                endDate: "2015-02-02",
                minCount: 309,
                maxCount: 500
            }).
            expect(404);
        done();
    })

    it('should get bad request', async (done) => {
        await request(app)
            .post('/records')
            .send({
                startDate: "2015-01-26",
                endDate: "2015-02-02",
                minCount: 309
            }).
            expect(400);
        done();
    })

})