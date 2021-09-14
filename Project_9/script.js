const sounds = ['announcement', 'chime', 'clapping', 'guitar', 'lightning', 'opening']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerHTML = sound
  document.querySelector('#buttons').appendChild(btn)

  btn.addEventListener('click', () =>{
    stopSong()
    document.querySelector(`#${sound}`).play()
  })
})

function stopSong(song) {
  sounds.forEach(sound => {
    const song = document.querySelector(`#${sound}`)
    song.pause()
    song.currentTime = 0
  })
}
