import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const assetsRoot = join(projectRoot, 'src', 'assets');
const outputFile = join(projectRoot, 'src', 'app', 'generated', 'project-images.generated.ts');

const imageExtensions = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.bmp',
  '.avif',
]);

const readFolderAsAssetPaths = (folderName) => {
  const folderPath = join(assetsRoot, folderName);
  if (!existsSync(folderPath)) {
    return [];
  }

  return readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(name.slice(name.lastIndexOf('.')).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((name) => posix.join('assets', folderName, name));
};

const mergeUnique = (paths) => Array.from(new Set(paths));

const tasklistAppImages = readFolderAsAssetPaths('tasklist-app-images');
const tasklistWebImages = mergeUnique([
  ...readFolderAsAssetPaths('tasklist_web_images'),
  ...readFolderAsAssetPaths('tasklist-web-images'),
]);
const javascriptCompilerImage = ['assets/javascriptcompiler.png'];

const generatedContent = `/* AUTO-GENERATED FILE. DO NOT EDIT.
 * Run "npm run generate:project-images" to regenerate.
 */

export const TASKLIST_APP_IMAGES: string[] = ${JSON.stringify(tasklistAppImages, null, 2)};

export const TASKLIST_WEB_IMAGES: string[] = ${JSON.stringify(tasklistWebImages, null, 2)};

export const JAVASCRIPT_COMPILER_IMAGE: string[] = ${JSON.stringify(javascriptCompilerImage, null, 2)};
`;

mkdirSync(dirname(outputFile), { recursive: true });
writeFileSync(outputFile, generatedContent, 'utf-8');

console.log(`Generated ${relative(projectRoot, outputFile)}`);
