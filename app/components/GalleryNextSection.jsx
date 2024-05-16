'use client';

import * as React from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import NextJsImage from './NextJsImage';
import slides from '../../public/slides';

export default function GalleryNextSection() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <h1>GALLERYNEXT</h1>
      <button type='button' onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
