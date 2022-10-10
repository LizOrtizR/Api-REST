const { Router } = require('express');
//const {validationResult, check} =require ('express-validator');
const router = Router();
const Usuario = require('../models/Usuario');


router.post('/', async function (req, res) {

    try {
        console.log('objeto recibido', req.body);

        const existeUsuario = await Usuario.findOne({ email: req.body.email });
        if (existeUsuario) {
            return res.send('email ya existe');

        }


        let usuario = new Usuario();

        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaDeActualizacion = new Date();

        usuario = await usuario.save();


        res.send(usuario);

        
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error')
    }

});





//}catch (error){
//  console.log(error);
//  res.send('ocurrio un error');
//}

router.get('/', async function (req, res) {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);

    } catch (error) {
        console.log(error);
        res.send('ocurrio un error')

    }


});
router.put('/:usuarioId', async function (req, res) {


    try {
        console.log('objeto recibido', req.body, req.params);
        let usuario = await Usuario.findById(requ.params.usuarioId);
        if (!usuario) {

            return res.send('usuario no existe');

        }


        const existeUsuario = await Usuario
            .findOne({ email: req.body.emai, _id: { ne: usuario._id } });
        if (existeUsuario) {
            return res.send('email ya existe');

        }


        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;

        usuario.fechaDeActualizacion = new Date();

        usuario = await usuario.save();



        res.send(usuario);



    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }

});



module.exports = router;