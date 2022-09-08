const { Router } = require ('express');
const  router = Router();
const Tipoequipo = require ('../models/Tipoequipo');


router.get('/', async function (req,res){
    try {
        const tipos = await Tipoequipo.find();
        res.send (tipos);
        
    } catch (error) {
        console.log(error);
        res.send ('ocurrio un error')
        
    }
});

router.post('/',async function (req,res){
    try {
        let tipoequipo =new Tipoequipo();
        tipoequipo.nombre= req.body.nombre;
        tipoequipo.estado = req.body.estado;
        tipoequipo.fechaCreacion = new Date ();
        tipoequipo.fechaDeActualizacion = new Date()
        tipoequipo = await tipoequipo.save();
        res.send(tipoequipo);

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});

router.put('/tipoequipoId',async function (req,res){
    try {
        let tipoequipo = await Tipoequipo.findById(req.params.marcaId);
        if(!tipoequipo){
            return res.send('el tipo de equipo no existe');
        }
        tipoequipo.nombre= req.body.nombre;
        tipoequipo.estado = req.body.estado;
        tipoequipo.fechaCreacion = new Date ();
        tipoequipo.fechaDeActualizacion = new Date()
        tipoequipo = await tipoequipo.save();

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});
module.exports = router;