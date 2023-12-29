
document.querySelector('#button').addEventListener('click', function () {
    var query = document.querySelector('#recipe').value;
    let recipeList = document.querySelector('#recipeList');

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
        headers: { 'X-Api-Key': 'gG/g5RwAoexQWf3P14E+nQ==r0oDQcmeONbXAq8w' },
        contentType: 'application/json',
        success: function (result) {
            document.querySelector('#search-recipe').style.height = '200px';
            console.log(result[0])
            result.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.innerHTML = `<div class='container' style='text-align: justify;  padding: 20px;  border: 1px solid orange; border-radius: 10px ; margin-bottom:10px; '>
<h3><strong data-aos="fade-in">Recipe:</strong>${recipe.title}</h3>
<p data-aos="fade-up" data-aos-delay="400" class="text-justify"><strong  data-aos="fade-up" data-aos-delay="300">Ingredients:</strong> ${recipe.ingredients}</p>
<p data-aos="fade-up" data-aos-delay="500" class="text-justify"><strong  data-aos="fade-up" data-aos-delay="300">Servings:</strong> ${recipe.servings}</p>
<p data-aos="fade-up" data-aos-delay="600" class="text-justify"><strong  data-aos="fade-up" data-aos-delay="300">Instructions:</strong> ${recipe.instructions}</p></div>`;
                // Append each recipe item to the recipeList or any other container
                recipeList.appendChild(recipeItem);
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            recipeItem.innerHTML =`        <p data-aos="fade-up" data-aos-delay="300" class="text-justify">No recipes found.</p>`
        }
    });
})
 
// document.querySelector('#button').addEventListener()
