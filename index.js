console.log('abhijit')

// // 878dd0774ba44bb9b6e5c46caf560c0c
// let source='bbc-news';
// let apikey='878dd0774ba44bb9b6e5c46caf560c0c';
// let newsAccordion = document.getElementById('newsAccordion');
//  const xhr=new XMLHttpRequest();
// xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true);
// xhr.open=function(){
//     if(this.status === 200){
//         let json=JSON.parse(this.responseText);
//         console.log(json);
//     }
//     else{
//         console.log("some error occured");
//     }
// }


// let news=`
// <div class="card">
//     <div class="card-header" id="headingOne">
//         <h5 class="mb-0">
//             <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 Collapsible Group Item #1
//             </button>
//         </h5>
//     </div>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//         <div class="card-body">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//         </div>
//     </div>
// </div>`;


console.log("This is my index js file");

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '878dd0774ba44bb9b6e5c46caf560c0c';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b style="color:black;">Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


