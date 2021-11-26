const initialState = {
  pos: ["桃園火車站", "桃園藝文廣場"],
  time: {
    type: "出發時間",
    date: "12/31(五)",
    clock: "14:00",
  },
  planlist: [
    {
      time: ["14:00", "14:23", "23"],
      step: [
        { type: "walk", time: "5" },
        {
          type: "bus",
          name: "152",
          start: "統領百貨",
          end: "大興西新埔六街口",
        },
        { type: "walk", time: "7" },
      ],
      price: 18,
    },
    {
      time: ["14:05", "14:26", "21"],
      step: [
        { type: "walk", time: "5" },
        {
          type: "bus",
          name: "151",
          start: "統領百貨",
          end: "中正藝文特區(福安宮)",
        },
        { type: "walk", time: "5" },
      ],
      price: 18,
    },
  ],
};

// {
//   time: [startTime, endTime, costTime],
//   step: [
//     { type: "walk", time: "2" },
//     { type: "bus", name: "568" },
//   ],
//   price: 15,
// };

export const planReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
