import { reactive } from "vue";

export const store = reactive({
  trainers: [
    {
      name: "Ann Baker",
      role: "Personal Trainer",
      pic: "trainer1.jpg",
    },
    {
      name: "Anne Warren",
      role: "Personal Trainer",
      pic: "trainer3.jpg",
    },
    {
      name: "Peter Rice",
      role: "Personal Trainer",
      pic: "trainer4.jpg",
    },
  ],
  news: [
    {
      pic: "blog1.jpg",
      title: "Train with free weights or your body weight?",
    },
    {
      pic: "blog6.jpg",
      title: "Nutritional advice that will keep you training",
    },
    {
      pic: "trainer4.jpg",
      title: "Simple principles for your next workout!",
    },
    {
      pic: "blog4.jpg",
      title: "to be number one, train like you're number two!",
    },
    {
      pic: "trainer3.jpg",
      title: "Top 5 mistakes evry gym member makes",
    },
    {
      pic: "trainer1.jpg",
      title: "The myths of shedding body fat explored",
    },
  ],
});
