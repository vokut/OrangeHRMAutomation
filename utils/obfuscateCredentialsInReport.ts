import fs from 'fs';
import path from 'path';

const directory = path.resolve('allure-results'); 

const fillNamePattern1 = /("name"\s*:\s*)"Fill\s*\\.*\\"\s*getByPlaceholder\('Username'\)"/g;
const fillNamePattern2 = /("name"\s*:\s*)"Fill\s*\\.*\\"\s*getByPlaceholder\('Password'\)"/g;

const jsonFiles = fs.readdirSync(directory)
  .filter(file => file.endsWith('.json'));

for (const file of jsonFiles) {
  const fullPath = path.join(directory, file);
  const content = fs.readFileSync(fullPath, 'utf-8');

  if (fillNamePattern1.test(content)) {
    let updated = content.replace(fillNamePattern1, '"name" : "Fill ***** getByPlaceholder(\'Username\')"');
    updated = updated.replace(fillNamePattern2, '"name" : "Fill ***** getByPlaceholder(\'Password\')"');
    fs.writeFileSync(fullPath, updated, 'utf-8');
    console.log(`Sanitized: ${file}`);
  }
}