import request from 'supertest';
import app from '../app';

// this test if /match responds with a 200 statusCode and a json body
describe('GET tournaments', ()=>{
  test('should respond with status 200', async()=>{
    const response = await request(app).get('/matches/29');
    expect(response.statusCode).toBe(200);
  });

  test('should respond with a json', async()=>{
    const response = await request(app).get('/matches/29');
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json")) 
  })
});