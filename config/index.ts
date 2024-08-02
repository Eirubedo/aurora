import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
title: 'AURORA',
  description: 'Aku adalah sahabat rahasia kamu yang selalu siap dengerin curhatanmu. Aku juga punya banyak trik keren buat bikin kamu ngerasa lebih baik dan semangat lagi. Udah kayak punya guru kehidupan pribadi, tapi tanpa bikin kamu bete :)',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
