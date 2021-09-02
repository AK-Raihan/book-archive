

const searchBook = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value= '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs))
}


const displayBook = books=>{
    const resultDiv = document.getElementById('result-div');
    resultDiv.textContent="";
    
    books.forEach(book=>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
          <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${book.title}</h4>
            <h6 class="card-text">${book.publisher} Publication</h6>
            <p class="card-text">${book.first_publish_year}</p>
          </div>
        </div>  
     `
     resultDiv.appendChild(div);
    })
}