const mongoose=require("mongoose")


//Esquema PRODUCTOS (EMPLAS)
const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Nombre del producto: "],
        trim:true,
        maxLength:[120,"Para el nombre solo puedes usar un máximo de 120 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Precio del producto:"],
        maxLength:[8, "El valor máximo permitido es: $ 99'999.999"],
        default: 0.0
    },
    descripcion:{
      type:String,
      required:[true,"Descripcion del producto:"]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Seleccione la categoria en la que ubicará del producto:"],
        enum:{
            values:[
                "Hogar",
                "Accesorios",
                "Arte",
                "Ropa y Calzado",
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Nombre del fabricante del producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Registre el stock disponible del producto"],
        maxLength:[5,"La cantidad maxima autorizada en stock es: 99.999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema)