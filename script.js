document.querySelector('#button').addEventListener('click', function () {
    var query = document.querySelector('#recipe').value;
    let recipeList = document.querySelector('#recipeList');
    if(query== ''){
        // alert('I Dont want to be a Empty Box ')
        // document.querySelector('#alertText').innerHTML='I Dont want to be a Empty Box '
       setTimeout(function(){
        document.querySelector('#recipe').placeholder='I Dont want to be a Empty Box';
       },1)
       setTimeout(function(){
        document.querySelector('#recipe').placeholder='Type here...';
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
       

            document.querySelector('#search-recipe').style.height = '200px';
            //console.log(result[0])
            result.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.innerHTML = `<div data-aos="fade-in"  data-aos-offset="-280" id="animation" class='container recipelist' style='padding: 20px;  border: 0.6px solid orange; border-radius: 10px ; margin-bottom:10px; '>
<h3 data-aos="fade-up" data-aos-offset="-280"  ><strong>Recipe:</strong>${recipe.title}</h3>
<p data-aos="fade-up"  data-aos-offset="-280"  style='text-align: justify;'><strong>Ingredients:</strong> ${recipe.ingredients}</p>
<p data-aos="fade-up" data-aos-offset="-280"   ><strong>Servings:</strong> ${recipe.servings}</p>
<p data-aos="fade-up" data-aos-offset="-280"   style='text-align: justify;'><strong>Instructions:</strong> ${recipe.instructions}</p></div>`;
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
 
// document.querySelector('#button').addEventListener()
