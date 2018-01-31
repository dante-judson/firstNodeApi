const grupoModel = require('../models/grupo');

module.exports = app => {
    app.get('/grupo', async (req, res) => {
        const groups = await grupoModel.findAll({});
        res.send(groups);
    });


    app.post('/grupo', async (req, res) => {
        try {
            const createdGroup = await grupoModel.create(req.body);
            res.status(201);
            res.send(createdGroup);
        } catch (error) {
            res.status(400);
            res.send({message:error.message});
        }
    });


    app.get('/grupo/:id', async (req, res) => {
        const group = await grupoModel.findOne({
            where: { id: req.params.id }
        });
        if (group) {
            res.send(group);
        } else {
            res.sendStatus(404);
        }
    });

    app.put('/grupo/:id', async (req, res) => {
        try {
             const updatedGroup = await grupoModel.update(req.body, {
                 where: { id: req.params.id },
                 returning: true
             });

             if(updatedGroup[1] != 0){
                 res.send(updatedGroup[1][0].dataValues);
             } else {
                 res.sendStatus(404);
             }
        } catch (error) {
            res.send(error)
        }
    });

    app.delete('/grupo/:id', async (req, res) => {
        const deleted = await grupoModel.destroy({
            where: { id: req.params.id }
        });
        if(deleted != 0 ){
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    })
}