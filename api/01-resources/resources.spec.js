
const testerLib = require('supertest')
const server = require('../00-server/server')
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
       });

    //    it('returns JSON', async () => {




    //    })
   });

   //PRIMARY REMOVE METHOD //Fails and passes
   describe('remove method', () => {
       it('removes a resource to the tester db', async () => {
           await RecourseFns.insert({name: "rachet"});
           await RecourseFns.insert({name: "welder"});
           await RecourseFns.insert({name: "scanner"});
           await RecourseFns.remove({id: 3});

           const newResources = await db('tester');

           expect(newResources).toHaveLength(2)
       });

    //    it('returns JSON', async () => {



        
    // })
   });

    //PRIMARY POST
    describe('resource creation', ()=>{
        it('should post a new resource with a name to tester DB',  () => {
            return testerLib(resources)
                    .post('/register')
                    .send({name: "wrench"})
                    .then(res => {
                        expect(res.body.name).toMatch('wrench')
                    });
        });
    });

     //PRIMARY GET MODEL //Fail and pass
     describe('gets all resources', () => {
        it('gets all using model', async () => {
            await RecourseFns.insert({name: "rachet"});
            await RecourseFns.insert({name: "welder"});
            await RecourseFns.insert({name: "scanner"});
 
            const newResources = await db('tester');
 
            expect(newResources).toHaveLength(3)
        });
     })

     //PRIMARY GET ENDPOINT
     describe('get /', () => {
         it('gets all using endpoint', async () => {
            await RecourseFns.insert({name: "rachet"});
            await RecourseFns.insert({name: "welder"});
            await RecourseFns.insert({name: "scanner"});
            
           await testerLib(resources)
             .get('/')
             .then(res => {
                 expect(res.status).toBe(200)
             })
         })
     })

});