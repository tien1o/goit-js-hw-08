import { default as VimeoPlayer } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const storageKey = 'videoplayer-current-time';
 
const savedTime = localStorage.getItem(storageKey);

if (savedTime) {
  player.setCurrentTime(savedTime).catch(error => console.log(error));
}

const saveCurrentTime = function (seconds) {
  localStorage.setItem(storageKey, seconds);
};

player.on(
  'timeupdate',
  throttle(function (data) {
    saveCurrentTime(data.seconds);
  }, 1000)
);
