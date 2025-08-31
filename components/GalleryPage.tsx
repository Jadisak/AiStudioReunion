
import React, { useState, useCallback } from 'react';
import { GALLERY_DATA } from '../constants';
import type { GalleryImage } from '../types';

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>(GALLERY_DATA);
  const [newImage, setNewImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setNewImage(URL.createObjectURL(file));
    }
  };

  const handleAddPhoto = useCallback(() => {
    if (newImage) {
      const newPhoto: GalleryImage = {
        id: Date.now(),
        src: newImage,
        caption: caption || "A new memory!",
      };
      setImages(prevImages => [newPhoto, ...prevImages]);
      setNewImage(null);
      setCaption('');
    }
  }, [newImage, caption]);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100">Photo Gallery</h2>
      
      <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Share a Photo</h3>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
        />
        {newImage && (
          <div className="mt-4">
            <img src={newImage} alt="Preview" className="rounded-lg max-h-48 mx-auto" />
            <input 
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add a caption..."
              className="mt-2 w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button 
              onClick={handleAddPhoto} 
              className="mt-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Add to Gallery
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(image => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} alt={image.caption} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
