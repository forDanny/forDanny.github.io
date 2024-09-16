function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'hrt.png'; // Path to your heart image
    heart.classList.add('heart');
    
    // Randomize starting position within the top 1/4 of the screen (0 to 25vh)
    heart.style.top = `${Math.random() * 25}vh`; // Random vertical position in the top 1/4
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position

    // Set animation duration and start immediately
    heart.style.animationDuration = '5s'; 
    heart.style.animationDelay = '0s';
    heart.style.animationName = 'sway'; // Apply the sway animation

    document.body.appendChild(heart);

    // Remove heart after 5 seconds (the duration of the animation)
    setTimeout(() => {
        heart.remove();
    }, 5000); // Matches the animation duration
}

// Create a new heart every 500ms

const iLoveYouInLanguages = [
    "I love you",               // English
    "Te quiero",                // Spanish
    "Je t'aime",                // French
    "Ich liebe dich",           // German
    "Ti amo",                   // Italian
    "Eu te amo",                // Portuguese
    "Ik hou van jou",           // Dutch
    "Jag älskar dig",           // Swedish
    "Jeg elsker deg",           // Norwegian
    "Jeg elsker dig",           // Danish
    "Rakastan sinua",           // Finnish
    "Я тебя люблю",             // Russian
    "我爱你",                    // Chinese (Simplified)
    "愛してる",                   // Japanese
    "사랑해",                    // Korean
    "मैं तुमसे प्यार करता हूँ", // Hindi
    "আমি তোমায় ভালবাসি",       // Bengali
    "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ",  // Punjabi
    "હું તને પ્રેમ કરું છું",    // Gujarati
    "मी तुझ्यावर प्रेम करतो",    // Marathi
    "நான் உன்னை காதலிக்கிறேன்", // Tamil
    "నేను నిన్ను ప్రేమిస్తున్నాను", // Telugu
    "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു",  // Malayalam
    "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", // Kannada
    "میں تم سے محبت کرتا ہوں",  // Urdu
    "أحبك",                    // Arabic
    "אני אוהב אותך",           // Hebrew
    "Seni seviyorum",           // Turkish
    "دوستت دارم",               // Persian
    "Nakupenda",                // Swahili
    "Ngiyakuthanda",            // Zulu
    "Ndiyakuthanda",            // Xhosa
    "Ek het jou lief",          // Afrikaans
    "Σ' αγαπώ",                 // Greek
    "Te iubesc",                // Romanian
    "Szeretlek",                // Hungarian
    "Miluji tě",                // Czech
    "Ľúbim ťa",                 // Slovak
    "Kocham cię",              // Polish
    "Я тебе люблю",             // Ukrainian
    "Обичам те",                // Bulgarian
    "Volim te",                 // Serbian
    "Volim te",                 // Croatian
    "Volim te",                 // Bosnian
    "Ljubim te",                // Slovenian
    "Te сакам",                 // Macedonian
    "Të dua",                   // Albanian
    "Aš tave myliu",            // Lithuanian
    "Es tevi miilu",            // Latvian
    "Ma armastan sind",         // Estonian
    "Ég elska tig",             // Icelandic
    "Taim i' ngra leat",        // Irish
    "Tha gaol agam ort",        // Scottish Gaelic
    "'Rwy'n dy garu di",        // Welsh
    "Maite zaitut",             // Basque
    "T'estimo",                 // Catalan
    "Quérote",                  // Galician
    "म तिमीलाई माया गर्छु",     // Nepali
    "මම ඔබට ආදරෙයි",          // Sinhala
    "ကျွန်ုပ်သည် သင့်အား ချစ်သည်", // Burmese
    "ខ្ញុំស្រលាញ់អ្នក",       // Khmer
    "ຂໍແສງໃຈ",               // Lao
    "Kuv hlub koj",             // Hmong
    "Mo nifẹ rẹ",              // Yoruba
    "A hụrụ m gị n'anya",      // Igbo
    "እወድሻለሁ",               // Amharic
    "Waan ku jeclahay",         // Somali
    "زه تا سره مينه لرم",       // Pashto
    "Ez hej te dikim",          // Kurdish
    "მიყვარხარ",                // Georgian
    "Ես քեզ սիրում եմ",         // Armenian
    "Mən səni sevirəm",         // Azerbaijani
    "Мен сені сүйемін",         // Kazakh
    "Men seni sevaman",         // Uzbek
    "Men seni söýýärin",        // Turkmen
    "Ман туро дӯст медорам",    // Tajik
    "Би чамд хайртай",          // Mongolian
    "म तिमीलाई माया गर्छु",     // Nepali
    "ຂໍແສງໃຈ",               // Lao
    "Kuv hlub koj",             // Hmong
    "Mo nifẹ rẹ",              // Yoruba
    "A hụrụ m gị n'anya",      // Igbo
    "Nakupenda",                // Swahili
    "Ndinokuda",                // Shona
    "Kea u rata",               // Sesotho
    "Ndimakukonda",             // Chichewa
    "Me dɔ wo",                 // Twi
    "Nopp naa la",              // Wolof
    "Mepa wo kyɛw",             // Ewe
    "Ndiyakuthanda",            // Xhosa
    "Ngiyakuthanda",            // Zulu
    "Nalikupenda",              // Bemba
    "Ndagukunda",               // Kinyarwanda
    "Waan ku jeclahay",         // Somali
    "Ina son ku",              // Hausa
    "Au domoni iko",           // Fijian
    "Ou te alofa ia te oe",    // Samoan
    "Ofa atu",                 // Tongan
    "Aloha wau ia oe"          // Hawaiian
];
const textElement = document.querySelector('.text');
let currentIndex = 0;

function updateText() {
    textElement.classList.remove('fade-in');
    setTimeout(() => {
        textElement.textContent = iLoveYouInLanguages[currentIndex];
        textElement.classList.add('fade-in');
        currentIndex = (currentIndex + 1) % iLoveYouInLanguages.length;
    }, 500); // Short delay before changing text
}

setInterval(createHeart, 500);
setInterval(updateText, 3000);