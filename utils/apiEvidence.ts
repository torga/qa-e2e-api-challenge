import fs from 'fs';
import path from 'path';

export async function saveApiEvidence(
  testFolder: string,
  response: any,
  responseBody: any,
  status: 'success' | 'error',
  requestData?: any
) {

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-');

  const dir = path.join(
    'evidences',
    'api',
    testFolder,
    status
  );

  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(
    dir,
    `${timestamp}.json`
  );

  const evidence = {
    createdAt: new Date().toISOString(),

    request: requestData || null,

    response: {
      status: response.status(),
      statusText: response.statusText(),
      headers: response.headers(),
      body: responseBody
    }
  };

  fs.writeFileSync(
    filePath,
    JSON.stringify(evidence, null, 2),
    'utf-8'
  );
}