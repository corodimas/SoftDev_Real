const {isOdd,server} = require('./index');

describe('isOdd endpoint handler', ()=>{
    test('return false if param is 16', () =>{
        const req = {
            params:{
                number : '16'
            }
        }

        const res = {
            json : jest.fn()
        };

        isOdd(req,res);
        expect(res.json).toHaveBeenCalledWith('true') 
    });

    test('return false if param is 3',()=>{
        const req={
            params:{
                number : '3'
            }
        }

        const res = {
            json: jest.fn()
        }
        
        isOdd(req,res);
        expect(res.json).toHaveBeenCalledWith('false')
    })
})

afterAll(done => {
    server.close(done);
});