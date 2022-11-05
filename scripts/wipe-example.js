import fs from 'fs';

const pathsToPurge = [
  'components/CoolRectangle',
  'hooks/useToggle',
  'pages/MainPage',
]
pathsToPurge
  .map(path => 'src/' + path)
  .forEach((path, index, paths) => {
    console.log(`[${index+1}/${paths.length}] Deleting path ${path}`)
    fs.rmSync(path, {recursive: true})
  });