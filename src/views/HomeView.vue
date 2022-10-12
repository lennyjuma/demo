<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:py-32 sm:px-2 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="max-w-3xl">
          <h2 class="font-semibold text-gray-500">Drawstring Canister</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Use it your way</p>
          <p class="mt-4 text-gray-500">The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day. Shoulder sling it, backpack it, or handy carry it.</p>
        </div>

        <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
              <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
            </div>
            <div class="flex-auto lg:col-span-7 xl:col-span-8">
              <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="bg-white">
    <div aria-hidden="true" class="relative">
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg" alt="" class="h-96 w-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-t from-white" />
    </div>

    <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
        <p class="mt-4 text-gray-500">Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into dedicated trays.</p>
      </div>

      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="feature in feature" :key="feature.name" class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
          <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>


  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
        <p class="mt-4 text-gray-500">As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a fabric sleeve that matches in quality and looks.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in featuresq" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
            <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </a>
      </div>
    </div>
  </div>

</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
const feature = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
  { name: 'Dimensions', description: '15" x 3.75" x .75"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]
const featuresq = [
  {
    name: 'Minimal and thoughtful',
    description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Refined details',
    description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]
const features = [
  {
    name: 'Adventure-ready',
    description:
        'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Minimal and clean',
    description:
        "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Organized',
    description:
        'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]
</script>