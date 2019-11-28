function Get(url){
    let Httppreq = new XMLHttpRequest()
    Httppreq.open("GET",url,false)
    Httppreq.send(null)
    return Httppreq.responseText
}
let quiz = JSON.parse(Get("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"))
let n = 0
while(n < quiz.results.length){
    document.getElementById("container").innerHTML += "<p>" + quiz.results[n].question + "</p>"
    console.log(quiz.results[n].question)
    n = n + 1
}