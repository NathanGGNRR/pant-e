<template>
  <div>
    <Carousel :items="mainItems" class="mb-10" />
    <div class="flex flex-col px-80">
      <div class="flex flex-row justify-between mb-10">
        <div class="text-black font-light text-4xl">New collection</div>
        <div class="flex flex-row items-center cursor-pointer">
          <NuxtLink class="text-black font-light text-4xl" to="/catalog"
            >See all</NuxtLink
          >
          <font-awesome-icon
            class="chevron-icon ml-4 text-4xl"
            :icon="['fas', 'chevron-right']"
          ></font-awesome-icon>
        </div>
      </div>
      <Carousel
        :items="secondItems"
        :displayed-number="3"
        :has-content-text="false"
        has-border
        :height="250"
        :gap="48"
        has-footer-text
      />
      <HomePicture
        image="img/home/7.jpg"
        title="New desire box"
        :height="500"
        has-discover-btn
        class="mt-20"
      />
      <div class="flex flex-row mt-4 mb-4">
        <HomePicture
          image="img/home/9.jpg"
          title="My jewel"
          :height="300"
          has-discover-btn
          class="mr-2"
        />
        <HomePicture
          image="img/home/10.jpg"
          title="Andalusian fever"
          :height="300"
          has-discover-btn
          class="ml-2"
        />
      </div>
      <HomePicture
        image="img/home/8.jpg"
        title="Eco-responsible collection"
        :height="500"
        has-discover-btn
      />
      <div class="flex flex-row my-20 justify-around">
        <HomeAdvice title="Free shipping" sub-title="over 99€" />
        <HomeAdvice title="30 days" sub-title="to send back if not satisfied" />
        <HomeAdvice title="Customer service" sub-title="06 35 90 77 17" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  middleware: ['color'],
  data() {
    return {
      mainItems: [
        {
          image: 'img/home/1.jpg',
          title: 'Discover our new collection',
          name: 'DIIAGE',
          by: 'Baptiste ROUILLON',
          discoverBtn: true,
        },
        {
          image: 'img/home/2.jpg',
          title: 'Want to fight in undergarments ?',
          name: 'HARAKIRI',
          by: 'Raphaël DELCROIX',
          discoverBtn: true,
        },
        {
          image: 'img/home/3.jpg',
          title: 'A collection that makes you stronger',
          name: 'INVINCIBLE',
          by: 'Benjamin SORRIAUX',
          discoverBtn: true,
        },
        {
          image: 'img/home/4.jpg',
          title: 'Autumn/Winter collection',
          name: 'DIVERSITY',
          by: 'Nathan GAGNIARRE',
          discoverBtn: true,
        },
        {
          image: 'img/home/5.jpg',
          title: 'Spring/Summer collection',
          name: 'DIVERSITY',
          by: 'Nathan GAGNIARRE',
          discoverBtn: true,
        },
        {
          image: 'img/home/6.jpg',
          title: 'Summer/Autumn collection',
          name: 'DIVERSITY',
          by: 'Nathan GAGNIARRE',
          discoverBtn: true,
        },
      ],
      secondItems: [
        {
          image: 'img/home/5.jpg',
          title: 'Floral Lace Thong',
          category: 'Panty',
          cost: 12.5,
        },
        {
          image: 'img/home/6.jpg',
          title: '5-Pack Cotton Bikini',
          category: 'Panties',
          cost: 30,
        },
        {
          image: 'img/home/6.jpg',
          title: 'Stretch Cotton Lace-waist Cheeky',
          category: 'Panty',
          cost: 15.99,
        },
        {
          image: 'img/home/6.jpg',
          title: 'Floral Lace Thong',
          category: 'Panty',
          cost: 12.5,
        },
        {
          image: 'img/home/6.jpg',
          title: '5-Pack Cotton Bikini',
          category: 'Panty',
          cost: 30,
        },
        {
          image: 'img/home/6.jpg',
          title: 'Stretch Cotton Lace-waist Cheeky',
          category: 'Panty',
          cost: 15.99,
        },
      ],
    }
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Page d'accueil du site web",
      },
    ],
  },
}
</script>
