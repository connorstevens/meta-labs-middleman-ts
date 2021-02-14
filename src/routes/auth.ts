import * as express from "express";
import type { Router } from "express";
import Meta from "../utils/Meta";
import validateBody from "../middleware/validateBody";

const router: Router = express.Router();

router.use(validateBody);

// POST /login
router.post("/login", async (req, res) => {
    const { license, machine } = req.body;

    if(!machine || !license) return res.sendStatus(400);

    try{
        const authResponse = await Meta.login(license, machine);
        return res.status(200).json(authResponse);
    } catch(err) {
        return res.sendStatus(400);
    }
});

// POST /reset
router.post("/reset", async(req, res) => {
    const { license } = req.body;

    try {
        const authResponse = await Meta.reset(license);
        return res.status(200).json(authResponse);
    } catch(err) {
        return res.sendStatus(400);
    }
});

export default router;