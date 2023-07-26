class TerminalEmulator {
  constructor(lang,os) {
    this.language = lang;
    this.os_type = os;
    this.to_run = '';
  }
  run(cmd) {
    this.to_run += cmd;
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
