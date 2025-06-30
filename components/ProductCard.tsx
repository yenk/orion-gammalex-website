"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

/**
 * ProductCard - Displays a single product/tool in the GammaLex AI toolkit.
 * @param icon - ReactNode icon for the product
 * @param title - Product/tool name
 * @param description - Short description
 * @param href - Link to product/tool page
 */
export function ProductCard({ icon, title, description, href }: {
  icon: ReactNode,
  title: string,
  description: string,
  href: string
}) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <Card className="h-full cursor-pointer transition-all">
          <CardHeader className="flex flex-col items-center justify-center gap-4 pb-0">
            <div className="rounded-full bg-sage-100 p-4 mb-2 flex items-center justify-center">
              {icon}
            </div>
            <CardTitle className="text-center text-2xl font-bold font-satoshi">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2 pb-6 px-6">
            <CardDescription className="text-center text-lg text-gray-600 font-satoshi">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
} 