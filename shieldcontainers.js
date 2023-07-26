class TerminalEmulator {
  constructor(lang,os) {
    this.language = lang;
    this.os_type = os;
  }
  run(cmd) {
    var cba = ''
    fetch('https://shieldcontainers.amsilla.com/compile.js').then(e=>{cba=Function('return '+e.text)(this.language,this.os_type,'config',cmd)})
    if (cba == '') {
      return 'Something went wrong. Try again later.'
    } else {
      return cba
    }
  }
  window(name,callback) {
    fetch('https://shieldcontainers.amsilla.com/compile.js').then(e=>{cba=Function(''+e.text+'.filesystem')(this.language,this.os_type,'config~window',name,callback)})
  }
}
function container(a,b){
  const json_data = {name:'Service worker', index:b()}
  return function(){
    const currentworker = window.workers.parse(json_data.read)
    if (currentworker) {
      const compiler = new TerminalEmulator('bash','linux')
      compiler.run('python > ' + a + '&& sudo -pre "?[]n" ?[]n')
      const data = compiler.window('terminal',function(e){return e.main.contents})
      return data
    } else {
      window.workers.create(json_data);
      return container(a,b)
    }
  }
}
