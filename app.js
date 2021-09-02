// toggole spinner
const toggoleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
// item numbers style
const displayStyle = (style) =>{
    document.getElementById('search-numbers').style.display = style;
}

// load book  data
const loadData = () =>{
    //  display show spinner 
    toggoleSpinner('block');
    // items numbers display style
    displayStyle('none');

    // search input text value
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
   
    // clear input text
    searchInput.value = '';
    
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadData(data.docs))
};

// display Books data
const displayLoadData = (books) =>{
    // ten item show in books
     const showBooks =  books.slice(0,20);
    // search result item
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if(showBooks.length === 0 || showBooks === ''){
      const emptyValue =  document.getElementById('empty-value');
      emptyValue.style.display = 'block';
      toggoleSpinner('none');
          
    }
    else{
    
        showBooks?.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
    
        div.innerHTML = `
         <div class="card  h-100">
             <img src= https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg   class="card-img-top h-50" alt="...">
            <div class="card-body">
                 <h5 class="card-title fw-bold text-center"> ${book.title}</h5>
                 <p class="card-text text-primary fw-bold">Author Name :${book.author_name ?book.author_name: 'Author name not defined' }</p>
                 <p class="card-text text-secondary fw-bold"> Published on: ${book.publish_date ? book.publish_date: "Year is not available" }</p>

                 <p class="card-text text-secondary fw-bold">First Publish on: ${book.first_publish_year ? book.first_publish_year : "Date is not available" }</p>

                 <p class="card-text text-secondary fw-bold">Publisher : ${book.publisher ? book.publisher : "publisher is not available" }</p>
            </div>
         </div>
        `;
        searchResult.appendChild(div);
    });
      // Search item Numbers
      displayAllItem  (books.length,'block');
    // display none spinner
     toggoleSpinner('none');

     const emptyValue =  document.getElementById('empty-value');
     emptyValue.textContent = '';

    }
};


// search Items number
const displayAllItem = (itemLength,displayStyle) =>{
    const displayNumbers = document.getElementById('search-numbers');
    displayNumbers.innerText = `Search Item Number : ( ${itemLength} )`;
    displayNumbers.style.display = displayStyle;
};

