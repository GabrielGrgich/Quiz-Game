class question {
    constructor(){
        this.title=createElement("h1")
        this.input1=createInput("Enter Name Here")
        this.input2=createInput("Enter Answer Here")
        this.button=createButton("submit")
        this.question=createElement("h3")
        this.option1=createElement("h4")
        this.option2=createElement("h4")
        this.option3=createElement("h4")
        this.option4=createElement("h4")
    }
    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }
    display(){
        this.title.html("My Quiz Game")
        this.title.position(400,20)
        this.question.html("question: what starts and ends with the letter E, but has only one letter?")
        this.question.position(400,80)
        this.option1.html("1: everyone")
        this.option1.position(400,100)
        this.option2.html("2: envelope")
        this.option2.position(400,120)
        this.option3.html("3: estimate")
        this.option3.position(400,140)
        this.option4.html("4: example")
        this.option4.position(400,160)
        this.input1.position(400,240)
        this.input2.position(440,240)
        this.button.position(500,270)

        this.button.mousePressed(()=>{
        this.title.hide()
        this.input1.hide()
        this.button.hide()
        contestant.name = this.input1.value()
        contestaantCount+=1
        contestant.index=contestantCount
        contestant.update()
        contestant.updateCount(contestantCount)
        })
    }
}

/*In Question.js file:
Create display( ) function and inside it assign the position, text, heading names to all the HTML elements you create in the constructor.
Make sure the project works before you submit it.*/