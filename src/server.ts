import cors from "cors";
import express from "express";
import { logger } from "./utils/logger";
import converterRoutes from "./resources/pdf-converter/pdf-converter.routes";

export class Server {
    public app: express.Application;

    constructor(private port: number, private host: string) {
        this.app = express();
        this.setMiddlewares();
        this.setRoutes();
    }

    public start() {
        this.app.listen(this.port, this.host, () => {
            logger.info(`Server listens at http://${this.host}:${this.port}`);
        });
    }

    private setMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private setRoutes() {
        converterRoutes(this.app);
    }
}