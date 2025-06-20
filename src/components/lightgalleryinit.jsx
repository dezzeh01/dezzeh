import React, { useEffect } from 'react';

export default function LightGalleryInit() {
  useEffect(() => {
    async function initLightGallery() {
      const lightGallery = (await import('lightgallery')).default;
      const lgZoom = (await import('lightgallery/plugins/zoom')).default;
      const lgThumbnail = (await import('lightgallery/plugins/thumbnail')).default;

      lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true,
        thumbWidth: 100,
        thumbHeight: '60px',
      });
    }
    initLightGallery();
  }, []);

  return null;
}
