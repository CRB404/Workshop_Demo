var particle = new Particle();

particle.login({username: 'weftech@gmail.com', password: 'W3Ftech@spark'});


function greenSmall(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'green112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('green112')
}

function greenMed(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'green111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('green111')
}

function greenLarge(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'green110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('green110')
}

function yellowSmall(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'pulseRed112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('pulseRed112')
}

function yellowMed(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'pulseRed111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('pulseRed111')
}

function yellowLarge(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'pulseRed110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('pulseRed110')
}

function redSmall(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'red112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('red112')
}

function redMed(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'red111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('red111')
}

function redLarge(){
  particle.callFunction({ deviceId: '35005b001551353531343431', name: 'TableNote', argument: 'red110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('red110')
}
