const { Router } = require ('express');
const  router = Router();
const Marcas = require ('../models/Marcas');


router.get('/', async function (req,res){
    try {
        const marcas = await Marcas.find();
        res.send (marcas);
        
    } catch (error) {
        console.log(error);
        res.send ('ocurrio un error')
        
    }
});

router.post('/',async function (req,res){
    try {
        let marca =new Marcas();
        marca.nombre= req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date ();
        marca.fechaDeActualizacion = new Date()
        marca = await marca.save();
        res.send(marca);

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});

router.put('/marcaId',async function (req,res){
    try {
        let marca = await Marcas.findById(req.params.marcaId);
        if(!marca){
            return res.send('la marca no existe ');
        }
        marca.nombre= req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaDeActualizacion = new Date()
        marca = await marca.save();

    } catch (error) {
        console.log(error);
        res.send('ocrrio un error')
        
    }
});
module.exports = router;