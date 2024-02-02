import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

export const getFileFromStorage = async (fileName: string) => {
  const result = await Filesystem.readdir({
    path: '',
    directory: Directory.Documents,
  });

  const file = result.files.find((i) => i.name === fileName);

  if (file) {
    const contents = await Filesystem.readFile({
      path: fileName,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    return contents.data;
  } else {
    return null;
  }
};
