const LESSONS_DATA = {
  fr: {
    name: "French", flag: "🇫🇷", color: "#4F46E5",
    lessons: [
      {
        id: "fr_1", title: "Greetings", icon: "👋", xp: 10, requiredLevel: 0,
        vocab: [
          { word: "Bonjour", translation: "Hello", example: "Bonjour, comment ça va?" },
          { word: "Merci", translation: "Thank you", example: "Merci beaucoup!" },
          { word: "Au revoir", translation: "Goodbye", example: "Au revoir, à bientôt!" },
          { word: "S'il vous plaît", translation: "Please", example: "S'il vous plaît, aidez-moi." },
          { word: "Oui", translation: "Yes", example: "Oui, je comprends." },
          { word: "Non", translation: "No", example: "Non, merci." }
        ],
        quiz: [
          { q: "How do you say 'Hello' in French?", options: ["Au revoir", "Bonjour", "Merci", "Oui"], answer: 1 },
          { q: "What does 'Merci' mean?", options: ["Please", "Goodbye", "Thank you", "Hello"], answer: 2 },
          { q: "How do you say 'Goodbye' in French?", options: ["Bonjour", "Oui", "Non", "Au revoir"], answer: 3 },
          { q: "What does 'S'il vous plaît' mean?", options: ["Thank you", "Please", "Hello", "Yes"], answer: 1 },
          { q: "How do you say 'Yes' in French?", options: ["Non", "Merci", "Oui", "Bonjour"], answer: 2 }
        ]
      },
      {
        id: "fr_2", title: "Numbers 1-10", icon: "🔢", xp: 15, requiredLevel: 1,
        vocab: [
          { word: "Un", translation: "One", example: "J'ai un chat." },
          { word: "Deux", translation: "Two", example: "J'ai deux chiens." },
          { word: "Trois", translation: "Three", example: "Trois pommes, s'il vous plaît." },
          { word: "Quatre", translation: "Four", example: "Il a quatre ans." },
          { word: "Cinq", translation: "Five", example: "Cinq minutes, s'il vous plaît." },
          { word: "Dix", translation: "Ten", example: "Dix euros, merci." }
        ],
        quiz: [
          { q: "What is 'Deux' in English?", options: ["One", "Three", "Two", "Four"], answer: 2 },
          { q: "How do you say 'Five' in French?", options: ["Quatre", "Cinq", "Trois", "Dix"], answer: 1 },
          { q: "What does 'Dix' mean?", options: ["Six", "Nine", "Eight", "Ten"], answer: 3 },
          { q: "How do you say 'Three' in French?", options: ["Deux", "Un", "Trois", "Quatre"], answer: 2 },
          { q: "What is 'Un' in English?", options: ["One", "Four", "Two", "Ten"], answer: 0 }
        ]
      },
      {
        id: "fr_3", title: "Colors", icon: "🎨", xp: 15, requiredLevel: 2,
        vocab: [
          { word: "Rouge", translation: "Red", example: "La rose est rouge." },
          { word: "Bleu", translation: "Blue", example: "Le ciel est bleu." },
          { word: "Vert", translation: "Green", example: "L'herbe est verte." },
          { word: "Jaune", translation: "Yellow", example: "Le soleil est jaune." },
          { word: "Blanc", translation: "White", example: "La neige est blanche." },
          { word: "Noir", translation: "Black", example: "Le chat est noir." }
        ],
        quiz: [
          { q: "What does 'Rouge' mean?", options: ["Blue", "Red", "Green", "Yellow"], answer: 1 },
          { q: "How do you say 'Blue' in French?", options: ["Vert", "Blanc", "Bleu", "Noir"], answer: 2 },
          { q: "What is 'Vert' in English?", options: ["Yellow", "White", "Black", "Green"], answer: 3 },
          { q: "How do you say 'White' in French?", options: ["Jaune", "Blanc", "Rouge", "Bleu"], answer: 1 },
          { q: "What does 'Noir' mean?", options: ["Black", "Red", "Blue", "Green"], answer: 0 }
        ]
      }
    ]
  },
  es: {
    name: "Spanish", flag: "🇪🇸", color: "#DC2626",
    lessons: [
      {
        id: "es_1", title: "Greetings", icon: "👋", xp: 10, requiredLevel: 0,
        vocab: [
          { word: "Hola", translation: "Hello", example: "Hola, ¿cómo estás?" },
          { word: "Gracias", translation: "Thank you", example: "Muchas gracias!" },
          { word: "Adiós", translation: "Goodbye", example: "Adiós, hasta luego." },
          { word: "Por favor", translation: "Please", example: "Por favor, ayúdame." },
          { word: "Sí", translation: "Yes", example: "Sí, entiendo." },
          { word: "No", translation: "No", example: "No, gracias." }
        ],
        quiz: [
          { q: "How do you say 'Hello' in Spanish?", options: ["Adiós", "Gracias", "Hola", "Sí"], answer: 2 },
          { q: "What does 'Gracias' mean?", options: ["Please", "Goodbye", "Hello", "Thank you"], answer: 3 },
          { q: "How do you say 'Goodbye' in Spanish?", options: ["Hola", "Sí", "Adiós", "No"], answer: 2 },
          { q: "What does 'Por favor' mean?", options: ["Thank you", "Please", "Hello", "Yes"], answer: 1 },
          { q: "How do you say 'Yes' in Spanish?", options: ["No", "Gracias", "Sí", "Hola"], answer: 2 }
        ]
      },
      {
        id: "es_2", title: "Numbers 1-10", icon: "🔢", xp: 15, requiredLevel: 1,
        vocab: [
          { word: "Uno", translation: "One", example: "Tengo un perro." },
          { word: "Dos", translation: "Two", example: "Dos cafés, por favor." },
          { word: "Tres", translation: "Three", example: "Tres manzanas." },
          { word: "Cuatro", translation: "Four", example: "Cuatro años." },
          { word: "Cinco", translation: "Five", example: "Cinco minutos." },
          { word: "Diez", translation: "Ten", example: "Diez euros." }
        ],
        quiz: [
          { q: "What is 'Dos' in English?", options: ["One", "Three", "Four", "Two"], answer: 3 },
          { q: "How do you say 'Five' in Spanish?", options: ["Cuatro", "Tres", "Cinco", "Diez"], answer: 2 },
          { q: "What does 'Diez' mean?", options: ["Six", "Ten", "Eight", "Nine"], answer: 1 },
          { q: "How do you say 'Three' in Spanish?", options: ["Dos", "Uno", "Cuatro", "Tres"], answer: 3 },
          { q: "What is 'Uno' in English?", options: ["Two", "Four", "One", "Ten"], answer: 2 }
        ]
      },
      {
        id: "es_3", title: "Colors", icon: "🎨", xp: 15, requiredLevel: 2,
        vocab: [
          { word: "Rojo", translation: "Red", example: "La rosa es roja." },
          { word: "Azul", translation: "Blue", example: "El cielo es azul." },
          { word: "Verde", translation: "Green", example: "El árbol es verde." },
          { word: "Amarillo", translation: "Yellow", example: "El sol es amarillo." },
          { word: "Blanco", translation: "White", example: "La nieve es blanca." },
          { word: "Negro", translation: "Black", example: "El gato es negro." }
        ],
        quiz: [
          { q: "What does 'Rojo' mean?", options: ["Blue", "Green", "Red", "Yellow"], answer: 2 },
          { q: "How do you say 'Blue' in Spanish?", options: ["Verde", "Blanco", "Negro", "Azul"], answer: 3 },
          { q: "What is 'Verde' in English?", options: ["Yellow", "White", "Green", "Black"], answer: 2 },
          { q: "How do you say 'White' in Spanish?", options: ["Blanco", "Amarillo", "Rojo", "Azul"], answer: 0 },
          { q: "What does 'Negro' mean?", options: ["Red", "Blue", "Green", "Black"], answer: 3 }
        ]
      }
    ]
  },
  ar: {
    name: "Arabic", flag: "🇸🇦", color: "#059669",
    lessons: [
      {
        id: "ar_1", title: "Greetings", icon: "👋", xp: 10, requiredLevel: 0,
        vocab: [
          { word: "مرحبا", translation: "Hello", example: "مرحبا، كيف حالك؟" },
          { word: "شكرا", translation: "Thank you", example: "شكرا جزيلا!" },
          { word: "مع السلامة", translation: "Goodbye", example: "مع السلامة، إلى اللقاء." },
          { word: "من فضلك", translation: "Please", example: "من فضلك، ساعدني." },
          { word: "نعم", translation: "Yes", example: "نعم، أفهم." },
          { word: "لا", translation: "No", example: "لا، شكرا." }
        ],
        quiz: [
          { q: "How do you say 'Hello' in Arabic?", options: ["شكرا", "مرحبا", "نعم", "لا"], answer: 1 },
          { q: "What does 'شكرا' mean?", options: ["Please", "Goodbye", "Thank you", "Hello"], answer: 2 },
          { q: "How do you say 'Goodbye' in Arabic?", options: ["مرحبا", "نعم", "مع السلامة", "لا"], answer: 2 },
          { q: "What does 'من فضلك' mean?", options: ["Thank you", "Please", "Hello", "Yes"], answer: 1 },
          { q: "How do you say 'Yes' in Arabic?", options: ["لا", "شكرا", "مرحبا", "نعم"], answer: 3 }
        ]
      },
      {
        id: "ar_2", title: "Numbers 1-5", icon: "🔢", xp: 15, requiredLevel: 1,
        vocab: [
          { word: "واحد", translation: "One", example: "عندي كتاب واحد." },
          { word: "اثنان", translation: "Two", example: "عندي قلمان اثنان." },
          { word: "ثلاثة", translation: "Three", example: "ثلاثة تفاحات." },
          { word: "أربعة", translation: "Four", example: "أربعة أيام." },
          { word: "خمسة", translation: "Five", example: "خمسة دقائق." },
          { word: "عشرة", translation: "Ten", example: "عشرة دراهم." }
        ],
        quiz: [
          { q: "What is 'اثنان' in English?", options: ["One", "Three", "Two", "Four"], answer: 2 },
          { q: "How do you say 'Five' in Arabic?", options: ["أربعة", "خمسة", "ثلاثة", "عشرة"], answer: 1 },
          { q: "What does 'عشرة' mean?", options: ["Six", "Nine", "Ten", "Eight"], answer: 2 },
          { q: "How do you say 'Three' in Arabic?", options: ["اثنان", "واحد", "ثلاثة", "أربعة"], answer: 2 },
          { q: "What is 'واحد' in English?", options: ["Two", "One", "Four", "Ten"], answer: 1 }
        ]
      },
      {
        id: "ar_3", title: "Colors", icon: "🎨", xp: 15, requiredLevel: 2,
        vocab: [
          { word: "أحمر", translation: "Red", example: "الوردة حمراء." },
          { word: "أزرق", translation: "Blue", example: "السماء زرقاء." },
          { word: "أخضر", translation: "Green", example: "العشب أخضر." },
          { word: "أصفر", translation: "Yellow", example: "الشمس صفراء." },
          { word: "أبيض", translation: "White", example: "الثلج أبيض." },
          { word: "أسود", translation: "Black", example: "القطة سوداء." }
        ],
        quiz: [
          { q: "What does 'أحمر' mean?", options: ["Blue", "Red", "Green", "Yellow"], answer: 1 },
          { q: "How do you say 'Blue' in Arabic?", options: ["أخضر", "أبيض", "أزرق", "أسود"], answer: 2 },
          { q: "What is 'أخضر' in English?", options: ["Yellow", "White", "Black", "Green"], answer: 3 },
          { q: "How do you say 'White' in Arabic?", options: ["أصفر", "أبيض", "أحمر", "أزرق"], answer: 1 },
          { q: "What does 'أسود' mean?", options: ["Black", "Red", "Blue", "Green"], answer: 0 }
        ]
      }
    ]
  },
  en: {
    name: "English", flag: "🇬🇧", color: "#7C3AED",
    lessons: [
      {
        id: "en_1", title: "Greetings", icon: "👋", xp: 10, requiredLevel: 0,
        vocab: [
          { word: "Hello", translation: "مرحبا / Bonjour / Hola", example: "Hello, how are you?" },
          { word: "Thank you", translation: "شكرا / Merci / Gracias", example: "Thank you very much!" },
          { word: "Goodbye", translation: "مع السلامة / Au revoir / Adiós", example: "Goodbye, see you soon!" },
          { word: "Please", translation: "من فضلك / S'il vous plaît / Por favor", example: "Please help me." },
          { word: "Yes", translation: "نعم / Oui / Sí", example: "Yes, I understand." },
          { word: "No", translation: "لا / Non / No", example: "No, thank you." }
        ],
        quiz: [
          { q: "Which word means 'مرحبا' in English?", options: ["Goodbye", "Hello", "Please", "Yes"], answer: 1 },
          { q: "What does 'Thank you' express?", options: ["Greeting", "Farewell", "Gratitude", "Request"], answer: 2 },
          { q: "Which is the correct farewell?", options: ["Hello", "Please", "Yes", "Goodbye"], answer: 3 },
          { q: "Which word is used to make a polite request?", options: ["No", "Please", "Hello", "Yes"], answer: 1 },
          { q: "What is the opposite of 'Yes'?", options: ["Hello", "Please", "No", "Goodbye"], answer: 2 }
        ]
      },
      {
        id: "en_2", title: "Common Verbs", icon: "⚡", xp: 15, requiredLevel: 1,
        vocab: [
          { word: "Run", translation: "يجري / Courir / Correr", example: "I run every morning." },
          { word: "Eat", translation: "يأكل / Manger / Comer", example: "I eat breakfast at 8." },
          { word: "Sleep", translation: "ينام / Dormir / Dormir", example: "I sleep 8 hours a night." },
          { word: "Read", translation: "يقرأ / Lire / Leer", example: "I read books every day." },
          { word: "Write", translation: "يكتب / Écrire / Escribir", example: "I write in my journal." },
          { word: "Speak", translation: "يتكلم / Parler / Hablar", example: "I speak English." }
        ],
        quiz: [
          { q: "Which verb means 'يأكل'?", options: ["Run", "Sleep", "Eat", "Read"], answer: 2 },
          { q: "What does 'Write' mean in Arabic?", options: ["يقرأ", "ينام", "يكتب", "يجري"], answer: 2 },
          { q: "Which word means 'Dormir' in English?", options: ["Run", "Sleep", "Eat", "Speak"], answer: 1 },
          { q: "What does 'Speak' mean?", options: ["Write", "Run", "Read", "Talk/Speak"], answer: 3 },
          { q: "Which verb means 'Lire' in English?", options: ["Write", "Run", "Read", "Eat"], answer: 2 }
        ]
      },
      {
        id: "en_3", title: "Family", icon: "👨‍👩‍👧", xp: 15, requiredLevel: 2,
        vocab: [
          { word: "Mother", translation: "أم / Mère / Madre", example: "My mother is kind." },
          { word: "Father", translation: "أب / Père / Padre", example: "My father is tall." },
          { word: "Sister", translation: "أخت / Sœur / Hermana", example: "My sister is young." },
          { word: "Brother", translation: "أخ / Frère / Hermano", example: "My brother is funny." },
          { word: "Family", translation: "عائلة / Famille / Familia", example: "I love my family." },
          { word: "Child", translation: "طفل / Enfant / Niño", example: "The child is happy." }
        ],
        quiz: [
          { q: "What is 'Mère' in English?", options: ["Father", "Sister", "Mother", "Brother"], answer: 2 },
          { q: "Which word means 'أخ'?", options: ["Sister", "Brother", "Father", "Child"], answer: 1 },
          { q: "What does 'Family' mean in Spanish?", options: ["Madre", "Hermano", "Niño", "Familia"], answer: 3 },
          { q: "Which word means 'طفل'?", options: ["Family", "Child", "Sister", "Brother"], answer: 1 },
          { q: "What is 'Frère' in English?", options: ["Father", "Mother", "Sister", "Brother"], answer: 3 }
        ]
      }
    ]
  }
};
