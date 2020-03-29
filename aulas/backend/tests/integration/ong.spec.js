import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  describe('CREATE', () => {
    it('should be able to create a new ONG', async () => {
      const { body } = await request(app).post('/ongs').send({
        name: 'ONG',
        email: 'contato@email.com',
        whatsapp: '0000000000',
        city: 'são paulo',
        uf: 'SP',
      });

      ongId = body.id;

      expect(body).toHaveProperty('id');
      expect(body.id).toHaveLength(8);
    });
  });

  describe('INDEX', () => {
    it('Should be able to return all ONGs', async () => {
      const { status } = await request(app).get('/ongs').send();

      expect(status).toBe(200);
    });
  });
});
