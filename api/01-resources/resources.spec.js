
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
           await RecourseFns.remove(3);

           const newResources = await db('tester');

           expect(newResources).toHaveLength(2)
       });

    //    it('returns JSON', async () => {



        
    // })
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
     });


    //PRIMARY POST ENDPOINT //Fail pass
    describe('resource creation', ()=>{
        it('should post a new resource with a name to tester DB',  () => {
            return testerLib(server)
                    .post('/api/resources/register')
                    .send({name: "wrench"})
                    .then(res => {
                        expect(res.body.name).toMatch('wrench')
                    });
        });

        it('should post a new resource to tester DB',  () => { //X'd
            return testerLib(server)
                    .post('/api/resources/register')
                    .send({name: "wrench"})
                    .then(res => {
                        expect(res.status).toBe(201)
                    });
        });
    });

    
     
   

     //PRIMARY GET ENDPOINT //Fail and pass
     describe('get /', () => {
         it('gets all using endpoint', async () => {
            await RecourseFns.insert({name: "rachet"});
            await RecourseFns.insert({name: "welder"});
            await RecourseFns.insert({name: "scanner"});

           await testerLib(server)
             .get('/api/resources/')
             .then(res => {
                 expect(res.status).toBe(200)
             });
         });


         it('gets all using endpoint', async () => { //X'd
            await RecourseFns.insert({name: "rachet"});
            await RecourseFns.insert({name: "welder"});
            await RecourseFns.insert({name: "scanner"});

           await testerLib(server)
             .get('/api/resources/')
             .then(res => {
                 expect(Array.isArray(res.body)).toBe(true)
             });
         });
     });


    //PRIMARY DELETE ENDPOINT //Fail and pass
     describe('delete /:id', () => {
            it('gets all using endpoint', async () => {
               await RecourseFns.insert({name: "rachet"});
               await RecourseFns.insert({name: "welder"});
               await RecourseFns.insert({name: "scanner"});
   
              await testerLib(server)
                .delete('/api/resources/1')
                .then(res => {
                    expect(res.body).toBe(1)
                });
            });

            it('gets all using endpoint', async () => { //X'd
                await RecourseFns.insert({name: "rachet"});
                await RecourseFns.insert({name: "welder"});
                await RecourseFns.insert({name: "scanner"});
    
               await testerLib(server)
                 .delete('/api/resources/1')
                 .then(res => {
                     expect(res.status).toBe(200)
                 });
             });

        });

            //PRIMARY UPDATE ENDPOINT //Fail and pass
     describe('update /:id', () => {
        it('gets all using endpoint', async () => {
           await RecourseFns.insert({name: "rachet"});
           await RecourseFns.insert({name: "welder"});
           await RecourseFns.insert({name: "scanner"});

          await testerLib(server)
            .put('/api/resources/1')
            .then(res => {
                expect(res.body.name).toBe("whatever")
            });
        });

        it('gets all using endpoint', async () => { //X'd
            await RecourseFns.insert({name: "rachet"});
            await RecourseFns.insert({name: "welder"});
            await RecourseFns.insert({name: "scanner"});

           await testerLib(server)
             .put('/api/resources/1')
             .then(res => {
                 expect(res.status).toBe(200)
             });
         });

    });
});