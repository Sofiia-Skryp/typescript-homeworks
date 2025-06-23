interface FeatureConfig {
    enabled: boolean;
    description: string;
}

interface AppSettings {
    features: Record<string, FeatureConfig>;
    messages: Record<string, string>;
}

const appConfig: AppSettings = {
    features: {
        login:  { enabled: true,  description: "Увімкнути логін" },
        signup: { enabled: false, description: "Увімкнути реєстрацію" },
        search: { enabled: true,  description: "Увімкнути пошук" },
        signup: { enabled: true, description: "Тест дубля signup" },
    },
    messages: {
        welcome: "Ласкаво просимо!",
        error:   "Виникла помилка",
        welcome: "Тестове повідомлення дубля",
    }
};

console.log("Повний конфіг:", appConfig);

console.log("features.signup:", appConfig.features.signup);
console.log("messages.welcome:", appConfig.messages.welcome);

console.log("\nПервинні значення були:\n",
    "- signup.enabled = false, signup.description = 'Увімкнути реєстрацію'\n",
    "- welcome = 'Ласкаво просимо!'\n"
);
