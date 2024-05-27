document.querySelector('#button').addEventListener('click', function () {
    let query = document.querySelector('#recipe').value;
    let recipeList = document.querySelector('#recipeList');
    let notfound = document.querySelector('#notfound');
    const bodyc = document.querySelector('body')
    if(query== ''){
        // alert('I Dont want to be a Empty Box ')
        // document.querySelector('#alertText').innerHTML='I Dont want to be a Empty Box '
       setTimeout(function(){
        document.querySelector('#recipe').placeholder='I Dont want to be an Empty Box';
       },1)
       setTimeout(function(){
        document.querySelector('#recipe').placeholder='Find Your Favorite Dish 😋';
       },3000)
        return false;
       }
       recipeList.innerHTML = '';
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
        headers: { 'X-Api-Key': 'gG/g5RwAoexQWf3P14E+nQ==r0oDQcmeONbXAq8w' },
        contentType: 'application/json',
        success: function (result) {
       if(result.length == 0 || result == undefined) {
        const recipeItem = document.createElement('div');
        recipeItem.innerHTML = `<div class="w3-animate-top rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-3 origin-center" style="margin-top: 20px;">
        <div class="flex items-center justify-between space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-yellow-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div>
            <p class=" size text-sm font-medium text-yellow-600">
             Invalid Prompt
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
      `
      notfound.appendChild(recipeItem);
      setTimeout(function () {
    notfound.style.translateX = 'left'
        notfound.parentNode.removeChild(notfound);
      },5000)
       }
       else
            document.querySelector('#search-recipe').style.height = '200px';
            bodyc.style.backgroundColor = 'white'
            console.log(result[0])
            result.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.innerHTML = `<div data-aos="fade-in"  data-aos-offset="-480" id="animation" class='container recipelist' style=' background-color:#F5F5F5; box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);  padding: 20px;  border: .2px solid gray;   border-width: thin; border-radius: 10px ; margin-bottom:25px; '>
<h3 data-aos="fade-up" data-aos-offset="-480"  ><strong>Recipe:</strong>${recipe.title}</h3> <hr>
<p data-aos="fade-up"  data-aos-offset="-480"  style='text-align: justify;'><strong>Ingredients:</strong> ${recipe.ingredients}</p>
<p data-aos="fade-up" data-aos-offset="-480"   ><strong>Servings:</strong> ${recipe.servings}</p>
<p data-aos="fade-up" data-aos-offset="-480"   style='text-align: justify;'><strong>Instructions:</strong> ${recipe.instructions}</p></div>`;
                // Append each recipe item to the recipeList or any other container
                recipeList.appendChild(recipeItem);
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
           // recipeItem.innerHTML =` <p data-aos="fade-up" data-aos-delay="300" class="text-justify">No recipes found.</p>`
        }
    });
})
$(document).ready(function() {
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});
// document.querySelector('#button').addEventListener()
