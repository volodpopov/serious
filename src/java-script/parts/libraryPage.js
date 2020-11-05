export { drawQueueFilmList, drawWatchedFilmList };
import refsNavigation from '../refsNavigation';
import variables from '../variables';
import { activeDetailsPage } from './navigation';
import homepageGalleryTpl from '../templates/homepage-gallery.hbs';

function drawWatchedFilmList() {
  refsNavigation.buttonFilmsWatched.classList.add('library__btn--active');
  refsNavigation.buttonShowLIstQueue.classList.remove('library__btn--active');
  const libraryPageList = document.querySelector('.library__filmList');
  let localWatch = JSON.parse(variables.locStorWatch);
  if (localWatch !== null) {
    const renderFilmsList = homepageGalleryTpl(localWatch);
    console.log(renderFilmsList);
    libraryPageList.innerHTML = renderFilmsList;
    libraryPageList.addEventListener('click',((even) => {
      console.log(even.target,`library`);
      if(even.target.tagName === "IMG"){
        const idForSearching = Number(even.target.id);
        let forThrowDataSelect ;
        console.log(idForSearching);
        localWatch.forEach(element => {
          if(element.id === idForSearching ) {
            forThrowDataSelect = element;
            activeDetailsPage(forThrowDataSelect, true);
            return;
          } 
        });
      }
    }));
} else {
  libraryPageList.innerHTML = '';
  }  
}
function drawQueueFilmList() {
  refsNavigation.buttonFilmsWatched.classList.remove('library__btn--active');
  refsNavigation.buttonShowLIstQueue.classList.add('library__btn--active');
  const libraryPageList = document.querySelector('.library__filmList');
  let localQueue = JSON.parse(variables.locStorQueue);
  if (localQueue !== null) {
    const renderFilmsList = homepageGalleryTpl(localQueue);
    libraryPageList.innerHTML = renderFilmsList;
    libraryPageList.addEventListener('click',((even) => {
      if(even.target.tagName === "IMG"){
        const idForSearching = Number(even.target.id);
        let forThrowDataSelect ;
        console.log(idForSearching);
        console.log(localQueue);
        localQueue.forEach(element => {
          if(element.id === idForSearching ) {
            forThrowDataSelect = element;
            activeDetailsPage(forThrowDataSelect, true);
            return;
          }
        });
      }
        
    }));
  } else {
    libraryPageList.innerHTML = '';
  }
}

// export { drawQueueFilmList, drawWatchedFilmList };
// import refsNavigation from '../refsNavigation';
// import variables from '../variables';
// import { activeDetailsPage } from './navigation';
// import homepageGalleryTpl from '../templates/homepage-gallery.hbs';

// function createLibraryCardFunc(renderFilmsLocal) {
//   const renderFilmsList = homepageGalleryTpl(renderFilmsLocal);
//   const libraryPageList = document.querySelector('.library__filmList');
//   libraryPageList.InnerHTML = renderFilmsList;
//   libraryPageList.addEventListener('click',((even) => {
//     console.log(even.target,`library`);
//     if(even.target.tagName === "IMG"){
//       const idForSearching = Number(even.target.id);
//       let forThrowDataSelect ;
//       console.log(idForSearching);
//       renderFilms.forEach(element => {
//         if(element.id === idForSearching ) {
//           forThrowDataSelect = element;
//           return;
//         }
//       });
//       console.log(forThrowDataSelect,`forThrowDataSelect ffffffffffffffffffff`);
//       activeDetailsPage(forThrowDataSelect, true);
//     }
//   }));
  
// }
// function drawWatchedFilmList() {
//   refsNavigation.buttonFilmsWatched.classList.add('library__btn--active');
//   refsNavigation.buttonShowLIstQueue.classList.remove('library__btn--active');
//   const libraryFilmList = document.querySelector('.library__filmList');
//   let localWatch = JSON.parse(variables.locStorWatch);
//   if (localWatch !== null) {
//     console.log(localWatch);
//     createLibraryCardFunc(localWatch);
//   } else {
//     libraryFilmList.innerHTML = '';
//   }
// }
// function drawQueueFilmList() {
//   refsNavigation.buttonFilmsWatched.classList.remove('library__btn--active');
//   refsNavigation.buttonShowLIstQueue.classList.add('library__btn--active');
//   const libraryFilmList = document.querySelector('.library__filmList');
//   let localQueue = JSON.parse(variables.locStorQueue);
//   if (localQueue !== null) {
//     console.log(localQueue);
//     createLibraryCardFunc(localQueue);
//   } else {
//     libraryFilmList.innerHTML = '';
//   }
// }
