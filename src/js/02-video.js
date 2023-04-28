import { default as VimeoPlayer } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const storageKey = 'videoplayer-current-time';

const savedTime = localStorage.getItem(storageKey);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(storageKey, data.seconds);
  }, 1000)
);

if (savedTime) {
  player.setCurrentTime(savedTime).catch(error => console.log(error));
}

const saveCurrentTime = function (seconds) {
  localStorage.setItem(storageKey, seconds);
};
