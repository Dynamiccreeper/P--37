class Question {

constructor(){
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement("h3");
    this.title=createElement("h2");
    this.question=createElement("h4");
    this.option1=createElement("h4");
    this.option2=createElement("h4");
    this.a=createButton("1");
          this.wrong=createElement("h4");
    this.b=createButton("2");
          this.rigth=createElement("h4");


    this.question2=createElement("h4");     
    this.op1=createElement("h4");
    this.op2=createElement("h4");

}
display(){

this.title.html("MyQuiz Game");
this.title.position(350,0);

this.question.html("Question :- Whats My Phone's Password ?");
this.question.position(100,80);
this.option1.html("1:You Dont Know");
this.option1.position(150,160);
this.option2.html("2:My FingerPrint")
this.option2.position(150,120);

//this.input.position(150,230);

this.button.mousePressed(()=>{
this.title.hide();
this.input.hide();
this.button.hide();
contestant.name = this.input.value();
contestantCount+=1;
contestant.index = contestantCount;
contestant.updateName();

//contestant.updateCount(count);

});

this.a.mousePressed(()=>{
this.wrong.html("wrong you lose (X_X)");
this.wrong.position(100,300);

})

this.b.mousePressed(()=>{
this.rigth.html("yes You are rigth(O_O)");
this.rigth.position(100,300)

this.a1=createButton("1");
this.r1=createElement("h4");
this.b1=createButton("2");
this.w1=createElement("h4");

this.question.hide();
this.option1.hide();
this.option2.hide();
this.rigth.hide();

this.question2.html("Question2 :-will you tell me your phone's passward 🤔🤔 ?");
this.question2.position(100,80);
this.op1.html("1:yes");
this.op1.position(150,160);
this.op2.html("2:no");
this.op2.position(150,120);

this.a1.mousePressed(()=>{
this.w1.html("wrong you lose (X_X)");
this.w1.position(100,300);

})

this.b1.mousePressed(()=>{

this.r1.html("yes You are rigth(O_O)");
this.r1.position(100,300);

})


})


}
}
