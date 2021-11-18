const Teachers = require('../models/Teachers');

module.exports = {
    async index(req, res) {
        console.log('\x1b[33m%s\x1b[0m', `passei aqui`);

        const teachers = await Teachers.findAll();

        if (teachers == "" || teachers == null) {
            return res.status(200).send({ 
                erro: false,
                message: 'teachers not found' });
        }

        return res.status(200).send({ teachers });

    },

    async store(req, res) {
        const { name, address, institution } = req.body;

        data = await Teachers.findOne({ where: { name: name } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'teachers already exists',
                teachers: data

            });
        }

        const teachers = await Teachers.create({  name, address, institution  });

        return res.status(200).send({
            erro: false,
            message: 'teachers created success',
            teachers
        })

    },


    async update(req, res) {
        const { name, address, institution } = req.body;
        const { teacher_id } = req.params;

        data = await Teachers.findOne({ where: { id: teacher_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'teachers does not exist to update'
            });
        }

        await Teachers.update({
            name, address, institution
        }, {
            where: {
                id: teacher_id,
            }
        });

        return res.status(200).send({
            erro: false,
            message: "teachers update with success"
        });

    },

    async delete(req, res) {
        const { teacher_id } = req.params;
        data = await Teachers.findOne({ where: { id: teacher_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'teacher does not exist to delete'
            });
        }

        await Teachers.destroy({
            where: {
                id: teacher_id
            }
        });

        return res.status(200).send({
            erro: false,
            message: "teacher delete with success",
            deleted: data

        });

    }

};
