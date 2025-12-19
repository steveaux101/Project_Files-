import { Router } from 'express';
import UploadController from '../controllers/uploadController';

const router = Router();
const uploadController = new UploadController();

export const setUploadRoutes = () => {
    router.post('/upload', uploadController.handleFileUpload.bind(uploadController));
    return router;
};