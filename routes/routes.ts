
import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res)=>{
    res.json({id: 10, value: 'Ola Mundo!'});
});

export default routes;
