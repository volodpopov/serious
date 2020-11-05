import detailsPage from '../templates/details-page.hbs';
import refsNavigation from '../refsNavigation';
import variables from '../variables.js';
import 'material-design-icons/iconfont/material-icons.css';

function monitorButtonStatusText() {
  const buttonQueue = document.querySelector('.js-btn-queue');
  const buttonWatched = document.querySelector('.js-btn-watched');
  let getlocalStorageFilmsQueue = JSON.parse(
    localStorage.getItem('filmsQueue'),
  );
  console.log(getlocalStorageFilmsQueue);
  let getlocalStorageWatchedFilm = JSON.parse(
    localStorage.getItem('filmsWatched'),
  );
  console.log(getlocalStorageWatchedFilm);
  // buttonQueue.addEventListener('click', toggleToQueue);
  // buttonWatched.addEventListener('click', toggleToWatched);
  if (
    getlocalStorageFilmsQueue &&
    getlocalStorageFilmsQueue.find(
      movie => movie.id === variables.selectFilm.id,
    )
  ) {
    buttonQueue.textContent = `<i class="material-icons">remove_from_queue</i> Delete from queue`;
  } else {
    buttonQueue.textContent = `<i class="material-icons">add_to_queue</i> Add to queue`;
  }
  if (
    getlocalStorageWatchedFilm &&
    getlocalStorageWatchedFilm.find(
      movie => movie.id === variables.selectFilm.id,
    )
  ) {
    buttonWatched.textContent = `<i class="material-icons">videocam_off</i> Delete from watched`;
  } else {
    buttonWatched.textContent = `<i class="material-icons">videocam</i> Add to watched`;
  }
}
function toggleToQueue() {
  let filmsQueueArray = [];
  let getlocalStorageFilmsQueueData = localStorage.getItem('filmsQueue');
  if (getlocalStorageFilmsQueueData !== null) {
    filmsQueueArray.push(...JSON.parse(getlocalStorageFilmsQueueData));
  }
  if (filmsQueueArray.find(movie => movie.id === variables.selectFilm.id)) {
    filmsQueueArray = filmsQueueArray.filter(
      movie => movie.id !== variables.selectFilm.id,
    );
  } else {
    filmsQueueArray.push(variables.selectFilm);
  }
  localStorage.setItem('filmsQueue', JSON.stringify(filmsQueueArray));
  // let getlocalStorageFilmsQueue_get = JSON.parse(
  //   localStorage.getItem('filmsQueue'),
  // );
  // console.log(getlocalStorageFilmsQueue_get, 'getlocalStorageFilmsQueue_get');
  variables.locStorQueue = getlocalStorageFilmsQueueData;
  console.log(variables.locStorQueue);
  monitorButtonStatusText();
}
function toggleToWatched() {
  let filmsWatchedArray = [];
  let getlocalStorageWatchedFilmData = localStorage.getItem('filmsWatched');
  if (getlocalStorageWatchedFilmData !== null) {
    filmsWatchedArray.push(...JSON.parse(getlocalStorageWatchedFilmData));
  }
  if (filmsWatchedArray.find(movie => movie.id === variables.selectFilm.id)) {
    filmsWatchedArray = filmsWatchedArray.filter(
      movie => movie.id !== variables.selectFilm.id,
    );
  } else {
    filmsWatchedArray.push(variables.selectFilm);
  }
  localStorage.setItem('filmsWatched', JSON.stringify(filmsWatchedArray));
  variables.locStorWatch = getlocalStorageWatchedFilmData;
  console.log(variables.locStorWatch);
  monitorButtonStatusText();
}
function showDetails(selectFilm) {
  const hbsLink = document.querySelector('.film-details-page-hbs');
  const murkup = detailsPage(selectFilm);
  hbsLink.innerHTML = murkup;
  monitorButtonStatusText();
}
export { showDetails, toggleToQueue, toggleToWatched };

