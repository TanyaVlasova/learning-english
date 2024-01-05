const db = require("../db");

class DictionaryController {
  async createWord(req, res) {
    const { word, translation } = req.body;
    const newWord = await db.query(
      `INSERT INTO dictionary (word, translation) values ($1, $2) RETURNING *`,
      [word, translation]
    );

    res.json(newWord.rows[0]);
  }

  async getDictionary(req, res) {
    const dictionary = await db.query(`SELECT * from dictionary`);

    res.json(dictionary.rows);
  }

  async getWord(req, res) {
    const id = req.params.id;
    const word = await db.query(`SELECT * from dictionary where id = $1`, [id]);

    res.json(word.rows[0]);
  }

  async updateWord(req, res) {
    const { id, word, translation } = req.body;
    const newWord = await db.query(
      `UPDATE person set word = $1, translation = $2 where id = $3 RETURNING *`,
      [word, translation, id]
    );

    res.json(newWord.rows[0]);
  }

  async deleteWord(req, res) {
    const id = req.params.id;
    const word = await db.query(`DELETE from dictionary where id = $1`, [id]);

    res.json(word.rows[0]);
  }
}

module.exports = new DictionaryController();
