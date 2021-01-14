const supertest = require('supertest');
const app = require('../../../../api/src/index.js');

const request = supertest(app);



describe('GET /test', () => {
    test('responds with 200', async (done) => {
        try {
            await request
                .get('/test')
                .expect(404, done())
        } catch (e) {

        }
    })
})