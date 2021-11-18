const Contacts = require('../models/Contacts');

module.exports = {
    async index(req, res) {
        console.log('\x1b[33m%s\x1b[0m', `passei aqui`);

        const contacts = await Contacts.findAll();

        if (contacts == "" || contacts == null) {
            return res.status(200).send({ 'message': 'contacts not found' });
        }

        return res.status(200).send({ contacts });

    },

    async store(req, res) {
        const { teachers_id, email, telephone } = req.body;

        data = await Contacts.findOne({ where: { email: email } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'contacts already exists',
                contacts: data

            });
        }

        const contacts = await Contacts.create({ teachers_id, email, telephone });

        return res.status(200).send({
            erro: false,
            message: 'contacts created success',
            contacts
        })

    },


    async update(req, res) {
        const { teachers_id, email, telephone } = req.body;
        const { contacts_id } = req.params;

        data = await Contacts.findOne({ where: { id: contacts_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'contacts does not exist to update'
            });
        }

        await Contacts.update({
            teachers_id, email, telephone
        }, {
            where: {
                id: contacts_id,
            }
        });

        return res.status(200).send({
            erro: false,
            message: "contacts update with success"
        });

    },

    async delete(req, res) {
        const { contacts_id } = req.params;
        data = await Contacts.findOne({ where: { id: contacts_id } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'contacts does not exist to delete'
            });
        }

        await Contacts.destroy({
            where: {
                id: contacts_id
            }
        });

        return res.status(200).send({
            erro: false,
            message: "contacts delete with success",
            deleted: data

        });

    }

};
