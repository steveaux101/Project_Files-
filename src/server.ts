import express from 'express';
import { json } from 'body-parser';
import { setUploadRoutes } from './routes/uploadRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
setUploadRoutes(app);

// ...existing code...
app.listen(PORT, () => {
    console.log(`TextScraperElite running on port ${PORT}`);
});
// ...existing code...