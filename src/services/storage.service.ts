import { BlobServiceClient } from "@azure/storage-blob";
import StorageCredentials from "../utils/storage";
import constants from "./../utils/constants"
import { logger } from "./../utils/logger";

export default class StorageService {

    static async saveFileInStorage(file: Buffer, fileName: string) {
        logger.info({}, `Saving file in storage with filename: ${fileName}`)

        const client = BlobServiceClient.fromConnectionString(StorageCredentials.getConnectionString());

        const containerClient = client.getContainerClient(StorageCredentials.getContainerName());
        const containerResponse = await containerClient.createIfNotExists();
        logger.info(containerResponse, "Getting container");

        const blobClient = containerClient.getBlockBlobClient(fileName);

        const blobOptions = {
            blobHTTPHeaders: {
                blobContentType: constants.keys.contentTypePdf
            }
        }
        const blobResponse = await blobClient.uploadData(file, blobOptions);
        logger.info(blobResponse, "Getting blob");
        
        return constants.urls.azureFileUrl
                                .replace(constants.keys.account, StorageCredentials.getAccountName())
                                .replace(constants.keys.container, StorageCredentials.getContainerName())
                                .replace(constants.keys.file, fileName); 
    }

}