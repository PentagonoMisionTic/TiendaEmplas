const express=require("express");
const { getProducts, newProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productsControllers");
const router=express.Router();


router.route('/productos').get(getProducts)//establecemos ruta del get
router.route('/producto/nuevo').post(newProduct)//establecemos la ruta del producto nuevo creado
router.route('/producto/:id').get(getProductById)//ruta para consultar producto por id
router.route('/producto/:id').put(updateProduct);//Establecemos la ruta editar
router.route('/producto/:id').delete(deleteProduct);//Establecemos la ruta eliminar

module.exports=router;
