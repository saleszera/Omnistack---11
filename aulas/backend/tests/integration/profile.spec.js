import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('PROFILE', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should be able list all incidents from a specific ONG', async () => {
    const { body: ongId } = await request(app).post('/ongs').send({
      name: 'ong',
      email: 'ong@ong.com',
      whatsapp: '0000000000',
      city: 'sao paulo',
      uf: 'SP',
    });

    const { status } = await request(app)
      .get('/profile')
      .set('Authorization', ongId)
      .send();

    expect(status).toBe(200);
  });
});
