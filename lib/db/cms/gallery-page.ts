import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config'
import { GalleryProps } from '@/utils/types/redux'

const getGalleryContent = async (): Promise<GalleryProps[]> => {
    try {
        const galleryRef = collection(db, 'gallery')
        const data = await getDocs(galleryRef)
        return data.docs.map(doc => {
            const { img, tag } = doc.data()
            return {
                id: doc.id,
                img,
                tag
            }
        })
    } catch (error) {
        throw error
    }
}

export { getGalleryContent }
