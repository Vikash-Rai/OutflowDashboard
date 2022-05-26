import express from 'express';
import { allBatch } from '../controllers/batchController.js';
import {countSKU, minSKU, sentSKU, totalContainer } from '../controllers/inventoryController.js';
import { recentOrders, allOrders, totalOrders } from '../controllers/orderController.js';


const router=express.Router();
router.get('/dashboard/dashboard/recent-orders/:id',recentOrders) 
router.get('/dashboard/dashboard/total-orders/:id',totalOrders)                               //unique id of the restaurant
router.get('/dashboard/order-listing/all-orders/:id',allOrders)
router.get('/dashboard/inventory/batches/:id',allBatch)  

router.get('/dashboard/dashboard/sku/:id',countSKU) 
router.get('/mincount/:id',minSKU) 
router.get('/dashboard/inventory/sentcontainers/:id',sentSKU)
router.get('/dashboard/inventory/received/:id',totalContainer)
export default router;