class Question {

constructor(){
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement("h3");
    this.title=createElement("h2");
    this.question=createElement("h4");
    this.option1=createElement("h4");
    this.option2=createElement("h4");
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
contestant.update();
contestant.updateCount(contestantCount);

});


}



































}