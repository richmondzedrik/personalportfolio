import { MotionPlugin } from '@vueuse/motion'

export const installMotion = (app) => {
  app.use(MotionPlugin)
}
