const lessons = {
    en: {
        title: "English",
        flag: "🇬🇧",
        levels: [
            {
                id: 1,
                title: "Greetings",
                exercises: [
                    { type: "qcm", question: "How do you say 'Hello'?", options: ["Hello", "Goodbye", "Please"], answer: "Hello" },
                    { type: "qcm", question: "Which one means 'Thank you'?", options: ["Sorry", "Thank you", "Yes"], answer: "Thank you" },
                    { type: "qcm", question: "Translate: 'Good morning'", options: ["Good night", "Good morning", "Good afternoon"], answer: "Good morning" }
                ]
            },
            {
                id: 2,
                title: "Basics",
                exercises: [
                    { type: "qcm", question: "How do you say 'Yes'?", options: ["No", "Maybe", "Yes"], answer: "Yes" },
                    { type: "qcm", question: "How do you say 'Water'?", options: ["Bread", "Water", "Apple"], answer: "Water" }
                ]
            }
        ]
    },
    fr: {
        title: "French",
        flag: "🇫🇷",
        levels: [
            {
                id: 1,
                title: "Salutations",
                exercises: [
                    { type: "qcm", question: "Comment dit-on 'Hello'?", options: ["Bonjour", "Merci", "S'il vous plaît"], answer: "Bonjour" },
                    { type: "qcm", question: "Lequel signifie 'Thank you'?", options: ["Pardon", "Merci", "Oui"], answer: "Merci" },
                    { type: "qcm", question: "Traduisez: 'Good morning'", options: ["Bonne nuit", "Bonjour", "Bon après-midi"], answer: "Bonjour" }
                ]
            }
        ]
    },
    es: {
        title: "Spanish",
        flag: "🇪🇸",
        levels: [
            {
                id: 1,
                title: "Saludos",
                exercises: [
                    { type: "qcm", question: "¿Cómo se dice 'Hello'?", options: ["Hola", "Adiós", "Por favor"], answer: "Hola" },
                    { type: "qcm", question: "¿Cuál significa 'Thank you'?", options: ["Perdón", "Gracias", "Sí"], answer: "Gracias" },
                    { type: "qcm", question: "Traduce: 'Good morning'", options: ["Buenas noches", "Buenos días", "Buenas tardes"], answer: "Buenos días" }
                ]
            }
        ]
    },
    ar: {
        title: "Arabic",
        flag: "🇸🇦",
        levels: [
            {
                id: 1,
                title: "التحيات (Greetings)",
                exercises: [
                    { type: "qcm", question: "كيف تقول 'Hello'؟", options: ["مرحباً (Marhaba)", "وداعاً (Wada'an)", "من فضلك (Min fadlak)"], answer: "مرحباً (Marhaba)" },
                    { type: "qcm", question: "أي واحدة تعني 'Thank you'؟", options: ["آسف (Asif)", "شكراً (Shukran)", "نعم (Na'am)"], answer: "شكراً (Shukran)" },
                    { type: "qcm", question: "ترجم: 'Good morning'", options: ["تصبح على خير", "صباح الخير (Sabah al-khair)", "مساء الخير"], answer: "صباح الخير (Sabah al-khair)" }
                ]
            }
        ]
    }
};

export default lessons;
