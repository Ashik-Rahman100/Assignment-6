// toggole spinner
const toggoleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
// load book  data
const loadData = () =>{
    //  display show spinner 
    toggoleSpinner('block');
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // clear input text
    searchInput.value = '';
    
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadData(data.docs))
};

// display Books data
const displayLoadData = (books) =>{
    // ten item show in books
     const showBooks =  books.slice(0,10);
    // search result item
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(showBooks.length === 0){
        document.getElementById('empty-value').style.display = 'block';
        toggoleSpinner('none');
        
    }else{
    
        showBooks?.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
    
        div.innerHTML = `
         <div class="card card-sizing">
             <img src= https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg   class="card-img-top h-50" alt="...">
            <div class="card-body">
                 <h5 class="card-title fw-bold">Book Name : ${book.title}</h5>
                 <p class="card-text text-primary ">Author Name : ${book.author_name ?book.author_name: 'Author name not defined' }</p>
                 <p class="card-text text-secondary"> Published on: ${book.publish_date ? book.publish_date: "Year is not available" }</p>

                 <p class="card-text text-secondary">First Publish on: ${book.first_publish_year ? book.first_publish_year : "Date is not available" }</p>

                 <p class="card-text text-secondary">Publisher : ${book.publisher ? book.publisher : "publisher is not available" }</p>
            </div>
         </div>
        `;
        searchResult.appendChild(div);
    });
      // Search item Numbers
      displayAllItem  (books.length,'block');
    // display none spinner
     toggoleSpinner('none');
    }
};

// search Items number
const displayAllItem = (itemLength) =>{
    const displayNumbers = document.getElementById('search-numbers');
    displayNumbers.innerText = `Search Item Number : ${itemLength}`;
    displayNumbers.style.display = 'block';
};
