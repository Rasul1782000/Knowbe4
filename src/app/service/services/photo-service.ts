import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api'; // 

export interface Photo {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // Fixed: Now returns Promise<Photo[]> for async compatibility
  getImages(): Promise<Photo[]> {
    return Promise.resolve(this.getPhotos()); // Synchronous mock; replace with HTTP if needed
  }

  getPhotos(): Photo[] {
    return [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Nature',
        title: 'Nature Photo 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
        alt: 'Space',
        title: 'Space Photo 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
        alt: 'Landscape',
        title: 'Landscape Photo 3'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
        alt: 'Ocean',
        title: 'Ocean Photo 4'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
        alt: 'Mountain',
        title: 'Mountain Photo 5'
      }
    ];
  }

  // Alternative method for responsive images (e.g., for Galleria)
  getPhotosWithSizes(): { large: string; medium: string; thumbnail: string; alt: string }[] {
    return this.getPhotos().map(photo => ({
      large: photo.itemImageSrc.replace('galleria', 'galleria-large'), // Mock size variants
      medium: photo.itemImageSrc,
      thumbnail: photo.thumbnailImageSrc,
      alt: photo.alt
    }));
  }
}