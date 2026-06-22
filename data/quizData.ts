export type QuizArea = 'vocabulary' | 'reading1' | 'reading2' | 'all';

export type QuizQuestion = {
  id: string;
  area: Exclude<QuizArea, 'all'>;
  type: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  lesson: string;
  passageTitle?: string;
  passage?: string;
  evidence?: string;
  retryGuide: string;
};

export const AREA_LABELS: Record<QuizArea, string> = {
  vocabulary: '단어',
  reading1: 'Reading 1',
  reading2: 'Reading 2',
  all: '전체'
};

export const quizData: QuizQuestion[] = [
  {
    "id": "vocab-1",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "a thing that you do for interest and to achieve a specific aim",
    "choices": [
      "activity [명사]",
      "windy [형용사]",
      "flag [명사]",
      "flutter [동사]"
    ],
    "answerIndex": 0,
    "explanation": "activity은/는 '활동'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-2",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "with a lot of wind",
    "choices": [
      "flag [명사]",
      "flutter [동사]",
      "hold [동사]",
      "windy [형용사]"
    ],
    "answerIndex": 3,
    "explanation": "windy은/는 '바람이 많이 부는'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-3",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "a piece of cloth used to attract attention or a symbol of a nation or a company",
    "choices": [
      "hold [동사]",
      "kite [명사]",
      "flag [명사]",
      "flutter [동사]"
    ],
    "answerIndex": 2,
    "explanation": "flag은/는 '깃발'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-4",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "to move lightly and quickly as when a bird or insect moves its wings",
    "choices": [
      "shake [동사]",
      "flutter [동사]",
      "hold [동사]",
      "kite [명사]"
    ],
    "answerIndex": 1,
    "explanation": "flutter은/는 '펄럭이다'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-5",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "to have something or someone in your hand, hands, or arms",
    "choices": [
      "hold [동사]",
      "kite [명사]",
      "shake [동사]",
      "inside out [구문]"
    ],
    "answerIndex": 0,
    "explanation": "hold은/는 '들다, 잡다'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-6",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "a toy made of a light frame made of paper, cloth, plastic etc. that you fly in the air with a long string",
    "choices": [
      "shake [동사]",
      "inside out [구문]",
      "lift [동사]",
      "kite [명사]"
    ],
    "answerIndex": 3,
    "explanation": "kite은/는 '연'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-7",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "to move something quickly back and forth or up and down with short, quick movements",
    "choices": [
      "lift [동사]",
      "roof [명사]",
      "shake [동사]",
      "inside out [구문]"
    ],
    "answerIndex": 2,
    "explanation": "shake은/는 '흔들다'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-8",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "the inner part becomes the outer part",
    "choices": [
      "enjoy [동사]",
      "inside out [구문]",
      "lift [동사]",
      "roof [명사]"
    ],
    "answerIndex": 1,
    "explanation": "inside out은/는 '안팎이 뒤집힌'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-9",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "to move something or somebody upwards to a higher position in the air",
    "choices": [
      "lift [동사]",
      "roof [명사]",
      "enjoy [동사]",
      "jogging [명사]"
    ],
    "answerIndex": 0,
    "explanation": "lift은/는 '들어 올리다'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "vocab-10",
    "area": "vocabulary",
    "type": "단어 뜻 찾기",
    "question": "the structure that covers the top of a building, vehicle, etc.",
    "choices": [
      "enjoy [동사]",
      "jogging [명사]",
      "umbrella [명사]",
      "roof [명사]"
    ],
    "answerIndex": 3,
    "explanation": "roof은/는 '지붕'라는 뜻이므로 정답입니다.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "retryGuide": "영어 뜻을 읽고 가장 알맞은 단어를 고르세요."
  },
  {
    "id": "r1-1",
    "area": "reading1",
    "type": "원인·이유형",
    "question": "Why does the flag flutter quickly?",
    "choices": [
      "Because Mina is indoors.",
      "Because the afternoon is windy.",
      "Because the flag is heavy.",
      "Because the kite is broken."
    ],
    "answerIndex": 1,
    "explanation": "The passage says it is a windy afternoon, so the flag moves quickly.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "It is a windy afternoon. Mina holds a bright flag in the playground.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-2",
    "area": "reading1",
    "type": "결과·사건 흐름형",
    "question": "What happens after Mina holds the flag?",
    "choices": [
      "The flag flutters quickly.",
      "She goes fishing.",
      "The roof falls down.",
      "She stops all activities."
    ],
    "answerIndex": 0,
    "explanation": "The next event is that the flag flutters quickly.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "Mina holds a bright flag in the playground. The flag flutters quickly,",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-3",
    "area": "reading1",
    "type": "문장 재표현형",
    "question": "Which sentence best matches “the kite rises high”?",
    "choices": [
      "The kite goes up into the air.",
      "The kite goes under the desk.",
      "The kite becomes wet.",
      "The kite disappears."
    ],
    "answerIndex": 0,
    "explanation": "Rises high means goes up into the air.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "her kite rises high above the trees.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-4",
    "area": "reading1",
    "type": "세부 내용형",
    "question": "What turns inside out?",
    "choices": [
      "A flag",
      "An umbrella",
      "A boat",
      "A roof"
    ],
    "answerIndex": 1,
    "explanation": "The umbrella turns inside out.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "A strong wind shakes her umbrella and turns it inside out.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-5",
    "area": "reading1",
    "type": "감정·반응형",
    "question": "How does Mina feel about windy days?",
    "choices": [
      "She laughs and enjoys them.",
      "She feels angry.",
      "She sleeps.",
      "She cries loudly."
    ],
    "answerIndex": 0,
    "explanation": "Mina laughs because the activities are exciting.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "Mina laughs because windy days make outdoor activities exciting.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-6",
    "area": "reading1",
    "type": "어휘 추론형",
    "question": "In the passage, “flutters” means the flag ____.",
    "choices": [
      "moves lightly and quickly",
      "stays still",
      "falls asleep",
      "becomes a roof"
    ],
    "answerIndex": 0,
    "explanation": "Flutter means to move lightly and quickly.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "The flag flutters quickly,",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-7",
    "area": "reading1",
    "type": "장소 파악형",
    "question": "Where is Mina?",
    "choices": [
      "In the playground",
      "On a boat",
      "In a kitchen",
      "At the shore"
    ],
    "answerIndex": 0,
    "explanation": "The passage directly says she is in the playground.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "Mina holds a bright flag in the playground.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-8",
    "area": "reading1",
    "type": "원인·이유형",
    "question": "Why does Mina laugh?",
    "choices": [
      "The kite is lost.",
      "Windy days make activities exciting.",
      "The umbrella is new.",
      "She dislikes flags."
    ],
    "answerIndex": 1,
    "explanation": "The final sentence explains why she laughs.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "Mina laughs because windy days make outdoor activities exciting.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-9",
    "area": "reading1",
    "type": "결과·사건 흐름형",
    "question": "What does the strong wind do first in the sentence?",
    "choices": [
      "It shakes her umbrella.",
      "It cooks dinner.",
      "It catches fish.",
      "It closes school."
    ],
    "answerIndex": 0,
    "explanation": "The sentence says the wind shakes the umbrella before turning it inside out.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "A strong wind shakes her umbrella and turns it inside out.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r1-10",
    "area": "reading1",
    "type": "주제 파악형",
    "question": "What is the best title for the passage?",
    "choices": [
      "A Fun Windy Afternoon",
      "A Quiet Rainy Night",
      "A Fisherman’s Boat",
      "A New Classroom"
    ],
    "answerIndex": 0,
    "explanation": "The whole passage is about fun activities on a windy afternoon.",
    "lesson": "Unit 2 - Lesson 1 Wind Blows!",
    "passageTitle": "Wind Blows!",
    "passage": "It is a windy afternoon. Mina holds a bright flag in the playground. The flag flutters quickly, and her kite rises high above the trees. A strong wind shakes her umbrella and turns it inside out. Mina laughs because windy days make outdoor activities exciting.",
    "evidence": "It is a windy afternoon.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-1",
    "area": "reading2",
    "type": "원인·이유형",
    "question": "Why does the fisherman decide to return?",
    "choices": [
      "The weather may get worse.",
      "He forgot his flag.",
      "The shore is too quiet.",
      "He wants to fly a kite."
    ],
    "answerIndex": 0,
    "explanation": "He returns because the sky and wind warn him.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "He watches the sky and decides to return before the weather gets worse.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-2",
    "area": "reading2",
    "type": "세부 내용형",
    "question": "What does the wind lift?",
    "choices": [
      "His small boat",
      "His umbrella",
      "A classroom desk",
      "A bright flag"
    ],
    "answerIndex": 0,
    "explanation": "The waves lift his small boat.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "The waves lift his small boat,",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-3",
    "area": "reading2",
    "type": "결과·사건 흐름형",
    "question": "What does he do after the waves lift the boat?",
    "choices": [
      "He holds the rope tightly.",
      "He starts jogging.",
      "He paints the roof.",
      "He buys a kite."
    ],
    "answerIndex": 0,
    "explanation": "He responds by holding the rope tightly.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "The waves lift his small boat, so he holds the rope tightly.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-4",
    "area": "reading2",
    "type": "문장 재표현형",
    "question": "Which sentence best matches “return before the weather gets worse”?",
    "choices": [
      "Go back before it becomes more dangerous.",
      "Stay until nighttime.",
      "Sleep on the boat.",
      "Invite more fish."
    ],
    "answerIndex": 0,
    "explanation": "Return means go back.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "decides to return before the weather gets worse.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-5",
    "area": "reading2",
    "type": "장소 파악형",
    "question": "Where does he enjoy the cool wind safely?",
    "choices": [
      "On the shore",
      "Under the water",
      "On a roof",
      "Inside a train"
    ],
    "answerIndex": 0,
    "explanation": "The final sentence says he is back on the shore.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "Back on the shore, he enjoys the cool wind safely",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-6",
    "area": "reading2",
    "type": "어휘 추론형",
    "question": "In the passage, “tightly” means ____.",
    "choices": [
      "firmly or strongly",
      "slowly and sadly",
      "in a silly way",
      "with no hands"
    ],
    "answerIndex": 0,
    "explanation": "Holding tightly means holding firmly.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "he holds the rope tightly.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-7",
    "area": "reading2",
    "type": "원인·이유형",
    "question": "Why does he watch the sky?",
    "choices": [
      "To check the weather",
      "To count trees",
      "To find a classroom",
      "To dry a flag"
    ],
    "answerIndex": 0,
    "explanation": "He watches the sky before choosing to return due to weather.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "He watches the sky and decides to return",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-8",
    "area": "reading2",
    "type": "세부 내용형",
    "question": "When does he go out?",
    "choices": [
      "Early",
      "At midnight",
      "After lunch only",
      "During class"
    ],
    "answerIndex": 0,
    "explanation": "The first sentence says he goes out early.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "A fisherman goes out early,",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-9",
    "area": "reading2",
    "type": "결과·사건 흐름형",
    "question": "What happens at the end?",
    "choices": [
      "He enjoys the cool wind with friends.",
      "He loses his boat forever.",
      "He turns an umbrella inside out.",
      "He flies above the trees."
    ],
    "answerIndex": 0,
    "explanation": "At the end he is safe with friends.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "he enjoys the cool wind safely with his friends.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  },
  {
    "id": "r2-10",
    "area": "reading2",
    "type": "주제 파악형",
    "question": "What lesson does the story suggest?",
    "choices": [
      "Be careful when the wind gets strong.",
      "Never look at the sky.",
      "Always stay on a boat.",
      "Wind cannot move water."
    ],
    "answerIndex": 0,
    "explanation": "The fisherman makes a safe choice in strong wind.",
    "lesson": "Unit 2 - Lesson 2 Fisherman and Wind",
    "passageTitle": "Fisherman and Wind",
    "passage": "A fisherman goes out early, but the wind becomes stronger. The waves lift his small boat, so he holds the rope tightly. He watches the sky and decides to return before the weather gets worse. Back on the shore, he enjoys the cool wind safely with his friends.",
    "evidence": "the wind becomes stronger.",
    "retryGuide": "지문을 다시 확인하고 근거 문장을 찾아 답을 고르세요."
  }
] as QuizQuestion[];
