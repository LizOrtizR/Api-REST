const { Router } = require ('express');
const  router = Router();
const Estadoequipo = require ('../models/Estadoequipo');


router.get('/', async function (req,res){
    try {
        const estados = await Estadoequipo.find();
        res.send (estados);
        
    } catch (error) {
        console.log(error);
        res.send ('ocurrio un error')
        
    }
});

router.post('/',async function (req,res){
    try {
        let estadoequipo =new Estadoequipo();
        estadoequipo.nombre= req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaCreacion = new Date ();
        estadoequipo.fechaDeActualizacion = new Date()
        estadoequipo = await estadoequipo.save();
        res.send(estadoequipo);

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});

router.put('/estadoequipoId',async function (req,res){
    try {
        let estadoequipo = await Estadoequipo.findById(req.params.marcaId);
        if(!estadoequipo){
            return res.send('el estado de equipo no existe');
        }
        estadoequipo.nombre= req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaCreacion = new Date ();
        estadoequipo.fechaDeActualizacion = new Date()
        estadoequipo = await estadoequipo.save();

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});
module.exports = router;