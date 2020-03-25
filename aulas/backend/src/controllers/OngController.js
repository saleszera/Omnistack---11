import crypto from 'crypto';
import connection from '../database/connection';

class OngController {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const ongs = await connection('ongs')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    return res.json(ongs);
  }
}

export default new OngController();
