const { type } = require('express/lib/response');
const {Schema,model, SchemaTypes} = require('mongoose');

const InventarioSchema = Schema({
    serial:{
        type: String,
        required:true,
        unique: true,
    },
    modelo:{
        type: String,
        required: true,
        
    },
    fechaCompra:{
        type: Date,
        required: true,

    },
    color:{
        type: String,
        required:true,
    },
    foto:{
        type: String,
        required:true,
    },
    descripcion:{
        type: String,
        required:true,
    },

    precio:{
        type: Number,
        required:true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false,

    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marcas',
        required: true,
        

    },
    tipoequipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipoequipo',
        required: true,

    },
    estadoequipo: {
        type: Schema.Types.ObjectId,
        ref: 'Estadoequipo',
        required: true,

    },
    fechaCreacion: {
        type: Date,
        
        required: true,

    },
    fechaActualizacion: {
        type: Date,
       
        required: true,

    },
});

module.exports = model('Inventario ',InventarioSchema);