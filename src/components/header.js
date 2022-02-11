const Header = (title, date, temp) => {
  
  // create elements
  const headerDiv = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // appendchild/ heirarchy

  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerTemp);

  // add attributes

  headerDiv.classList.add("header");
  headerDate.classList.add("date");
  headerDate.textContent = `${date}`;
  headerTitle.textContent = `${title}`;
  headerTemp.classList.add("temp");
  headerTemp.textContent = `${temp}`;

  return headerDiv;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const entryPoint = document.querySelector(".header-container");

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector. (header-container?)
  //
  const newHeader = Header("Bloom Tech Times", "January 6, 2021", "26°");
  document.querySelector(selector).appendChild(newHeader);

}

export { Header, headerAppender }
