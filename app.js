
  async function getContent(){
      try {
          const response = await fetch('http://localhost:4567')
          //console.log(response)
          const data = await response.json()
          const result = data.results
          console.log(result)
          show(result)
      } catch (error) {
          console.log(error)
      }
  }    

  getContent()

  function show(movies) {
      
      let cardDescriptionDivEl = ''
      for (let movie of movies) {
          
      let gradeDivEl = document.querySelector("#grade");
      
      let cardDivEl = document.createElement('div');
      cardDivEl.classList.add('card');
      cardDivEl.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">`;
      let cardDescriptionDivEl = document.createElement('div');
      cardDescriptionDivEl.classList.add('card-description');
      cardDescriptionDivEl.innerHTML  +=`<span class="title">${movie.title.toUpperCase()}</span>`  
                                      + `<span class="left">Lançamento: ${movie.release_date}</span>`
                                      + `<span class="left">Avaliação: ${movie.vote_average.toFixed(1)}</span>`
                                      + `<span class="left">Genero: ${movie.genre_ids[0]}</span>`;

          
      let buttonDivEl = document.createElement('div');
      buttonDivEl.classList.add('button1');
      let buttonEdit = document.createElement('button');
      buttonEdit.innerText = "Editar";
      
      cardDivEl.appendChild(cardDescriptionDivEl);
      gradeDivEl.appendChild(cardDivEl);
      }
  }
