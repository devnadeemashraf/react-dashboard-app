export default function (server) {
  this.get("/updates", () => {
    const deviceIds = server.schema.all("device").models.map((d) => d.id);
    const updateCount = Math.floor(deviceIds.length * 0.03); // 3% updates

    return {
      updates: Array.from({ length: updateCount }, () => ({
        id: faker.helpers.arrayElement(deviceIds),
        metrics: {
          temperature: faker.number.int({ min: -20, max: 50 }),
          humidity: faker.number.int({ min: 0, max: 100 }),
          battery: faker.number.int({ min: 0, max: 100 }),
        },
      })),
    };
  });
}
