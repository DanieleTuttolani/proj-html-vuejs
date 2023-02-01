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
});
