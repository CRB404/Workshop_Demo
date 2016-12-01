var particle = new Particle();

particle.login({username: 'weftech@gmail.com', password: 'W3Ftech@spark'});


function greenSmall(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'green112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('greenSmall')
}

function greenMed(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'green111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('greenMed')
}

function greenLarge(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'green110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('greenLarge')
}

function yellowSmall(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'yellow112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('yellowSmall')
}

function yellowMed(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'yellow111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('yellowMed')
}

function yellowLarge(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'yellow110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('yellowLarge')
}

function redSmall(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'red112', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('redSmall')
}

function redMed(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'red111', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('redMed')
}

function redLarge(){
  particle.callFunction({ deviceId: '23003c000947343432313031', name: 'TableNote', argument: 'red110', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });
  console.log('redLarge')
}
