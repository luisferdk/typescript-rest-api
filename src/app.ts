import express, { Application } from 'express';
import morgan from 'morgan';

//Routes
import IndexRoutes from './routes/index';
import PostsRoutes from './routes/posts';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use(PostsRoutes);
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
