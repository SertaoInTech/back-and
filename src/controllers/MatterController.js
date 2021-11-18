const Matter = require('../models/Matter');

module.exports = {
    async index(req, res) {
        console.log('\x1b[33m%s\x1b[0m', `passei aqui`);

        const matter = await Matter.findAll();

        if (matter == "" || matter == null) {
            return res.status(200).send({ 'message': 'matter not found' });
        }

        return res.status(200).send({ matter });

    },

    async store(req, res) {
        const { name, teachers_id } = req.body;

        data = await Matter.findOne({ where: { name: name  } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'matter already exists',
                matter: data

            });
        }

        const space = await Matter.create({ teachers_id, name  });

        return res.status(200).send({
            erro: false,
            message: 'matter created success',
            space
        })

    },


    async update(req, res) {
        const { teachers_id, name } = req.body;
        const { matter_id } = req.params;

        data = await Matter.findOne({ where: { id: matter_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'matter does not exist to update'
            });
        }

        await Matter.update({
            teachers_id, name
        }, {
            where: {
                id: matter_id,
            }
        });

        return res.status(200).send({
            erro: false,
            message: "matter update with success"
        });

    },

    async delete(req, res) {
        const { matter_id } = req.params;
        data = await Matter.findOne({ where: { id: matter_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'matter does not exist to delete'
            });
        }

        await Matter.destroy({
            where: {
                id: matter_id
            }
        });

        return res.status(200).send({
            erro: false,
            message: "matter delete with success",
            deleted: data

        });

    }

};
