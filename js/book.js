
// onclick function
const searchBook = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const errorDiv = document.getElementById('error-div');
    if(searchText===''){
      errorDiv.innerText = 'Please write something'
    }

    else{
      const url = `https://openlibrary.org/search.json?q=${searchText}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayBook(data.docs))
      errorDiv.innerText = '';
      searchField.value= '';
    }

}

// display result
const displayBook = books=>{
  const errorDiv = document.getElementById('error-div');
  const countResult = document.getElementById('count-result')
    const resultDiv = document.getElementById('result-div');
    resultDiv.textContent="";

    if(books.length===0){
      errorDiv.innerText = 'Not found result'
    }

    books.forEach(book=>{
        const div = document.createElement('div');
        div.classList.add('col');
        countResult.innerText = `Total Books: ${books.length}`;
        div.innerHTML=`
        <div class="card h-50">
          <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Book name: ${book.title}</h4>
            <h6 class="card-text">Author Name: ${book.author_name}</h6>
            <h6 class="card-text">Publication: ${book.publisher}</h6>
            <p class="card-text"> First publish: ${book.first_publish_year}</p>
            <p class="card-text">Re-Publish: ${book.publish_date}</p>
          </div>
        </div>  
     `
     resultDiv.appendChild(div);
    })
}