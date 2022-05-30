import { Request, Response, NextFunction } from "express";
import ConverterService from "../../services/converter.service";
import StorageService from "../../services/storage.service";
import { logger } from "./../../utils/logger";
import constants from "./../../utils/constants";

export default {
    convert: convert
};

async function convert(req: Request, res: Response, next: NextFunction) {
    logger.info({}, "Enter to conversion endpoint");
    if (!req.body.url || !req.body.fileName) {
        logger.error(req.body, `Validation not pass ${constants.errors.converterValidation}`)
        res.status(constants.http.bad_request).send({ error: constants.errors.converterValidation });
    }

    const buffer = await ConverterService.urlToPDF(req.body.url);

    const url = await StorageService.saveFileInStorage(buffer, req.body.fileName);

    res.status(constants.http.success).send({ url: url });
}