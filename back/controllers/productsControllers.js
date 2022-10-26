const producto=require("../models/productos")

//Ver la lista de productos
exports.getProducts=async(req, res, next) =>{
    const productos = await producto.find();
    if(!productos){
        return res.status(404).json({
            success: false,
            eror:true
        })
    }
    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        productos
    })
}
//Buscar producto por ID
exports.getProductById =async(req,res,next)=>{
    const productoById = await producto.findById(req.params.id);
    if(!productoById) {
        return res.status(404).json({
            success:false,
            message:"No se encontro ese producto"
        })
    }
    res.status(200).json({
        sucess:true,
        message:"Aqui debajo encuentras información sobre tu producto:",
        productoById
    })
}
//Crear nuevo producto /api/productos
exports.newProduct=async(req, res,next)=>{
    const product=await producto.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}
//Update un producto
exports.updateProduct = async(req,res,next)=>{
    let product = await producto.findById(req.params.id); //variable de tipo modificable
    if(!product) {//Verifica que el objeto no exista para finalizar el proceso
        return res.status(404).json({
            success:false,
            message:"No se encontro ese producto"
        })
    }
    //si el objeto si existe, ejecutar la actualización
    product = await producto.findOneAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    //Responder OK si el producto se actualizo
    res.status(200).json({
        sucess:true,
        message: "producto actualizado correctamente",
        product
    })
}
//Eliminamos el producto
exports.deleteProduct = async(req,res,next)=>{
    const product = await producto.findById(req.params.id) //variable de tipo modificable
    if(!product) {//Verifica que el objeto no exista para finalizar el proceso
        return res.status(404).json({//si el objeto no existe, return termina el metodo
            success:false,
            message:"No se encontro ese producto"
        })
    }
    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}