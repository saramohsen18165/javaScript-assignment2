var Quotes=[


{
    quote: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde"
},


{

    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "― Marilyn Monroe"

},




{

    quote: "“So many books, so little time.”",
    auther: "― Frank Zappa"


},

{


    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein"

},



{
   
    quote: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero"
},



{
     quote: "You only live once, but if you do it right, once is enough.",
     auther: "― Mae West"
},



{
     quote: "“Be the change that you wish to see in the world.”",
     auther: "― Mahatma Gandhi"
},


{

    quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    auther:"― Maya Angelou"
},



{

    quote:"“A friend is someone who knows all about you and still loves you.”",
    auther:"― Elbert Hubbard"
},



{
    quote:"“Without music, life would be a mistake.”",
    auther: "― Friedrich Nietzsche, Twilight of the Idols"
}


]



function getQuote(){
    var newQuote=  Math.floor(Math.random() *Quotes.length );



    document.getElementById("quote").innerHTML=Quotes[newQuote].quote;
    document.getElementById("auther").innerHTML=Quotes[newQuote].auther;

}



