const Sala = require('../models/Sala');

module.exports = {
    async index(req, res) {
        const salas = await Sala.findAll();

        if (salas == "" || salas == null) {
            return res.status(200).send({ 'message': 'sala not found' });
        }

        return res.status(200).send({ salas });


    },

    async store(req, res) {
        const { number_sala, andar, number_capacity } = req.body;
        const sala = await Sala.create({ number_sala, andar, number_capacity });

        return res.status(200).send({
            status: 1,
            message: 'Sala created success',
            sala
        })

    },


    async update(req, res) {
        const { number_sala, andar, number_capacity } = req.body;
        const { sala_id } = req.params;

        await Sala.update({
            number_sala, andar, number_capacity
        }, {
            where: {
                id: sala_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Sala update with success"
        });



    },


    async delete(req, res) {
        const { sala_id } = req.params;
        await Sala.destroy({
            where: {
                id: sala_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuario delete with success"
        });

    }


};
