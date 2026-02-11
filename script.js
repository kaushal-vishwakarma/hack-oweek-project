const HealthCoach = {
    knowledge: {
        // --- PHYSICAL FITNESS ---
        muscle: "💪 MUSCLE BUILDING: Focus on progressive overload. Aim for 1.6g-2.2g of protein per kg of body weight. Prioritize compound lifts like Squats, Deadlifts, and Bench Press.",
        weightLoss: "📉 WEIGHT LOSS: Maintain a caloric deficit of 300-500 kcal. Focus on high-fiber foods (veggies) and keep your daily step count above 10,000 steps.",
        cardio: "🫀 CARDIO: For heart health, aim for 150 minutes of moderate-intensity aerobic activity (like brisk walking) per week.",
        flexibility: "🧘 FLEXIBILITY: Incorporate dynamic stretching before workouts and static stretching after to improve range of motion and reduce injury risk.",

        // --- NUTRITION & LIFESTYLE ---
        diet: "🥗 DIET PLAN: Use the 'Plate Method'—50% veggies, 25% protein, 25% whole grains. Avoid processed sugars and liquid calories (soda/juice).",
        water: "💧 HYDRATION: Aim for 3-4 liters of water daily. If your urine is pale yellow, you are well-hydrated.",
        sleep: "😴 SLEEP: Quality matters. Aim for 7-9 hours. Keep your room dark and cool, and avoid screens 1 hour before bedtime.",
        vitamins: "💊 VITAMINS: Vitamin D is vital for bones, Vitamin C for immunity, and B12 for energy. Consult a doctor for a blood test before heavy supplementation.",
        caffeine: "☕ CAFFEINE: Limit intake to 400mg per day. Avoid coffee after 2:00 PM to prevent it from ruining your sleep cycle.",

        // --- COMMON ILLNESSES ---
        fever: "🤒 FEVER: Rest and stay hydrated. OTC meds like Paracetamol can help. If temperature exceeds 103°F (39.4°C) or lasts 3 days, see a doctor.",
        cough: "🤧 COUGH/COLD: Honey and warm tea soothe dry coughs. For wet coughs, expectorants help. Steam inhalation is great for congestion.",
        headache: "🤕 HEADACHE: Usually caused by dehydration, stress, or eye strain. Drink water, rest in a dark room, and try peppermint oil on temples.",
        stomach: "🤢 STOMACH ACHE: For indigestion, try ginger tea. For diarrhea, follow the BRAT diet (Bananas, Rice, Applesauce, Toast).",
        soreThroat: "👄 SORE THROAT: Gargle with warm salt water 3-4 times a day and stay hydrated with warm liquids.",

        // --- SPECIALIZED TOPICS ---
        skin: "✨ SKIN CARE: Use a gentle cleanser, moisturizer, and NEVER skip SPF 30+. For acne, look for Salicylic acid or Benzoyl peroxide.",
        hair: "💇 HAIR HEALTH: Ensure diet is rich in Biotin, Iron, and Zinc. Avoid tight hairstyles and limit heat tools to prevent breakage.",
        eyes: "👀 EYE STRAIN: Follow the 20-20-20 rule—every 20 minutes, look at something 20 feet away for 20 seconds to reduce screen fatigue.",
        mental: "🧠 MENTAL HEALTH: Stress impacts physical health. Try box-breathing (4s in, 4s hold, 4s out) or daily meditation to lower Cortisol.",
        period: "🩸 PERIOD CARE: Heating pads and Ibuprofen help with cramps. Iron-rich foods (spinach/red meat) help replace blood loss.",
        pregnancy: "🤰 PREGNANCY: Prioritize Folic Acid and iron. Avoid raw fish, unpasteurized cheese, and heavy lifting. Regular checkups are a must.",
        sexEd: "🛡️ SEXUAL HEALTH: Practice safe sex with protection. Regular STI screenings are essential for active individuals. Consent is everything.",
        
        // --- PAIN & RECOVERY ---
        backPain: "🦴 BACK PAIN: Improve your posture. Strengthen your core and stretch your hip flexors. Avoid sitting for more than 60 minutes at a time.",
        jointPain: "🦵 JOINT PAIN: Try low-impact exercises like swimming. Omega-3 (fish oil) can help reduce inflammation in the joints.",
        
        // --- EMERGENCY ---
        emergency: "⚠️ EMERGENCY: If you have chest pain, sudden numbness, or difficulty breathing, CALL EMERGENCY SERVICES (911) immediately.",
        medicine: "💊 MEDICINE: General OTC: Paracetamol (fever), Ibuprofen (pain), Cetirizine (allergies). Always check the expiry date and dosage!"
    },

    processInput(input) {
        const text = input.toLowerCase();

        // Emergency Triage (Highest Priority)
        if (text.includes("chest pain") || text.includes("breathing") || text.includes("stroke")) return this.knowledge.emergency;

        // Keyword Mapping
        if (text.includes("muscle") || text.includes("bulk") || text.includes("gym")) return this.knowledge.muscle;
        if (text.includes("weight") || text.includes("lose") || text.includes("fat")) return this.knowledge.weightLoss;
        if (text.includes("cardio") || text.includes("run") || text.includes("heart")) return this.knowledge.cardio;
        if (text.includes("stretch") || text.includes("yoga") || text.includes("flexible")) return this.knowledge.flexibility;
        
        if (text.includes("diet") || text.includes("eat") || text.includes("food")) return this.knowledge.diet;
        if (text.includes("water") || text.includes("thirsty") || text.includes("hydrate")) return this.knowledge.water;
        if (text.includes("sleep") || text.includes("tired") || text.includes("insomnia")) return this.knowledge.sleep;
        if (text.includes("vitamin") || text.includes("supplement") || text.includes("zinc")) return this.knowledge.vitamins;
        if (text.includes("caffeine") || text.includes("coffee") || text.includes("energy drink")) return this.knowledge.caffeine;

        if (text.includes("fever") || text.includes("temperature")) return this.knowledge.fever;
        if (text.includes("cough") || text.includes("cold") || text.includes("flu")) return this.knowledge.cough;
        if (text.includes("headache") || text.includes("migraine")) return this.knowledge.headache;
        if (text.includes("stomach") || text.includes("digestion") || text.includes("nausea")) return this.knowledge.stomach;
        if (text.includes("throat")) return this.knowledge.soreThroat;

        if (text.includes("skin") || text.includes("face") || text.includes("acne") || text.includes("pimple")) return this.knowledge.skin;
        if (text.includes("hair") || text.includes("scalp") || text.includes("bald")) return this.knowledge.hair;
        if (text.includes("eye") || text.includes("screen") || text.includes("glasses")) return this.knowledge.eyes;
        if (text.includes("stress") || text.includes("anxious") || text.includes("depressed")) return this.knowledge.mental;
        if (text.includes("period") || text.includes("cramp") || text.includes("menstruation")) return this.knowledge.period;
        if (text.includes("pregnant") || text.includes("pregnancy") || text.includes("baby")) return this.knowledge.pregnancy;
        if (text.includes("sex") || text.includes("condom") || text.includes("protection")) return this.knowledge.sexEd;

        if (text.includes("back") || text.includes("posture") || text.includes("spine")) return this.knowledge.backPain;
        if (text.includes("joint") || text.includes("knee") || text.includes("arthritis")) return this.knowledge.jointPain;
        if (text.includes("medicine") || text.includes("pill") || text.includes("tablet")) return this.knowledge.medicine;

        return "🤖 I'm your Wellness AI. You can ask me about fitness, nutrition, mental health, skin care, or general symptoms like fever and pain!";
    }
};

// --- SOUND EFFECTS CONFIGURATION ---
const sendSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3');
const receiveSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');

sendSound.volume = 0.5;
receiveSound.volume = 0.5;

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(content, sender) {
    const div = document.createElement('div');
    div.classList.add('msg', sender);
    div.textContent = content;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleResponse() {
    const msg = userInput.value.trim();
    if (!msg) return;

    sendSound.play().catch(e => {});

    addMessage(msg, 'user');
    userInput.value = '';

    setTimeout(() => {
        const reply = HealthCoach.processInput(msg);
        receiveSound.play().catch(e => {});
        addMessage(reply, 'bot');
    }, 800);
}

sendBtn.addEventListener('click', handleResponse);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleResponse();
});
