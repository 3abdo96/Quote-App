const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Oscar Wilde",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

function getRandomQuote() {
  const random = Number.parseInt(Math.random() * quotes.length + 1);

  document.querySelector(".quote").innerText = `"${quotes[random].quote}"`;
  document.querySelector(".author").innerText = `"${quotes[random].author}"`;
}
