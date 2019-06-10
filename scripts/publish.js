const shell = require('shelljs');

function exec(str) {
  const s = shell.exec(str);
  if (s.code !== 0) {
    throw s.stderr;
  }
}

const $BRANCH = process.env.BRANCH;

try {
  exec('git config --global user.name "antd-mobile-bot"');
  exec('git config --global user.email "antd-mobile-bot@darlin.me"');

  exec('git rev-parse --abbrev-ref HEAD');

  if ($BRANCH === 'alpha') {
    exec('npm run pub:alpha');
    shell.echo('Publish alpha success!!');
  } else {
    exec('npm run pub');
    shell.echo('Publish success!!');
  }
  exec('git push origin $(git rev-parse --abbrev-ref HEAD):develop');
  shell.echo('Push to github develop success!!');
} catch (error) {
  console.error('Publish error');
  process.exit(1);
}
