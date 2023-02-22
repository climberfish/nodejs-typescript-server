import fs from 'fs';
import path from 'path';

const baseDir = path.join(__dirname, '/../.data/');

const getFileName = (dir: string, file: string) => `${baseDir}${dir}/${file}.json`;

const create = (dir: string, file: string, data: object) => {
  const filename = getFileName(dir, file);
  const mkdirErr = fs.mkdirSync(path.dirname(filename), { recursive: true });
  if (mkdirErr) throw new Error(mkdirErr);

  const fileDescriptor = fs.openSync(filename, 'wx');
  if (!fileDescriptor) throw Error('Could not create new file, it may already exist');

  const stringData = JSON.stringify(data);
  fs.writeFileSync(fileDescriptor, stringData);

  fs.closeSync(fileDescriptor);

  return data;
};

const read = (dir: string, file: string) => {
  const filename = getFileName(dir, file);
  return fs.readFileSync(filename, 'utf-8');
};

const update = (dir: string, file: string, data: object) => {
  const filename = getFileName(dir, file);
  const fileDescriptor = fs.openSync(filename, 'r+');

  fs.truncateSync(filename);

  const stringData = JSON.stringify(data);
  fs.writeFileSync(fileDescriptor, stringData);

  fs.closeSync(fileDescriptor);

  return data;
};

const deleteFn = (dir: string, file: string) => {
  const filename = getFileName(dir, file);
  fs.unlinkSync(filename);
};

export default {
  create, read, update, delete: deleteFn,
};
