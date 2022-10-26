import { reactive } from "vue";
import { shuffle } from './helper.js'
import { collection, addDoc, getDocs, arrayRemove, query, limit, doc } from "firebase/firestore"
import db from './firebase/init.js'



export const store = reactive({
    score: 0,
    questionCount: 0,
    quizEnded: false,
    data: null,
    options: null,
    loading: true,
    currentQuestion: 0,
    step: 0,
    showAnswer: false,
    incrementScore() {
        this.score++;
    },
    restartQuiz(){
        this.score = 0
        this.step = 0
        this.questionCount = 0
        this.quizEnded = false
        this.data = null
        this.loading = true;
    },
    setQuestionCOunt(count) {
        this.questionCount = count;
    },
    startQuiz(input){
        this.optioons = input
        this.step = 1
    },
    async getData() {
        this.loading = true;
        console.log("Grabbing Data")

        const colRef = collection(db, 'Questions')

    
          // create document and return reference to it
        const questions = []
        const docRef = await getDocs(colRef)
        docRef.forEach((doc) =>{
            const info = doc.data()            
            info.shuffled_answers = shuffle([info.Answer, ...info.Others])            
            questions.push(info)
        })        
        console.log(questions)
        this.data = questions
        this.currentQuestion = 0;
        this.showAnswer = false;
        this.questionCount = questions.length;
        this.loading = false;

    
        //   // access auto-generated ID with '.id'
        //   console.log('Document was created with ID:', docRef.id)

        // const getQuestions = await getDocs(collection(db, "cities"))

        // getQuestions.foreach((que) => {
        //     // que.shuffled_answers = shuffle([
        //     //     que.Answer,
        //     //     ...que.Others,
        //     // ])
        //     // delete que.Others
        //     console.log(que)

        // })
    
      },
      checkAnswer(answer) {
        if (this.data[this.currentQuestion].Answer == answer) {
          this.incrementScore();
          this.showAnswer = true;
          this.data[this.currentQuestion].guessedRight = true;
          return;
        }
        this.data[this.currentQuestion].guessedRight = false;
        this.showAnswer = true;
      },
      getNextQuestion() {
        if (this.currentQuestion >= this.data.length - 1) {
          this.quizEnded = true;
          this.step = 2;
        }
        this.currentQuestion += 1;
        this.showAnswer = false;
      },

})