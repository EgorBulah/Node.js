import { DataSource } from 'typeorm'
import { db } from './DatabaseConfig'

const datasource = new DataSource(db);
datasource.initialize();
export default datasource;