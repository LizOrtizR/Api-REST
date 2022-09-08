const {Schema,model} = require('mongoose');

const EstadoequipoSchema = Schema({
    nombre:{
        type: String,
        required:true,
    },
    estado:{
        type: String,
        required: true,
        enum:[
            'Activo',
            'Inactivo',
        ]
    },
    fechaCreacion:{
        type: Date,
        required: true,

    },
    fechaDeActualizacion: {
        type: Date,
        required: true,
    }
});

module.exports = model('Estadoequipo ',EstadoequipoSchema);