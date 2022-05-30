import { logger } from "./logger";
import constants from "./constants";

export default class StorageCredentials {
    
    static getConnectionString(): string {
        logger.info({}, "Getting storage connection string");
        const connection = process.env[constants.env.storageConnectionString];

        if (!connection) {
            logger.error({}, "Connection string not in ENV file or environment");
            return '';
        }
        return connection;
    }

    static getAccountName(): string {
        logger.info({}, "Getting storage account name");
        const connection = process.env[constants.env.storageAccount];

        if (!connection) {
            logger.error({}, "Account name not in ENV file or environment");
            return '';
        }
        return connection;
    }

    static getContainerName(): string {
        logger.info({}, "Getting storage container name");
        const connection = process.env[constants.env.storageContainer];

        if (!connection) {
            logger.error({}, "Container name not in ENV file or environment");
            return '';
        }
        return connection;
    }
}