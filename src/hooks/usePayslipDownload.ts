import { useEffect, useState } from 'react';
import { getFileBase64FromStorage } from '../utils/getFileBase64FromStorage';
import { putFileBase64ToStorage } from '../utils/putFileBase64ToStorage';

export const usePayslipDownload = (fileName: string) => {
  const [fileBase64, setFileBase64] = useState<Blob | string | null>(null);
  const [initialLoading, setInitailLoading] = useState(true);

  useEffect(() => {
    const start = async () => {
      const fileBase64 = await getFileBase64FromStorage(fileName);
      setFileBase64(fileBase64);
      setInitailLoading(false);
    };

    if (fileName) {
      start();
    }
  }, [fileName]);

  const download = async () => {
    await putFileBase64ToStorage(fileName);
    const fileBase64 = await getFileBase64FromStorage(fileName);
    setFileBase64(fileBase64);
  };

  return {
    initialLoading,
    fileBase64,
    download,
  };
};
