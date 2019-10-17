const request = require('supertest')

const server = require('./server')




describe('GET /', () => {
    // should return http 200 ok
    it('should return 200 http status code', () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200)
        })
    })

    // should return json
    test('should return the JSON', async () => {
        const response = await request(server).get('/')
        expect(response.type).toMatch(/json/i)
    })

    test('should return the JSON using .then', () => {
        return request(server).get('/')
            .then(response => {
                expect(response.type).toMatch(/json/i)
            })
    })

    // should return an Object with an API property and value of 'up'
    it('should return { api: "up" }', async () => {
        const response = await request(server).get('/')

        expect(response.body).toEqual({api: 'up'})   //toStrictEqual expect(response.body.api).toBe('up')
        expect(response.body.api).toBe('up')
    });
})