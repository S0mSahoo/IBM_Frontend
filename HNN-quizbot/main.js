const questions = ['What is the recommended daily intake of fruits for an adult?<br>', 'Which of the following is a risk factor for developing type 2 diabetes?<br>', 'What is the primary function of the liver?<br>', 'Which of the following exercises is best for improving cardiovascular health?<br>', 'What is the most common cause of foodborne illness in the United States?<br>', 'Which of the following is a symptom of a common cold?<br>', 'Which of the following is a risk factor for developing osteoporosis?<br>', 'What is the recommended duration of sleep for adults?<br>', 'Which of the following is a sign of a vitamin D deficiency?<br>', 'Which of the following is a treatment option for hypertension?<br>', 'What is the most common type of stroke?<br>', 'Which of the following is a symptom of appendicitis?<br>', 'Which of the following is a risk factor for developing kidney stones?<br>', 'What is the primary function of the immune system?<br>', 'Which of the following is a symptom of bronchitis?<br>', 'Which of the following is a risk factor for developing breast cancer?<br>', 'What is the recommended frequency for dental check-ups?<br>', 'Which of the following is a symptom of anemia?<br>', 'Which of the following is a risk factor for developing colon cancer?<br>', 'What is the primary function of the thyroid gland?<br>', 'Which of the following is a symptom of hypothyroidism?<br>', 'Which of the following is a risk factor for developing osteoarthritis?<br>', 'What is the recommended duration for taking antibiotics?<br>', 'Which of the following is a symptom of urinary tract infection (UTI)?<br>', 'Which of the following is a risk factor for developing type 2 diabetes?<br>', 'What is the recommended frequency for getting a flu shot?<br>', 'Which of the following is a symptom of hypoglycemia?<br>', 'Which of the following is a risk factor for developing asthma?<br>', 'What is the primary function of the lymph nodes?<br>', 'Which of the following is a symptom of carpal tunnel syndrome?<br>', 'Which of the following is a risk factor for developing hypertension?<br>', 'What is the recommended frequency for getting a tetanus shot?<br>', 'Which of the following is a symptom of liver disease?<br>', 'Which of the following is a risk factor for developing kidney disease?<br>', 'What is the recommended frequency for getting a mammogram?<br>', 'Which of the following is a symptom of ADHD?<br>', 'Which of the following is a risk factor for developing osteoporosis?<br>', 'What is the primary function of the kidneys?<br>', 'Which of the following is a symptom of sinusitis?<br>', 'Which of the following is a risk factor for developing cervical cancer?<br>', 'What is the recommended frequency for getting a colonoscopy?<br>', 'Which of the following is a symptom of gastritis?<br>', 'Which of the following is a risk factor for developing breast cancer?<br>', 'What is the recommended frequency for getting a dental check-up?<br>', 'Which of the following is a symptom of hypothyroidism?<br>', 'Which of the following is a risk factor for developing cataracts?<br>', 'What is the primary function of the thyroid gland?<br>', 'Which of the following is a symptom of chronic bronchitis?<br>', 'Which of the following is a risk factor for developing type 1 diabetes?<br>', 'What is the recommended frequency for getting a skin cancer screening?<br>'];
const options   = ['A) 2-3 servings<br>B) 4-5 servings<br>C) 6-7 servings<br>D) 8-10 servings<br>', 'A) Being underweight<br>B) Having a healthy diet and regular exercise<br>C) Having a family history of diabetes<br>D) Drinking plenty of water<br>', 'A) To produce insulin<br>B) To digest food<br>C) To filter waste products from the blood<br>D) To regulate body temperature<br>', 'A) Yoga<br>B) Weightlifting<br>C) Running<br>D) Swimming<br>', 'A) E. coli<br>B) Salmonella<br>C) Norovirus<br>D) Listeria<br>', 'A) Fever over 102°F (39°C)<br>B) Coughing up yellow or green mucus<br>C) Sore throat<br>D) All of the above<br>', 'A) Drinking plenty of calcium-rich milk<br>B) Getting regular exercise<br>C) Having a family history of osteoporosis<br>D) Smoking<br>', 'A) 5-7 hours<br>B) 7-9 hours<br>C) 9-11 hours<br>D) 11-13 hours<br>', 'A) Fatigue<br>B) Muscle weakness<br>C) Bone pain<br>D) All of the above<br>', 'A) Exercise regularly<br>B) Reduce sodium intake<br>C) Increase potassium intake<br>D) All of the above<br>', 'A) Hemorrhagic stroke<br>B) Ischemic stroke<br>C) Transient ischemic attack (TIA)<br>D) Subarachnoid hemorrhage<br>', 'A) Abdominal pain on one side<br>B) Fever over 100.4°F (38°C)<br>C) Nausea and vomiting<br>D) All of the above<br>', 'A) Drinking plenty of water<br>B) Eating a diet high in salt and sugar<br>C) Having a family history of kidney stones<br>D) Being overweight<br>', 'A) To regulate body temperature<br>B) To digest food<br>C) To fight infections and diseases<br>D) To breathe air<br>', 'A) Coughing up yellow or green mucus<br>B) Chest pain or tightness<br>C) Fatigue or weakness<br>D) All of the above<br>', 'A) Being overweight<br>B) Having a family history of breast cancer<br>C) Drinking plenty of green tea<br>D) Having a hysterectomy<br>', 'A) Every 6 months<br>B) Every year<br>C) Every 2-3 years<br>D) Only when you notice problems<br>', 'A) Fatigue or weakness<br>B) Shortness of breath<br>C) Pale skin<br>D) All of the above<br>', 'A) Eating a diet high in fiber<br>B) Having a family history of colon cancer<br>C) Being physically active<br>D) Smoking<br>', 'A) To regulate body temperature<br>B) To regulate metabolism and energy production<br>C) To produce hormones that control growth and development<br>D) To filter waste products from the blood<br>', 'A) Weight loss<br>B) Fatigue or weakness<br>C) Cold intolerance<br>D) All of the above<br>', 'A) Being overweight or obese<br>B) Having a family history of osteoarthritis<br>C) Engaging in regular exercise<br>D) Eating a diet high in omega-3 fatty acids<br>', 'A) 3-5 days<br>B) 5-7 days<br>C) 7-10 days<br>D) As long as symptoms persist<br>', 'A) Burning sensation while urinating<br>B) Frequent urination<br>C) Abdominal pain or discomfort<br>D) All of the above<br>', 'A) Being physically active<br>B) Eating a diet high in fiber<br>C) Being overweight or obese<br>D) Having a family history of type 2 diabetes<br>', "A) Every 2-3 years<br>B) Every year<br>C) Every 5 years<br>D) Only if you're at high risk<br>", 'A) Fatigue or weakness<br>B) Nausea and vomiting<br>C) Headache<br>D) All of the above<br>', 'A) Smoking<br>B) Having a family history of asthma<br>C) Exposure to environmental pollutants<br>D) All of the above<br>', 'A) To filter waste products from the blood<br>B) To produce white blood cells<br>C) To filter out pathogens and toxins<br>D) To store fat-soluble vitamins<br>', 'A) Pain or numbness in the fingers<br>B) Weakness in the hand or wrist<br>C) Tingling or burning sensations in the arm<br>D) All of the above<br>', 'A) Drinking plenty of water<br>B) Engaging in regular exercise<br>C) Having a family history of hypertension<br>D) Eating a diet high in sodium<br>', "A) Every 5 years<br>B) Every 10 years<br>C) Every 20 years<br>D) Only if you're at high risk<br>", 'A) Jaundice (yellowing of the skin and eyes)<br>B) Fatigue or weakness<br>C) Abdominal pain or discomfort<br>D) All of the above<br>', 'A) Drinking plenty of water<br>B) Having a family history of kidney disease<br>C) High blood pressure<br>D) Being physically active<br>', "A) Every 1-2 years<br>B) Every 3-5 years<br>C) Every 5-7 years<br>D) Only if you're at high risk<br>", 'A) Difficulty paying attention or focusing<br>B) Difficulty sleeping<br>C) Frequent mood swings<br>D) All of the above<br>', 'A) Being physically active<br>B) Having a family history of osteoporosis<br>C) Not getting enough calcium and vitamin D<br>D) All of the above<br>', 'A) To filter waste products from the blood<br>B) To regulate blood pressure<br>C) To produce urine<br>D) To produce hormones that regulate growth and development<br>', 'A) Nasal congestion or stuffiness<br>B) Headache or facial pain<br>C) Yellow or green discharge from the nose<br>D) All of the above<br>', 'A) Smoking<br>B) Not getting regular Pap smears<br>C) Having a family history of cervical cancer<br>D) All of the above<br>', "A) Every 1-2 years<br>B) Every 3-5 years<br>C) Every 5-10 years<br>D) Only if you're at high risk<br>", 'A) Abdominal pain or discomfort<br>B) Nausea and vomiting<br>C) Blood in stool or black tarry stools<br>D) All of the above<br>', 'A) Having a family history of breast cancer<br>B) Being physically active<br>C) Using hormone replacement therapy<br>D) All of the above<br>', 'A) Every 6 months<br>B) Every year<br>C) Every 2-3 years<br>D) Only if you have oral health issues<br>', 'A) Fatigue or weakness<br>B) Weight gain or loss<br>C) Cold intolerance<br>D) All of the above<br>', 'A) Smoking<br>B) Prolonged sun exposure<br>C) Family history of cataracts<br>D) All of the above<br>', 'A) To produce hormones that regulate growth and development<br>B) To produce hormones that regulate metabolism<br>C) To produce hormones that regulate heart rate<br>D) To produce hormones that regulate bone density<br>', 'A) Coughing up yellow or green mucus<br>B) Chest pain or tightness<br>C) Wheezing or shortness of breath<br>D) All of the above<br>', 'A) Being overweight or obese<br>B) Having a family history of type 1 diabetes<br>C) Being physically active<br>D) None of the above<br>', 'A) Every 6 months<br>B) Every year<br>C) Every 2-3 years<br>D) Only if you have fair skin or a family history of skin cancer<br>'];
const answers   = ['Answer: B) 4-5 servings<br>', 'Answer: C) Having a family history of diabetes<br>', 'Answer: C) To filter waste products from the blood<br>', 'Answer: C) Running<br>', 'Answer: B) Salmonella<br>', 'Answer: D) All of the above<br>', 'Answer: D) Smoking<br>', 'Answer: B) 7-9 hours<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: B) Ischemic stroke<br>', 'Answer: D) All of the above<br>', 'Answer: B) Eating a diet high in salt and sugar<br>', 'Answer: C) To fight infections and diseases<br>', 'Answer: D) All of the above<br>', 'Answer: B) Having a family history of breast cancer<br>', 'Answer: A) Every 6 months<br>', 'Answer: D) All of the above<br>', 'Answer: B) Having a family history of colon cancer<br>', 'Answer: B) To regulate metabolism and energy production<br>', 'Answer: D) All of the above<br>', 'Answer: A) Being overweight or obese<br>', 'Answer: B) 5-7 days<br>', 'Answer: D) All of the above<br>', 'Answer: C) Being overweight or obese<br>', 'Answer: B) Every year<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: C) To filter out pathogens and toxins<br>', 'Answer: D) All of the above<br>', 'Answer: D) Eating a diet high in sodium<br>', 'Answer: A) Every 5 years<br>', 'Answer: D) All of the above<br>', 'Answer: C) High blood pressure<br>', 'Answer: B) Every 3-5 years<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: A) To filter waste products from the blood<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: B) Every 3-5 years<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: B) Every year<br>', 'Answer: D) All of the above<br>', 'Answer: D) All of the above<br>', 'Answer: B) To produce hormones that regulate metabolism<br>', 'Answer: D) All of the above<br>', 'Answer: B) Having a family history of type 1 diabetes<br>', 'Answer: D) Only if you have fair skin or a family history of skin cancer<br>'];
// 8th character is option A or B or C or D

let   msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "./bot.png";
const PERSON_IMG = "./user.png";
const BOT_NAME = "HNN Quizbot";
const PERSON_NAME = "(You)";
document.querySelector('.msg-info-name').innerHTML = BOT_NAME
document.querySelector('.msg-info-time').innerHTML = formatDate(new Date())

let i = 0;
let used_nums = [];
(async () => {
  await delay(1500)
  addChat(BOT_NAME, BOT_IMG, "left", questions[i]+options[i]);
})()
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
msgerForm.addEventListener("submit", async event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  console.log(msgText);
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  if (msgText.toUpperCase() == answers[i].charAt(8)) {
    let correct_msg = "Correct! 😄 <br> The right " + answers[i];
    await delay(1500)
    addChat(BOT_NAME, BOT_IMG, "left", correct_msg, 1);
  }
  else {
    let incorrect_msg = "Sory 😓 <br> The right " + answers[i];
    await delay(1500)
    addChat(BOT_NAME, BOT_IMG, "left", incorrect_msg, 0);
  }
  setNextQuestion();
  setTimeout(() => {addChat(BOT_NAME, BOT_IMG, "left", questions[i]+options[i]);}, 1500);
});

function setNextQuestion() {
  let a = Math.round(Math.random()*50);
  while (a in used_nums) {
    a = Math.random()*50;
  }
  used_nums.push(a);
  i = a;
}

function addChat(name, img, side, text, qa=-1) {
  let bubble_type = "msg-bubble";
  switch(qa) {
    case  0: bubble_type = "msg-bubble-incorrect"; break;
    case  1: bubble_type = "msg-bubble-correct"; break;
  }
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class=${bubble_type}>
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector) {
  return document.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
