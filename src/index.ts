import Server from './server';

class Application {
    public run(): void {
        const server = new Server();

        server.start();
    }
}

const application: Application = new Application();
application.run();
