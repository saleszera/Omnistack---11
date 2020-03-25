import crypto from 'crypto';
import connection from '../database/connection';

class OngController {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const ong = await connection('ongs')
      .where('name', name)
      .select('*')
      .first();

    console.log(ong);

    if (ong) {
      return res.status(400).json({ Error: 'ONG already exists!' });
    }

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

  async delete(req, res) {
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    const ong = await connection('ongs').where('id', id).select('id').first();
    console.log(ong);
    if (!ong) {
      return res.status(404).json({ Error: 'Not found!' });
    }

    if (ong.id !== ong_id) {
      return res.status(401).json({ Error: 'Oparation not permited!' });
    }

    await connection('ongs').where('id', ong_id).delete();

    return res.status(204).send();
  }
}

export default new OngController();
