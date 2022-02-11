import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // create

  const cardWrapper = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  // heirarchy

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardAuthor.appendChild(cardAuthorName);
  cardImgContainer.appendChild(cardImg);

  // attributes

  cardWrapper.classList.add("card");
  cardHeadline.classList.add("headline");
  cardHeadline.textContent = `${article.headline}`;
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");
  cardImg.src = article.authorPhoto;
  cardImg.alt = "author's photo";
  cardAuthorName.textContent = `By ${article.authorName}`

  // interactivity

  cardWrapper.addEventListener("click", () => {
    console.log(article.headline);
  })

  return cardWrapper;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      // I know that there is a way to loop through the class names under .articles, but I couldn't figure it out so I wrote out each of them.
      resp.data.articles.javascript.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      });
      resp.data.articles.bootstrap.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      });
      resp.data.articles.technology.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      });
      resp.data.articles.jquery.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      });
      resp.data.articles.node.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard);
      });
    })
    .catch( err => {
      console.error(err);
    })
}

export { Card, cardAppender }
