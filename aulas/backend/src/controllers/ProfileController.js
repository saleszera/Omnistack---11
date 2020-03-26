import connection from '../database/connection';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const { page = 1 } = req.query;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .limit(4)
      .offset((page - 1) * 5)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
