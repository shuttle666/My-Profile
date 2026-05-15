'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets'
import { motion } from 'motion/react'

const Contact = () => {
  const [result, setResult] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      setIsSubmitting(true)
      setResult('Sending...')

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !data.success) {
        setResult(data.message || 'Failed to submit the form.')
        return
      }

      setResult('Form submitted successfully.')
      form.reset()
    } catch (error) {
      console.error('Form submission failed', error)
      setResult('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/backgrounds/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use
        the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.35 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />

          <motion.input
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.3 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.3 }}
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit now'}{' '}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.section>
  )
}

export default Contact
