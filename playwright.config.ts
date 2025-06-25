 import { defineConfig } from '@playwright/test';

   export default defineConfig({
     // Де шукати тести
     testDir: 'tests',

     // Глобальні налаштування браузера
     use: {
       headless: true,          // запуск без UI
       viewport: { width: 1280, height: 720 },
       screenshot: 'only-on-failure',
       video: 'retain-on-failure',
     },

     // (Опціонально) Час очікування для всіх expect
     expect: {
       timeout: 5000,
     },
   });