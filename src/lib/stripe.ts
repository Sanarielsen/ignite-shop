import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables.');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-08-27.basil',
  appInfo: {
    name: 'Ignite Shop',
  }

})