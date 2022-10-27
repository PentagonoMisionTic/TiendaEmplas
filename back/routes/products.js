const express=require("express");
const { getProducts, newProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productsControllers");
const router=express.Router();


router.route('/productos').get(getProducts)//implementamos ruta del get
router.route('/producto/nuevo').post(newProduct)//Construimos  la ruta del producto nuevo creado
router.route('/producto/:id').get(getProductById)//Consultamos por medio de una ruta el  producto usando un  id
router.route('/producto/:id').put(updateProduct);//elaboramos  la ruta editar
router.route('/producto/:id').delete(deleteProduct);//Establecemos la ruta eliminar

module.exports=router;
