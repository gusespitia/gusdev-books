import { defineCollection, z } from "astro:content";


const books = defineCollection({
    schema: z.object({
        title: z.string(),   
        author: z.string(),
        description: z.string(),
        readTime: z.number(),
        img: z.string(),
        buy: z.object({
            spain: z.string().url(),
            belgium: z.string().url(),
        }),
      
    }),
})
export const collections = {books };