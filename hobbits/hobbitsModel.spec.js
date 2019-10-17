const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')





it('should set testing env', () => {
    expect(process.env.DB_ENV).toBe('testing')
});



describe('hobbits model', () => {
    //beforeEach()
    //beforeAll()
    //afterAll 
    //afterEach 


    beforeEach(async () => {
        await db('hobbits').truncate()
    })


    // it('should set testing env', () => {
    //     expect(process.env.DB_ENV).toBe('testing')
    // });

    describe('insert', () => {
        it('should add hobbit to database', async () => {
            const records = await db('hobbits')
            expect(records).toHaveLength(0)
            
            await Hobbits.insert({name: 'sam'})

            const hobbit = await db('hobbits')
            expect(hobbit).toHaveLength(1)
        });
    });


    it('should add hobbit to database', async () => {
        
        let hobbit = await Hobbits.insert({name: 'sam'})
        expect(hobbit.name).toBe('sam')

        hobbit = await Hobbits.insert({name: 'frodo'})
        expect(hobbit.name).toBe('frodo')

        const hobbits = await db('hobbits')
        expect(hobbits).toHaveLength(2)
    });
});