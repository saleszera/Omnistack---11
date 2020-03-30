import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('SESSION', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should be able to start a session', async () => {
    const { body: ongId } = await request(app).post('/ongs').send({
      name: 'ong',
      email: 'ong@ong.com',
      whatsapp: '0000000000',
      city: 'sao paulo',
      uf: 'SP',
    });

    console.log(ongId);
    const { status } = await request(app).post('/sessions').send(ongId);

    expect(status).toBe(200);
  });
});
