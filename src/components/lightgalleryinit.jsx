import { useEffect } from 'react';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function LightGalleryInit() {
  useEffect(() => {
    const el = document.getElementById('lightgallery');
    if (el) {
      lightGallery(el, {
        plugins: [lgZoom, lgThumbnail],
        selector: '.gallery-item',
        speed: 500,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true,
        thumbWidth: 100,
        thumbHeight: '60px',
      });
    }
  }, []);

  return null;
}
