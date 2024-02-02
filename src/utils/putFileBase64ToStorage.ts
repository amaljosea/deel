import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

export const putFileBase64ToStorage = async (fileName: string) => {
  const response = await fetch(`payslips/${fileName}`);
  const arrayBuffer = await response.arrayBuffer();
  const base64String = btoa(
    new Uint8Array(arrayBuffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ''
    )
  );
  const dataURL = `data:@file/pdf;base64,${base64String}`;
  await Filesystem.writeFile({
    path: fileName,
    data: dataURL,
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
    recursive: true,
  });
};
