import { Server } from './server';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.APP_PORT || '4300') as number;
const host = process.env.APP_HOST || 'localhost' as string;

const server = new Server(port, host);

server.start();