import connection from '../database/connection';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    console.log(ong_id);
    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    console.log(incidents);

    return res.json(incidents);
  }
}

export default new ProfileController();
