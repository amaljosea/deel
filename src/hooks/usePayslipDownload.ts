import { useEffect, useState } from 'react';
import { getFileFromStorage } from '../utils/getFileFromStorage';
import { putFileToStorage } from '../utils/putFileToStorage';

export const usePayslipDownload = (fileName: string) => {
  const [fileBase64, setFileBase64] = useState<Blob | string | null>(null);
  const [initialLoading, setInitailLoading] = useState(true);

  useEffect(() => {
    const startInitalLoad = async () => {
      const fileBase64 = await getFileFromStorage(fileName);
      setFileBase64(fileBase64);
      setInitailLoading(false);
    };

    if (fileName) {
      startInitalLoad();
    }
  }, [fileName]);

  const download = async () => {
    await putFileToStorage(fileName);
    const fileBase64 = await getFileFromStorage(fileName);
    setFileBase64(fileBase64);
  };

  return {
    initialLoading,
    fileBase64,
    download,
  };
};
