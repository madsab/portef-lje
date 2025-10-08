import z from "zod";



const AboutItemSchema = z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    number: z.number().optional()
})

export type AboutItem = z.infer<typeof AboutItemSchema>