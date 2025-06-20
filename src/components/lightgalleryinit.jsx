import React, { useEffect } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const LightGalleryInit = () => {
  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  return null; // This component just runs the effect, no visible output
};

export default LightGalleryInit;
