class BookLibrary{
    books={
        "alchemist":{book_name:"alchemist",author:"rowling",price:200,no_of_copies:100,sold:10},
        "1984":{book_name:"1984",author:"george orwell",price:300,no_of_copies:250,sold:20},
        "The little prince":{book_name:"The little prince",author:"ivan minatti",price:400,no_of_copies:90,sold:8},
        "The giver":{book_name:"The giver",author:"lois lowry",price:500,no_of_copies:300,sold:11},
        "Divergent":{book_name:"Divergent",author:"veronica roth",price:320,no_of_copies:150,sold:15},
    }


findBook(book_name){
        
            let data = this.books()
            if(book_name in data){
            console.log("Book found");
        }
    
        else {
            console.log("Book not found");
        }
}
}

var obj=new books("divergent")
