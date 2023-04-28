import { default as VimeoPlayer } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const storageKey = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(storageKey, data.seconds);
  }, 1000)
);
 
const savedTime = localStorage.getItem(storageKey);

if (savedTime) {
  player.setCurrentTime(savedTime).catch(error => console.log(error));
}

const saveCurrentTime = function (seconds) {
  localStorage.setItem(storageKey, seconds);
};
