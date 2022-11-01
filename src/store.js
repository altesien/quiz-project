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
    showModal: false,
    rationale:'',
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

        const colRef = collection(db, 'Questions')

    
          // create document and return reference to it
        const questions = []
        const docRef = await getDocs(colRef)

        let limitQuestion = []

        docRef.forEach((doc) => {
            limitQuestion.push(doc)
        })

        limitQuestion = shuffle(limitQuestion).slice(0,4)


        limitQuestion.forEach((doc) =>{
            const info = doc.data() 
            
            const wrong = []
            Object.entries(info.Others).forEach(([k,item]) => {
              wrong.push(item)
            })


            info.shuffled_answers = shuffle([[info.Answer,"Result"], ...wrong])            
            questions.push(info)
        })        

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
      async saveUser(info){
        const colRef = collection(db, 'Users')
        const docRef = await addDoc(colRef, info)
        console.log("doc is",docRef.id)

      },
      checkAnswer(answer,reason) {
        if (this.data[this.currentQuestion].Answer == answer) {
          this.incrementScore();
          this.showAnswer = true;
          this.data[this.currentQuestion].guessedRight = true;
          return;
        }
        else{
          this.rationale = reason
        }
        this.data[this.currentQuestion].guessedRight = false;
        this.showAnswer = true;
      },
      getNextQuestion() {
        if (this.currentQuestion >= this.data.length - 1) {
          this.quizEnded = true;
          this.step = 2;
        }
        this.rationale = ''
        this.currentQuestion += 1;
        this.showAnswer = false;
      },

})