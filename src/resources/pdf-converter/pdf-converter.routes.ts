import { Application } from "express";
import  constants  from "../../utils/constants";
import controller from "./pdf-converter.controller";

export default function(app: Application) {
    app.post(constants.endpoints.pdfConverter, controller.convert);
}