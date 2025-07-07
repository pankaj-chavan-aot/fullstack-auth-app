// components/FileUpload.tsx

import { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:3000/upload', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded: ' + res.data.filename);
    } catch (err) {
      console.error('Upload failed', err);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => e.target.files && setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
