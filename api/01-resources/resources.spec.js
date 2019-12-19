
const testerLib = require('supertest')
const resources = require('./resources-router')
const RecourseFns = require('./resources-model')
const db = require('../../data/db-config')

describe('resources\' endpoints', function(){

   beforeEach(async () => {
       await db('tester').truncate();
   });

   //PRIMARY INSERT METHOD //Fails and passes
   describe('insert method', ()=> {
       it('adds a resource to the tester db', async () => {
            await RecourseFns.insert({name: 'solar panel'});

            const newResources = await db('tester');
           
            expect(newResources).toHaveLength(1);
       })
   })

    //PRIMARY POST
    // describe('resource creation', ()=>{
    //     it('should post a new resource with a name to tester DB', async () => {
    //         await testerLib(resources)
    //                 .post('/register')
    //                 .send({name: "wrench"})
    //                 .then(res => {
    //                     expect(res.body.id).toBe(1)
    //                 });
    //     });
    // });

     //PRIMARY GET
     //describe()

    //PRIMARY DELETE
});