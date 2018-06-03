function call_nyt_api(){
    var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
    url += '?' + $.param({
      'api-key': "5a22a5fe93ae4eb5b961f2668b64c438"
  });
    var age = document.getElementById("age").value;
    if(age!=""){
        url += "&age_group=" + age;
    }
    var author = document.getElementById("author").value;
    if(author!=""){
        url += "&author=" + author;
    }
    var price = document.getElementById("price").value;
    if(price!=""){
        url += "&price=" + price;
    }
    var publisher = document.getElementById("publisher").value;
    if(publisher!=""){
        url += "&publisher=" + publisher;
    }
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
        console.log(result);
        loadJson(result);
    }).fail(function(err) {
      throw err;
  });

  function loadJson(result){
      var obj = result;
      var parsing = obj.results;
      var i = 1;
      var book_specifications;
      for(var key in parsing){
          book = parsing[key];
          title = book.title;
          book_specifications = "Title: " + book.title + ", Recommended age: " + book.age_group + ", Author: " + book.author
          + ", Price: $" + book.price + ", Publisher: " + book.publisher;
          document.getElementById(i).innerHTML = book_specifications;
          i++;
      }
  }
}
