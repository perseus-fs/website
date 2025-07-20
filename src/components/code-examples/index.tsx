import { memo } from 'react';
import { SugarHighCode } from '../sugar-high-code';

const downloadFileTemplate = `const response = await fetch('https://perseusfs-instance.com/my-bucket/welcome.txt', {
  method: 'GET',
});
 
if (!response.ok) {
  throw new Error('Failed to download file');
}

const blob = await response.blob();
`;

const DownloadFileCode = memo(() => {
  return (
    <SugarHighCode
      language="javascript"
      className="w-full"
      code={downloadFileTemplate}
    />
  );
});
DownloadFileCode.displayName = 'DownloadFileCode';

const uploadFileTemplate = `import fs from 'fs/promises';

// using node/bun to read a file
// you can also read a file using an input element in the browser
const file = await fs.readFile('test.txt');

const response = await fetch('https://perseusfs-instance.com/upload', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream',
    'X-Filename': 'test.txt',
    'X-Bucket-Id': '1'
  },
  body: file
});

if (!response.ok) {
  throw new Error('Failed to upload file');
}

const { fileName, fileId, currentPath } = await response.json();
// fileName: 'test.txt'
// fileId: 1
// currentPath: 'my-bucket/test.txt'
`;

const UploadFileCode = memo(() => {
  return (
    <SugarHighCode
      language="javascript"
      className="w-full"
      code={uploadFileTemplate}
    />
  );
});
UploadFileCode.displayName = 'UploadFileCode';

const clientTemplate = `// perseus.js
import { PerseusFsClient } from 'perseusfs-js';

const perseusFsClient = new PerseusFsClient({
  endpoint: 'https://perseusfs-instance.com',
});

await perseusFsClient.login(
  'admin',
  'admin'
);

export { perseusFsClient };

// upload.js
import { perseusFsClient } from './perseus.js';
import fs from 'fs/promises';

const fileBuffer = await fs.readFile('test.txt');

const { fileId, fileName, currentPath } = await perseusFsClient.upload(
  'test.txt',
  'my-bucket',
  fileBuffer
);

// download.js
import { perseusFsClient } from './perseus.js';

await perseusFsClient.files.download('my-bucket', 'test.txt', './downloads/text.txt')
`;

const ClientCode = memo(() => {
  return (
    <SugarHighCode
      language="javascript"
      className="w-full"
      code={clientTemplate}
    />
  );
});
ClientCode.displayName = 'ClientCode';

export { ClientCode, DownloadFileCode, UploadFileCode };
