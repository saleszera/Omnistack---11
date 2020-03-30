import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

let ongId;
let incidentId;

describe('INCIDENT', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should able be create a new incident', async () => {
    const { body: id } = await request(app).post('/ongs').send({
      name: 'ong',
      email: 'ong@ong.com',
      whatsapp: '0000000000',
      city: 'sao paulo',
      uf: 'SP',
    });

    const { status, body } = await request(app)
      .post('/incidents')
      .set('Authorization', id)
      .send({
        title: 'Caso teste',
        description: 'detalhe do teste',
        value: 200,
      });

    ongId = id;
    incidentId = body.id;

    expect(body).toHaveProperty('id');
    expect(status).toBe(200);
  });

  it('Should be able to list all incidents from all ONGs', async () => {
    const { status } = await request(app).get('/incidents').send();

    expect(status).toBe(200);
  });

  it('is passing a wrong parameter, it should not work', async () => {
    const { status } = await request(app)
      .delete(`/incidents/${incidentId}`)
      .set('Authorization', 'hdjsa')
      .send();

    expect(status).toBe(401);
  });

  it('Should be able to delete an incident', async () => {
    const { status } = await request(app)
      .delete(`/incidents/${incidentId}`)
      .set('Authorization', ongId)
      .send();

    expect(status).toBe(204);
  });
});
