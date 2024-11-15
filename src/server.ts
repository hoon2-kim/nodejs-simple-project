import express, { Application, NextFunction, Request, Response } from 'express';

class Server {
    private app: Application;

    constructor() {
        this.app = express();
    }

    public start(): void {
        this.setUpMiddlware();
        this.setUpRoutes();
        this.setUpGlobalError();
        this.listenServer();
    }

    private setUpMiddlware(): void {
        this.app.use(express.json());
    }

    private setUpRoutes(): void {}

    private setUpGlobalError(): void {
        this.app.all('*', (req: Request, res: Response, next: NextFunction) => {
            res.status(404).json({
                message: `The URL ${req.originalUrl} not found with method ${req.method}`,
            });
        });
    }

    private listenServer() {
        const port = 7000;

        this.app.listen(port, () => {
            console.log(`Connected to server with port ${port}`);
        });
    }
}

export default Server;
