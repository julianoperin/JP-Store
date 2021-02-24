const products = [
  {
    name: "Snake Plant",
    imageUrl:
      "https://images.unsplash.com/photo-1563419837758-e48ef1b731dd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    description:
      "Best in bright, indirect light. Can tolerate low light levels, but will produce more blooms with more light. Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.",
    price: 56.99,
    countInStock: 15,
  },
  {
    name: "Juniper Bonsai",
    imageUrl:
      "https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?size=200",
    description:
      "The Juniper Bonsai is a miniature version of the actual tree and it is not a houseplant so your bonsai must be kept in a cool or cold environment in the winter season. You have to grow your juniper bonsai tree where it will be receiving more than 4 hours of sunlight every day, and use a soil that tends to become dry.",
    price: 149.99,
    countInStock: 10,
  },
  {
    name: "Majesty Palm",
    imageUrl:
      "https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Echeveria",
    imageUrl:
      "https://images.unsplash.com/photo-1496643220534-f44559ffcb75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    description:
      "Echeveria is a large genus of flowering plants in the family Crassulaceae, native to semi-desert areas of Central America, Mexico and northwestern South America.",
    price: 50.49,
    countInStock: 15,
  },
  {
    name: "Haworthia",
    imageUrl:
      "https://images.unsplash.com/photo-1565839376295-7d3ed1686bef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "Haworthia is a large genus of small succulent plants endemic to Southern Africa . Like the aloes, they are members of the subfamily Asphodeloideae and they generally resemble miniature aloes, except in their flowers, which are distinctive in appearance. They are popular garden and container plants.",
    price: 99.99,
    countInStock: 4,
  },
  {
    name: "Candelabra Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1612362174548-19faa867705b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    description:
      "Euphorbia ingens is a species of flowering plant in the family Euphorbiaceae. It is native to dry areas of southern Africa. It is popularly known as the candelabra tree or naboom, and its milky latex can be extremely poisonous, and a dangerous irritant.",
    price: 79.99,
    countInStock: 10,
  },
  {
    name: "Fig",
    imageUrl:
      "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    description:
      "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall.",
    price: 144,
    countInStock: 8,
  },
  {
    name: "Aloe Vera",
    imageUrl:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80",
    description:
      "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
    price: 19.49,
    countInStock: 15,
  },

  {
    name: "Hedera 'Ivy'",
    imageUrl:
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
    description:
      "Hedera, commonly called ivy (plural ivies), is a genus of 12–15 species of evergreen climbing or ground-creeping woody plants in the family Araliaceae, native to western, central and southern Europe, Macaronesia, northwestern Africa and across central-southern Asia east to Japan and Taiwan.",
    price: 50,
    countInStock: 8,
  },
  {
    name: "Maple Bonsai",
    imageUrl:
      "https://images.unsplash.com/photo-1470364693235-a4fe27c60914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      'It is widely grown in temperate regions as an ornamental tree. It was introduced very early to Japan, where its name translates as "China maple". It is a small to medium-sized deciduous tree reaching a height of 5–20 m with a trunk up to 50 cm diameter.',
    price: 74.49,
    countInStock: 9,
  },
  {
    name: "Terrain'",
    imageUrl:
      "https://images.unsplash.com/photo-1603436326446-74e2d65f3168?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80",
    description:
      "Perhaps best known for gardening supplies and garden-inspired decor, Anthropologie spin-off Terrain offers a number of ethereal houseplants—think a fragrant pail of pre-potted jasmine—for purchase online (in lovely planters, to boot). ",
    price: 59.99,
    countInStock: 4,
  },
];

module.exports = products;
