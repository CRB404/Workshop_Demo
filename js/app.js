var particle = new Particle();

particle.login({username: 'weftech@gmail.com', password: 'W3Ftech@spark'});


function trigerLight(){
  particle.callFunction({ deviceId: 'DEVICE_ID', name: 'FUNCTION_NAME', argument: 'STRING TO FUNCTION', auth: 'AUTH_TOKEN' });
  console.log('triggered')
}
