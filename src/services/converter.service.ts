import puppeteer from 'puppeteer';
import { logger } from "./../utils/logger";

export default class ConverterService {

    static async urlToPDF(url: string) : Promise<Buffer> {
        logger.info({}, `Converting URL to PDF with URL: ${url}`)
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const options = {
            margin: { 
                top: 24, 
                bottom: 24, 
                left: 24, 
                right: 24 
            }
        }

        await page.goto(url, { waitUntil: 'networkidle0' });
        const pdf = await page.pdf(options);

        await browser.close();
        logger.info({}, "Conversion to PDF ends");

        return pdf;
    }
}
