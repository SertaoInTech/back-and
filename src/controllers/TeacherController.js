const Space = require('../models/Space');

module.exports = {
    async index(req, res) {
        const space = await Space.findAll();

        if (space == "" || space == null) {
            return res.status(200).send({ 'message': 'space not found' });
        }

        return res.status(200).send({ space });

    },

    async store(req, res) {
        const { space_name, floor, number_capacity, compart_simult } = req.body;

        data = await Space.findOne({ where: { space_name: space_name } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'space already exists',
                space: data

            });
        }

        const space = await Space.create({ space_name, floor, number_capacity, compart_simult });

        return res.status(200).send({
            erro: false,
            message: 'space created success',
            space
        })

    },


    async update(req, res) {
        const { space_name, floor, number_capacity, compart_simult } = req.body;
        const { sala_id } = req.params;

        data = await Space.findOne({ where: { id: sala_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'space does not exist to update'
            });
        }

        await Space.update({
            space_name, floor, number_capacity, compart_simult
        }, {
            where: {
                id: sala_id,
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Sala update with success"
        });

    },

    async delete(req, res) {
        const { sala_id } = req.params;
        data = await Space.findOne({ where: { id: sala_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'space does not exist to delete'
            });
        }

        await Space.destroy({
            where: {
                id: sala_id
            }
        });

        return res.status(200).send({
            erro: false,
            message: "Sala delete with success",
            deleted: data

        });

    }

};
