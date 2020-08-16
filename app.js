function populate(){
	if(quiz.isEnded()){
		showScores()

	}
	else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		// show choices
		var choices=quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length;i++){
			var element=document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
			
		}
		showProgress();
	}
}

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
}
function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;

	var element=document.getElementById("progress");
	element.innerHTML="Question " + currentQuestionNumber + " of " +quiz.questions.length;
} 



function showScores() {
	var vasanth="<p>Developed by Vasanth.S </p>"
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;                       

};
var questions=[
    new Question("Who was the first Indian woman in Space?",["Kalpana Chawla","Sunita Williams"," Koneru Humpy","None of the above"],"Kalpana Chawla"),
    new Question("Who was the first Indian woman to win the Miss World Title?",["Aishwarya Rai","Sushmita Sen","Reita Faria","Priyanka chopra"],"Reita Faria"),
    new Question("Who wrote the Indian National Anthem?",["Bakim Chandra Chatterji","Rabindranath Tagore","Swami Vivekanand","None of the above"],"Rabindranath Tagore"),
    new Question("Who is the only captain in the history of Cricket to win all ICC trophies?",["Ricky Ponting","MS Dhoni","Andrew Strauss","Virat Kohli"],"MS Dhoni"),
    new Question("Who was the first Indian Scientist to win a Nobel Prize?",["CV Raman","Amartya Sen","Hargobind Khorana","S.Chrandrashekar"],"CV Raman"),
    new Question("Which Indian got double Oscar Awards?",["A.R.Rahman","Bhanu Athaiya","Satyajit Ray","Deepa Mehta"],"A.R.Rahman"),
    new Question("Who was the first President of India?",["Abdul Kalam","Lal Bahadur Shastri","Dr. Rajendra Prasad","Zakir Hussain"],"Dr. Rajendra Prasad"),
    new Question("Who is known as Thalapathy in South Indian Cinema?",["Rajini","Ajith","Vijay","Surya"],"Vijay"),
    new Question("Which is the longest River in the world?",["Nile","Amazon","Yangtze","Niger"],"Nile"),
    new Question("Who is the first women IPS in India?",["Meera Borwankar","Kiran Bedi","Sonia Narang","Vimla Mehra"],"Kiran Bedi"),
];
var quiz = new Quiz(questions);

populate();