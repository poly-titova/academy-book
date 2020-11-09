'use strict';

// Создаём экземпляр объекта Pino
const logger = require(`pino`)();

// Фиксируем события на разных уровнях
logger.info(`Hello, world!`);
logger.warn(`Test warning`);
logger.error(`Add error`);