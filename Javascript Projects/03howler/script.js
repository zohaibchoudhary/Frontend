let sound = new Howl({
  src: ["enemy.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});

function start() {
  sound.play();
  console.log("Start");
}

start()