const { Router } = require ('express');
const Inventario = require ('../models/Inventario');
const  router = Router();


router.get('/', async function(req,res) {

try {
    const inventarios = await Inventario.find().populate; ([
        {
              path: 'usuario', select: 'nombre email estado'
        },
        {
              path: 'marca',    select: 'nombre estado'
        },
        {
              path: " tipoequipo" ,   select: 'nombre estado'
        },
        {
              path: "estadoequipo", select: 'nombre estado'
        }
    ]);
    res.send(inventarios);

} catch(error){
    console.log(error);
    res.send ('ocurrio un error')
}
    
});
router.post('/', async function(req,res) {
    try {
        const existeInventarioPorSerial =await Inventario.findOne({serial: req.body.serial});
        if (existeInventarioPorSerial) {
            return res.send ('el serial no puede estar repetido')
        }
        let inventario = new Inventario();

router.put('/:inventarioId')        
        inventario.serial=req.body.serial;
        inventario.modelo=req.body.modelo;
        inventario.descripcion=req.body.descripcion;
        inventario.foto=req.body.foto;
        inventario.color=req.body.color;
        inventario.precio=req.body.precio;
        inventario.usuario=req.body.usuario._id;
        inventario.marcas=req.body.marcas._id;
        inventario.tipoequipo=req.body.tipoequipo._id;
        inventario.fechaCompra=req.body.fechaCompra
        inventario.estadoequipo=req.body.estadoequipo._id;
        inventario.fechaCreacion= new Date();
        inventario.fechaActualizacion =new Date();


        inventario = await inventario.save()
        res.send (inventario);
    
    }catch(error){
        console.log(error);
        res.send ('ocurrio un error al consultar inventarios');
        return;
    }



    res.send('estoy desde inventario POST');
    
});
router.put('/', function(req,res) {
    res.send('estoy desde inventario PUT');
    
});

module.exports =router; 

