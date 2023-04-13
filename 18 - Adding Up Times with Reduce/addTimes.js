const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// Convert Nodelists to Arrays using spread or Array.from

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    // Split and convert to numbers
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

let timeStamp;

if (mins === 0) {
  timeStamp = `${secondsLeft}`;
} else if (hours === 0) {
  timeStamp = `${mins}:${secondsLeft}`;
} else {
  timeStamp = `${hours}:${mins}:${secondsLeft}`;
}

console.log(timeStamp);
