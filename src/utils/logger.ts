import pino from "pino";
import dayjs from "dayjs";

export const logger = pino({
    prettyPrint: true,
    timestamp: () => `, "time": "${dayjs().format()}"`
});